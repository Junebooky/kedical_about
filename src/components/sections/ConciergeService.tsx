import React, { useState } from 'react';

const ConciergeService: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dining' | 'stays'>('dining');

  const diningItems = [
    {
      id: '1',
      location: 'Gangnam Station',
      title: 'Korean cuisine',
      image: '/placeholder-dining-1.jpg',
    },
    {
      id: '2',
      location: 'Apgujeong Seoul',
      title: '#TraditionalKoreanCafé',
      image: '/placeholder-dining-2.jpg',
    },
    {
      id: '3',
      location: 'Jungang-ro Daegu',
      title: 'Korean fried chicken',
      image: '/placeholder-dining-3.jpg',
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center overflow-hidden lg:h-[1000px] md:h-[800px] h-[1000px] xl:py-[148px] sm:py-[100px] py-[50px] gap-[32px] max-w-[92%] mx-auto">
      <div className="flex flex-col gap-2 max-w-[92%] mx-auto items-center">
        <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
          CONCIERGE SERVICE
        </span>
        <span className="md:typo-head1 sm:typo-head2 typo-head-lg text-center text-black">
          Beyond Medical Care
          <br />
          Your all-in-one Korean experience
        </span>
        <span className="md:typo-body1 sm:typo-body2 typo-body-lg text-center text-black">
          Book your entire journey at once
          <br />
          From flight and hotels to local cafés and restaurants near your hospital
        </span>
      </div>
      
      {/* Tab container */}
      <div className="tab-container bg-[#E5E1FD] md:w-[390px] md:h-[72px] md:p-[10px] w-[290px] h-[52px] p-[5px] rounded-lg">
        <div className="tab-list relative flex gap-2">
          <div
            className="tab-indicator absolute top-0 bg-violet-600 md:h-[52px] h-[42px] rounded-lg transition-all duration-300 ease-in-out"
            style={{
              width: activeTab === 'dining' ? '181px' : '181px',
              left: activeTab === 'dining' ? '0px' : '191px',
            }}
          />
          <div
            onClick={() => setActiveTab('dining')}
            className={`tab-item relative md:w-[181px] w-[131px] md:h-[52px] h-[42px] md:typo-body1 typo-body2 !font-bold transition-colors duration-300 ease-in-out ${
              activeTab === 'dining' ? 'text-white' : 'text-violet-600'
            } flex items-center justify-center cursor-pointer z-10`}
          >
            Dining
          </div>
          <div
            onClick={() => setActiveTab('stays')}
            className={`tab-item relative md:w-[181px] w-[131px] md:h-[52px] h-[42px] md:typo-body1 typo-body2 !font-bold transition-colors duration-300 ease-in-out ${
              activeTab === 'stays' ? 'text-white' : 'text-violet-600'
            } flex items-center justify-center cursor-pointer z-10`}
          >
            Stays
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex gap-[17px] md:flex-row flex-col min-[1440px]:scale-none xl:scale-[0.9] xl:-mt-[10px] lg:scale-[0.8] lg:-mt-[20px] min-[880px]:scale-[0.65] min-[880px]:-mt-[40px] md:scale-[0.6] md:-mt-[50px] scale-[0.5] -mt-[250px]">
        {diningItems.map((item) => (
          <div
            key={item.id}
            className="bg-white flex flex-col w-[432px] h-[325px] p-0 rounded-[10px] overflow-hidden"
          >
            <div className="flex-1 relative">
              <div className="w-full h-full bg-gray-200" />
            </div>
            <div className="h-[90px] flex flex-col justify-center items-center bg-navy">
              <span className="typo-body1 text-white">{item.location}</span>
              <span className="typo-head5 text-white">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConciergeService;
