import Link from 'next/link';
import PublicLayout from '@/components/PublicLayout';

export const metadata = {
  title: 'お問い合わせ | SKY KIDS',
  description: 'SKY KIDSへのお問い合わせページです。',
};

export default function ContactPage() {
  return (
    <PublicLayout>
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[var(--primary-color)]">ホーム</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">お問い合わせ</span>
          </nav>

          {/* タイトル */}
          <h1 className="text-3xl font-bold text-center mb-6">お問い合わせ</h1>

          {/* 説明文言 */}
          <div className="text-center mb-8">
            <p className="text-gray-700 text-base leading-relaxed">
              見学や入会に関するご質問、その他ご不明な点がございましたら<br className="hidden sm:inline" />
              お気軽にお問い合わせください。
            </p>
          </div>

          {/* 電話番号 */}
          <article className="bg-white border rounded-lg p-6 mb-8 text-center hover:shadow-md transition-shadow">
            <p className="text-gray-600 text-sm mb-2">お急ぎの方はお電話ください</p>
            <a
              href="tel:0995-70-6623"
              className="text-2xl font-bold text-[var(--primary-dark)] hover:text-[var(--primary-color)] transition-colors"
            >
              TEL: 0995-70-6623
            </a>
            <p className="text-gray-500 text-sm mt-2">
              受付時間: 月〜金 11:00〜19:00 / 土 7:30〜19:00
            </p>
          </article>

          {/* Google Form ボタン */}
          <article className="bg-white border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <p className="text-gray-600 text-sm mb-4">フォームからのお問い合わせ</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjMbznJ6oPyulEHHs92ZslfFip8T--3h4BuOqm2UFdeI3uwQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md bg-[var(--primary-color)] text-white font-bold py-4 rounded-full text-lg hover:bg-[var(--primary-dark)] transition-colors shadow-lg"
            >
              お問い合わせフォームへ
            </a>
          </article>

          {/* プライバシーポリシー */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold mb-4">プライバシーポリシー</h2>
            <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
              <p>
                児童クラブ SKY KIDS（以下「当施設」）は、お問い合わせいただいた際に取得する個人情報について、以下のとおり適切に取り扱います。
              </p>
              <h3 className="font-bold mt-4">1. 個人情報の利用目的</h3>
              <p>
                お問い合わせへの回答、見学・入会に関するご連絡、当施設からのお知らせのために利用いたします。
              </p>
              <h3 className="font-bold mt-4">2. 第三者への提供</h3>
              <p>
                法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
              <h3 className="font-bold mt-4">3. 個人情報の管理</h3>
              <p>
                個人情報への不正アクセス、紛失、漏洩等を防止するため、適切な安全管理措置を講じます。
              </p>
              <h3 className="font-bold mt-4">4. お問い合わせ</h3>
              <p>
                個人情報の取り扱いに関するお問い合わせは、当施設までご連絡ください。
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--primary-dark)] hover:underline"
            >
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
