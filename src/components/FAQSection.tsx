'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '対象年齢・学年は？',
    answer: '対象学年・学校は特にございません。0歳から一時預かりも可能です。お気軽にご相談ください。',
  },
  {
    question: '見学はできますか？',
    answer: 'はい、いつでもご見学可能です！お電話またはお問い合わせフォームからご連絡ください。',
  },
  {
    question: '土曜日も利用できますか？',
    answer: 'はい、土曜日は7:30〜19:00で開所しています。第二土曜日の出校日など下校時にお迎えに行きます。',
  },
  {
    question: '延長はできますか？',
    answer: 'はい、最大19:00まで延長可能です。お仕事の都合に合わせてご利用ください。',
  },
  {
    question: '割引制度はありますか？',
    answer: 'はい、1人親世帯割引、兄弟・姉妹割引がございます。詳細はお問い合わせください。',
  },
  {
    question: '宿題はみてもらえますか？',
    answer: 'はい、まず「宿題を終わらせること」を習慣づけられるようにサポートしています。帰宅後の負担を減らせます。',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#F7F7F7] rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full min-h-[70px] px-5 py-4 flex items-center gap-4 text-left hover:bg-gray-100 transition-colors"
          >
            <span className="text-[var(--primary-color)] font-bold text-xl shrink-0">Q.</span>
            <span className="text-base font-medium flex-grow">{faq.question}</span>
            <span className={`text-2xl text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-5 pb-5 flex gap-4">
              <span className="text-pink-400 font-bold text-xl shrink-0">A.</span>
              <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
