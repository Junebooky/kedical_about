import React from 'react';

const KoreaBeauty: React.FC = () => {
  return (
    <div 
      className="w-full h-[393px] bg-gray-800 bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
      }}
    >
      <div className="flex flex-col gap-4 max-w-[92%] mx-auto">
        <span className="md:typo-head5 sm:text-[20px] text-[16px] text-violet-300">
          Korea beauty treatment
        </span>
        <div>
          <span className="md:typo-head2 sm:typo-body3 typo-body4 text-white">
            Struggling to find the right medical provider and procedure for your needs?
          </span>
        </div>
      </div>
    </div>
  );
};

export default KoreaBeauty;
