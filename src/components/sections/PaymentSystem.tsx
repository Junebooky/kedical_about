import React from 'react';

const PaymentSystem: React.FC = () => {
  return (
    <div className="bg-gray-100 overflow-hidden min-[1440px]:px-[168px] min-[1440px]:py-[159px] xl:px-[100px] xl:py-[159px] lg:px-[50px] sm:py-[100px] py-[50px] flex lg:flex-row flex-col justify-between items-center">
      <div className="flex flex-col gap-2 lg:items-start items-center max-w-[92%] mx-auto">
        <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
          Payment system
        </span>
        <span className="md:typo-head1 sm:typo-head2 typo-head-lg lg:text-left text-center text-black">
          Hassle-free
          <br />
          Payment system
        </span>
        <span className="md:typo-body1 sm:typo-body2 typo-body-lg lg:text-left text-center text-black">
          Tired of foreign card rejections and currency exchange hassles?
          <br />
          Our global pre-payment system makes
          <br />
          <span className="font-bold">everything simple before you travel.</span>
        </span>
      </div>
      
      <div className="w-[743px] h-[743px] relative -mr-[112px] lg:scale-none scale-[0.9]">
        <div
          className="rounded-full w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)',
          }}
        />
        <div className="w-[588px] h-[638px] absolute -left-[73px] bottom-[34px]">
          {/* Phone placeholder */}
          <div className="w-full h-full bg-gray-900 rounded-[40px] relative flex items-center justify-center">
            {/* QR Code placeholder */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-[200px] h-[200px] bg-gray-300" />
              <p className="text-center mt-4 typo-body2">Scan QR Code</p>
              <p className="text-center typo-body3 text-gray-600">for easy payment!</p>
            </div>
          </div>
        </div>
        <div className="w-[329px] h-[230px] absolute right-[52px] bottom-[213px]">
          {/* Payment card placeholder */}
          <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6">
            <p className="typo-body1 font-bold mb-4">Kedical Pay</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Point</span>
                <span className="text-violet-600">20,000 P</span>
              </div>
              <div className="flex justify-between">
                <span>Mileage</span>
                <span>0 P</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;
