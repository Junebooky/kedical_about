import React from 'react';
import { Hospital } from '../../types';

const PartnerHospitals: React.FC = () => {
  const hospitals: Hospital[] = [
    { id: '1', name: 'Seoul Miz Hospital', image: '/placeholder-hospital-1.jpg' },
    { id: '2', name: 'Won Dental Hospital', image: '/placeholder-hospital-2.jpg' },
    { id: '3', name: 'Gangnam Cube Eye Hospital', image: '/placeholder-hospital-3.jpg' },
    { id: '4', name: 'Seoul Miz Hospital', image: '/placeholder-hospital-1.jpg' },
  ];

  return (
    <div className="bg-gray-100 relative lg:h-[880px] h-[750px] lg:pt-[148px] pt-[100px] overflow-hidden">
      {/* Background image */}
      <div className="xl:w-[1217px] xl:h-[812px] lg:w-[800px] lg:h-[700px] w-[600px] h-[500px] absolute bottom-0 right-0">
        <div className="w-full h-full bg-gray-300 opacity-20" />
      </div>
      
      <div className="flex flex-col gap-2 lg:items-start items-center lg:ml-[56px] mb-[40px] relative max-w-[92%] mx-auto">
        <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
          Partner hospital
        </span>
        <span className="md:typo-head1 sm:typo-head2 typo-head-lg lg:text-left text-center text-black">
          Too many options?
          <br />
          Start with Kedical Premium Partners
        </span>
        <span className="md:typo-body1 sm:typo-body2 typo-body-lg lg:text-left text-center text-black">
          Finding the right procedure is challenging enough, without countless hospital options.
          <br />
          Let us guide you to our curated selection of 15 premier facilities for your consultation.
        </span>
      </div>
      
      {/* Infinite loop carousel */}
      <div className="infinite-loop-carousel-container overflow-hidden whitespace-nowrap flex">
        <div className="animate-infinite-loop-carousel-slide translate-x-0 inline-block">
          <div className="flex">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="rounded-2xl bg-white p-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] relative w-[432px] min-w-[432px] h-[280px] mr-4"
              >
                <div className="w-full h-full bg-gray-200 rounded-lg relative">
                  <span className="typo-body1 text-white absolute left-5 bottom-5">
                    {hospital.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Duplicate for infinite loop */}
        <div className="animate-infinite-loop-carousel-slide translate-x-0 inline-block">
          <div className="flex">
            {hospitals.map((hospital) => (
              <div
                key={`${hospital.id}-duplicate`}
                className="rounded-2xl bg-white p-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] relative w-[432px] min-w-[432px] h-[280px] mr-4"
              >
                <div className="w-full h-full bg-gray-200 rounded-lg relative">
                  <span className="typo-body1 text-white absolute left-5 bottom-5">
                    {hospital.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHospitals;
