import Link from 'next/link';
import PublicLayout from '@/components/PublicLayout';
import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'よくある質問 | SKY KIDS',
  description: 'SKY KIDSによくいただくご質問をまとめました。',
};

export default function FAQPage() {
  return (
    <PublicLayout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[var(--primary-color)]">ホーム</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">よくある質問</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8 text-center">よくある質問</h1>

          <p className="text-center text-gray-600 mb-10">
            お問い合わせの多いご質問をまとめました。<br />
            その他ご不明な点は<Link href="/contact" className="text-[var(--primary-color)] hover:underline">お問い合わせページ</Link>よりお気軽にご連絡ください。
          </p>

          <FAQSection />

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
