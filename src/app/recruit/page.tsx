import Link from 'next/link';
import PublicLayout from '@/components/PublicLayout';

export const metadata = {
  title: '児童募集 | SKY KIDS',
  description: 'SKY KIDSの児童募集要項です。',
};

export default function RecruitPage() {
  return (
    <PublicLayout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[var(--primary-color)]">ホーム</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">児童募集</span>
          </nav>

          <h1 className="text-3xl font-bold mb-8 text-center">児童募集</h1>

          <p className="text-center text-gray-600 mb-10">
            SKY KIDSでは、以下の要項で児童を募集しています。<br />
            ご不明な点はお気軽にお問い合わせください。
          </p>

          {/* 募集要項 */}
          <section className="bg-white border rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-sm">📋</span>
              募集要項
            </h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">対象年齢</p>
                  <p className="font-bold">小学1年生〜6年生</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">定員</p>
                  <p className="font-bold">20名程度</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">募集時期</p>
                  <p className="font-bold">随時受付中</p>
                </div>
              </div>
            </div>
          </section>

          {/* 開所時間 */}
          <section className="bg-white border rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-sm">🕐</span>
              開所時間
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium w-32">平日（月〜金）</td>
                    <td className="py-3">下校時〜19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">土曜日</td>
                    <td className="py-3">7:30〜19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">長期休暇</td>
                    <td className="py-3">7:30〜19:00（春・夏・冬休み）</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">休所日</td>
                    <td className="py-3">日曜日・祝日・年末年始</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 料金 */}
          <section className="bg-white border rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-sm">💰</span>
              料金案内
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium w-40">入会金</td>
                    <td className="py-3">XX,XXX円</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">月額利用料</td>
                    <td className="py-3">XX,XXX円</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">おやつ代</td>
                    <td className="py-3">X,XXX円/月</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">延長料金</td>
                    <td className="py-3">XXX円/30分</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">一時預かり</td>
                    <td className="py-3">X,XXX円/日</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 兄弟割引、ひとり親世帯割引あり。詳細はお問い合わせください。
            </p>
          </section>

          {/* 入会の流れ */}
          <section className="bg-white border rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-sm">✨</span>
              入会までの流れ
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              {[
                { step: 1, title: 'お問い合わせ', desc: 'お電話またはフォームから' },
                { step: 2, title: '見学', desc: '施設をご案内します' },
                { step: 3, title: '申込み', desc: '必要書類をご提出' },
                { step: 4, title: '入会', desc: 'ようこそSKY KIDSへ!' },
              ].map((item, index) => (
                <div key={item.step} className="flex-1 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">まずはお気軽にお問い合わせください</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjMbznJ6oPyulEHHs92ZslfFip8T--3h4BuOqm2UFdeI3uwQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--primary-color)] text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-[var(--primary-dark)] transition-colors shadow-lg"
            >
              お問い合わせはこちら
            </a>
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
