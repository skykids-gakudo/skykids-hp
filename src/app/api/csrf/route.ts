import { NextResponse } from 'next/server';
import { generateCsrfToken } from '@/lib/csrf';
import { getSession } from '@/lib/auth';

export async function GET() {
  // 認証済みユーザーのみCSRFトークンを発行
  const session = await getSession();
  if (!session || session.sub !== 'admin') {
    return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
  }

  const token = await generateCsrfToken();
  return NextResponse.json({ token });
}
