import React from 'react';

const AdvanceBooking: React.FC = () => {
  return (
    <div className="min-[1440px]:px-[168px] min-[1440px]:pt-[159px] min-[1440px]:pb-[0px] xl:px-[100px] xl:pt-[159px] lg:px-[50px] lg:pb-[0px] sm:py-[100px] py-[50px] flex lg:flex-row-reverse flex-col justify-between items-center max-w-[92%] mx-auto">
      <div className="flex flex-col gap-2 max-w-[92%] mx-auto lg:items-start items-center xl:mr-[33px] z-10">
        <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
          Advance booking
        </span>
        <span className="md:typo-head1 sm:typo-head2 typo-head-lg lg:text-left text-center text-black">
          Book in advance
          <br />
          Wherever you are
          <br />
          <span className="text-violet-600">No need to visit</span>
        </span>
        <span className="md:typo-body1 sm:typo-body2 typo-body-lg lg:text-left text-center text-black">
          Ensure your beauty journey after pre-consultation.
          <br />
          Avoid procedure unavailability during your trip.
        </span>
      </div>
      
      <div className="w-[793px] h-[793px] relative -ml-[250px] md:mt-0 -mb-[28px] xl:scale-none lg:scale-[0.9] md:scale-[0.85] scale-[0.7]">
        <div
          className="rounded-full w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)',
          }}
        />
        <div className="w-[539px] h-[693px] absolute top-[81px] left-[251px]">
          {/* Phone with calendar placeholder */}
          <div className="w-full h-full bg-gray-200 rounded-[40px] relative">
            {/* Calendar popup placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[450px] bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-4">
                <p className="typo-body1">Select date</p>
                <p className="typo-head4">2025 May 2 01:45 PM</p>
              </div>
              <div className="bg-gray-100 h-[300px] rounded-lg" />
              <div className="flex gap-4 mt-4">
                <button className="flex-1 py-3 rounded-lg border border-violet-600 text-violet-600">
                  No
                </button>
                <button className="flex-1 py-3 rounded-lg bg-violet-600 text-white">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceBooking;
