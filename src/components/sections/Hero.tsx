import React from 'react';
import AppDownloadButtons from '../common/AppDownloadButtons';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-[550px] sm:h-[750px] md:h-[850px] lg:h-[986px] sm:pt-[146px] pt-[130px]">
      <div className="flex flex-col gap-6 max-w-[92%] mx-auto">
        <div className="flex flex-col gap-1 items-center">
          <span className="md:typo-head4 sm:typo-head5 text-lg font-normal">
            All-in-one medical tourism, made simple
          </span>
          <span className="font-pretendard font-bold text-[28px] sm:text-[40px] md:text-[50px] text-center">
            Gateway to <br />
            <span className="text-violet-600">Korean medical care</span>
          </span>
        </div>
        
        <AppDownloadButtons />
      </div>
      
      {/* Background and phone images */}
      <div className="absolute xl:top-[90px] lg:top-[60px] md:top-[130px] sm:top-[130px] top-[160px] xl:scale-none lg:scale-[0.8] md:scale-[0.6] sm:scale-[0.5] scale-[0.3] left-0 w-full h-full">
        {/* Gradient circle background */}
        <div 
          className="rounded-full w-[834px] h-[834px] absolute -bottom-[179px] left-1/2 -translate-x-1/2"
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)'
          }}
        />
        
        {/* Phone images container */}
        <div className="absolute -bottom-[65px] left-1/2 -translate-x-1/2 w-[951px] h-[569px]">
          {/* Left label */}
          <div className="bg-violet-600 w-[266px] h-[78px] typo-head5 text-white flex items-center justify-center rounded-3xl rounded-br-none absolute -top-[14px] -left-[174px]">
            Simple consultation
          </div>
          
          {/* Phone images */}
          <div className="w-[951px] h-[569px] flex justify-between">
            {/* Left phone placeholder */}
            <div className="w-[274px] h-[564px] bg-gray-200 rounded-[40px]" />
            {/* Right phone placeholder */}
            <div className="w-[274px] h-[564px] bg-gray-200 rounded-[40px]" />
          </div>
          
          {/* Right label */}
          <div className="bg-violet-600 w-[266px] h-[78px] typo-head5 text-white flex items-center justify-center rounded-3xl rounded-bl-none absolute top-[88px] -right-[184px]">
            One click away
          </div>
        </div>
        
        {/* Woman image placeholder */}
        <div className="absolute -bottom-[162px] left-1/2 -translate-x-2/5 h-[780px] md:scale-none">
          <div className="min-w-[527px] h-full bg-gray-300 rounded-[40px]" />
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div 
        className="w-full absolute bottom-0 sm:h-[214px] h-[100px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)'
        }}
      />
    </div>
  );
};

export default Hero;
