// シンプルなインメモリレート制限（緩め設定）
// 本番環境ではRedisなどの外部ストレージを使用することを推奨

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lockedUntil: number | null;
}

const loginAttempts = new Map<string, RateLimitEntry>();

// 緩めの設定
const MAX_ATTEMPTS = 10; // 10回まで許可
const WINDOW_MS = 15 * 60 * 1000; // 15分間
const LOCKOUT_MS = 5 * 60 * 1000; // ロックアウト時間: 5分

// 定期的にエントリをクリーンアップ（メモリリーク防止）
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of loginAttempts.entries()) {
    // ウィンドウを過ぎた古いエントリを削除
    if (now - entry.firstAttempt > WINDOW_MS && !entry.lockedUntil) {
      loginAttempts.delete(key);
    }
    // ロックアウトが終了したエントリを削除
    if (entry.lockedUntil && now > entry.lockedUntil) {
      loginAttempts.delete(key);
    }
  }
}, 60 * 1000); // 1分ごとにクリーンアップ

export function checkRateLimit(identifier: string): {
  allowed: boolean;
  remainingAttempts: number;
  retryAfter: number | null;
} {
  const now = Date.now();
  const entry = loginAttempts.get(identifier);

  // エントリがない場合は許可
  if (!entry) {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS, retryAfter: null };
  }

  // ロックアウト中かチェック
  if (entry.lockedUntil && now < entry.lockedUntil) {
    const retryAfter = Math.ceil((entry.lockedUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfter };
  }

  // ロックアウトが終了した場合はリセット
  if (entry.lockedUntil && now >= entry.lockedUntil) {
    loginAttempts.delete(identifier);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS, retryAfter: null };
  }

  // ウィンドウを過ぎている場合はリセット
  if (now - entry.firstAttempt > WINDOW_MS) {
    loginAttempts.delete(identifier);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS, retryAfter: null };
  }

  // 制限内かチェック
  const remainingAttempts = Math.max(0, MAX_ATTEMPTS - entry.count);
  return { allowed: remainingAttempts > 0, remainingAttempts, retryAfter: null };
}

export function recordFailedAttempt(identifier: string): void {
  const now = Date.now();
  const entry = loginAttempts.get(identifier);

  if (!entry) {
    loginAttempts.set(identifier, {
      count: 1,
      firstAttempt: now,
      lockedUntil: null,
    });
    return;
  }

  // ウィンドウを過ぎている場合はリセット
  if (now - entry.firstAttempt > WINDOW_MS) {
    loginAttempts.set(identifier, {
      count: 1,
      firstAttempt: now,
      lockedUntil: null,
    });
    return;
  }

  entry.count++;

  // 制限に達したらロックアウト
  if (entry.count >= MAX_ATTEMPTS) {
    entry.lockedUntil = now + LOCKOUT_MS;
  }
}

export function resetRateLimit(identifier: string): void {
  loginAttempts.delete(identifier);
}
