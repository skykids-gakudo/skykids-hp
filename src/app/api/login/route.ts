import { NextRequest, NextResponse } from 'next/server';
import { verifyCredentials, createToken, setSessionCookie } from '@/lib/auth';
import { checkRateLimit, recordFailedAttempt, resetRateLimit } from '@/lib/rateLimit';

function getClientIP(request: NextRequest): string {
  // Vercelの場合はx-forwarded-forを使用
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  // フォールバック
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);

    // レート制限チェック
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `ログイン試行回数が上限に達しました。${rateLimit.retryAfter}秒後に再試行してください`,
          retryAfter: rateLimit.retryAfter
        },
        { status: 429 }
      );
    }

    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'ユーザー名とパスワードを入力してください' },
        { status: 400 }
      );
    }

    const isValid = await verifyCredentials(username, password);

    if (!isValid) {
      // 失敗を記録
      recordFailedAttempt(clientIP);

      const updatedLimit = checkRateLimit(clientIP);
      const remainingMsg = updatedLimit.remainingAttempts > 0
        ? `（残り${updatedLimit.remainingAttempts}回）`
        : '';

      return NextResponse.json(
        { error: `ユーザー名またはパスワードが正しくありません${remainingMsg}` },
        { status: 401 }
      );
    }

    // ログイン成功時はレート制限をリセット
    resetRateLimit(clientIP);

    const token = createToken();
    await setSessionCookie(token);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'ログインに失敗しました' },
      { status: 500 }
    );
  }
}
