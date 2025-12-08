import Link from 'next/link';
import PublicLayout from '@/components/PublicLayout';

export const metadata = {
  title: '書類ダウンロード | SKY KIDS',
  description: 'SKY KIDSの各種書類をダウンロードできます。',
};

const documents = [
  {
    category: '入会関連',
    items: [
      { name: '入会申込書', filename: 'application.pdf', description: '入会時に必要な申込書です' },
      { name: '重要事項説明書', filename: 'important_matters.pdf', description: '入会前にご確認ください' },
    ],
  },
  {
    category: '届出関連',
    items: [
      { name: '欠席届', filename: 'absence.pdf', description: 'お休みの際にご提出ください' },
      { name: '届出変更届', filename: 'change.pdf', description: '登録情報の変更時にご提出ください' },
    ],
  },
  {
    category: 'その他',
    items: [
      { name: '年間行事予定表', filename: 'annual_schedule.pdf', description: '年間の行事予定です' },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <PublicLayout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[var(--primary-color)]">ホーム</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">書類ダウンロード</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8 text-center">書類ダウンロード</h1>

          <p className="text-center text-gray-600 mb-10">
            各種書類をダウンロードしてご利用ください。<br />
            ご不明な点はお気軽にお問い合わせください。
          </p>

          {/* Documents List */}
          {documents.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-8">
              <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-sm">📄</span>
                {category.category}
              </h2>
              <div className="bg-white border rounded-lg overflow-hidden">
                {category.items.map((doc, docIndex) => (
                  <div
                    key={docIndex}
                    className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                      docIndex < category.items.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.description}</p>
                    </div>
                    <a
                      href={`/documents/${doc.filename}`}
                      download
                      className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--primary-dark)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      ダウンロード
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Note */}
          <div className="bg-[var(--accent-color)] rounded-lg p-6 mb-10">
            <h3 className="font-bold text-lg mb-3">ご注意</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 書類はPDF形式です。閲覧にはAdobe Readerなどが必要です。</li>
              <li>• 記入方法がわからない場合はお気軽にお問い合わせください。</li>
            </ul>
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
