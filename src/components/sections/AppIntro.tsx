import React from 'react';

const AppIntro: React.FC = () => {
  const categories = [
    { id: 1, name: 'Face', icon: '👤' },
    { id: 2, name: 'Nose', icon: '👃' },
    { id: 3, name: 'Eyes', icon: '👁️' },
    { id: 4, name: 'Breast', icon: '🫁' },
    { id: 5, name: 'Skin', icon: '🎯' },
    { id: 6, name: 'Body', icon: '🏃' },
  ];

  return (
    <div className="md:h-[1289px] h-[1100px] pt-[123px] overflow-hidden bg-gray-100">
      <div className="flex flex-col gap-2 items-center mb-[40px] max-w-[92%] mx-auto">
        <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
          DISCOVER OUR APP
        </span>
        <span className="md:typo-head1 sm:typo-head2 typo-head-lg text-center text-black">
          Access premium Korean expertise
          <br />
          <span className="text-violet-600">One-stop booking</span> for Diverse procedures
          <br />
          <span className="text-violet-600">K</span>EDICAL
        </span>
        <span className="md:typo-body1 sm:typo-body2 typo-body-lg text-center text-black">
          Experience seamless consultations and booking with the app.
          <br />
          Hassle-free scheduling for your surgery without stepping into a clinic.
        </span>
      </div>
      
      {/* Infinite loop carousel */}
      <div>
        <div className="infinite-loop-carousel-container overflow-hidden whitespace-nowrap flex gap-2">
          <div className="animate-infinite-loop-carousel-slide translate-x-0 inline-block">
            <div className="flex gap-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl bg-white p-4 w-[140px] min-w-[140px] h-[140px] flex flex-col gap-2 items-center justify-center"
                >
                  <span className="text-48">{category.icon}</span>
                  <span className="typo-body1 text-gray-500 font-bold text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Duplicate for infinite loop effect */}
          <div className="animate-infinite-loop-carousel-slide translate-x-0 inline-block">
            <div className="flex gap-2">
              {categories.map((category) => (
                <div
                  key={`${category.id}-duplicate-1`}
                  className="rounded-2xl bg-white p-4 w-[140px] min-w-[140px] h-[140px] flex flex-col gap-2 items-center justify-center"
                >
                  <span className="text-48">{category.icon}</span>
                  <span className="typo-body1 text-gray-500 font-bold text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Another duplicate for smoother infinite loop */}
          <div className="animate-infinite-loop-carousel-slide translate-x-0 inline-block">
            <div className="flex gap-2">
              {categories.map((category) => (
                <div
                  key={`${category.id}-duplicate-2`}
                  className="rounded-2xl bg-white p-4 w-[140px] min-w-[140px] h-[140px] flex flex-col gap-2 items-center justify-center"
                >
                  <span className="text-48">{category.icon}</span>
                  <span className="typo-body1 text-gray-500 font-bold text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Purple light image placeholder */}
        <div className="flex flex-col gap-2 items-center">
          <div className="w-full h-[159px] bg-purple-100 opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default AppIntro;
