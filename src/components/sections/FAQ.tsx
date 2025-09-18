import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { FAQ as FAQType } from '../../types';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems: FAQType[] = [
    {
      id: '1',
      question: 'Can I make a reservation before arriving in Korea?',
      answer: 'Yes, through the Kedical app, you can make a hospital appointment in advance before arriving in Korea.',
    },
    {
      id: '2',
      question: 'Can I write in my own language during the consultation?',
      answer: "Of course! Kedical has a system that automatically translates various languages into the hospital's language, so you can write freely in your own language.",
    },
    {
      id: '3',
      question: 'When and how do I pay my hospital bills?',
      answer: 'You can pay your hospital bills through the Kedical app. You can also pay your hospital bills through the Kedical app. You can also pay your hospital bills through the Kedical app.',
    },
    {
      id: '4',
      question: 'Can I make a reservation before arriving in Korea?',
      answer: 'Yes, through the Kedical app, you can make a hospital appointment in advance before arriving in Korea.',
    },
    {
      id: '5',
      question: 'Can I make a reservation before arriving in Korea?',
      answer: 'Yes, through the Kedical app, you can make a hospital appointment in advance before arriving in Korea.',
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center md:typo-head1 sm:typo-head2 typo-head3 text-center max-w-[92%] mx-auto py-[10px]">
        FAQ
      </div>
      
      <div className="flex flex-col border-t max-w-[92%] mx-auto">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border-b cursor-pointer border-[#D9D9D9]"
            onClick={() => toggleItem(item.id)}
          >
            <div className="w-full h-[78px] flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[30px] h-[30px] bg-violet-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-14 font-bold">Q</span>
                </div>
                <div className="typo-body4 font-bold px-3">{item.question}</div>
              </div>
              <div
                className={`w-[28px] h-[28px] cursor-pointer transition-transform duration-300 ${
                  openItems.includes(item.id) ? '' : 'rotate-180'
                }`}
              >
                <ChevronUp size={28} className="text-gray-500" />
              </div>
            </div>
            
            <div
              className={`bg-white typo-body2 overflow-hidden transition-all duration-300 ${
                openItems.includes(item.id) ? 'max-h-[200px]' : 'max-h-0'
              }`}
            >
              <div className="py-[17px] px-[18.5px] border-t border-[#D9D9D9]">
                <div className="whitespace-pre-line text-gray-700">{item.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
