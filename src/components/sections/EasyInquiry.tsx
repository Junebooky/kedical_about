import React from 'react';
import Button from '../common/Button';
import { Headphones, Stethoscope, Smile } from 'lucide-react';

const EasyInquiry: React.FC = () => {
  const features = [
    {
      icon: <Headphones className="w-full h-full" />,
      title: '24/7 chat\nsupport',
    },
    {
      icon: <Stethoscope className="w-full h-full" />,
      title: 'Medical staff\nconsultation',
    },
    {
      icon: <Smile className="w-full h-full" />,
      title: 'No language\nbarriers',
    },
  ];

  return (
    <div className="bg-gray-100 overflow-hidden min-[1440px]:px-[168px] min-[1440px]:py-[159px] xl:px-[100px] xl:py-[159px] lg:px-[50px] sm:py-[100px] py-[50px] flex lg:flex-row flex-col justify-between items-center">
      <div className="lg:block flex flex-col items-center">
        <div className="flex flex-col gap-2 lg:items-start items-center mb-[24px] max-w-[92%] mx-auto">
          <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
            Effortless consultation
          </span>
          <span className="md:typo-head1 sm:typo-head2 typo-head-lg lg:text-left text-center text-black">
            Credible insights for your procedures
            <br />
            When and where you choose
          </span>
          <span className="md:typo-body1 sm:typo-body2 typo-body-lg lg:text-left text-center text-black">
            Connect with medical experts remotely
          </span>
        </div>
        
        <Button variant="primary" size="medium">
          View more
        </Button>
        
        <div className="flex xl:gap-4 sm:gap-2 gap-1 lg:mt-[64px] mt-[32px] relative z-10 max-w-[92%] mx-auto sm:h-[150px] h-[130px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-4 xl:w-[154px] xl:min-w-[154px] sm:w-[120px] sm:min-w-[120px] w-[100px] min-w-[100px] flex flex-col gap-2 items-center justify-start h-full"
            >
              <span className="xl:w-[48px] xl:h-[48px] sm:w-[38px] sm:h-[38px] w-[28px] h-[28px] flex items-center justify-center text-violet-600">
                {feature.icon}
              </span>
              <span className="xl:typo-body1 sm:typo-body2 typo-body3 text-gray-500 !font-bold text-center whitespace-pre-line">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Phone and gradient background */}
      <div className="w-[666px] h-[666px] relative -mr-[168px] lg:mb-[67px] xl:scale-none lg:scale-[0.9] scale-[0.8]">
        <div
          className="rounded-full w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)',
          }}
        />
        <div className="absolute top-[70px] right-[229px] w-[268px] h-[546px]">
          {/* Phone placeholder */}
          <div className="w-full h-full bg-gray-200 rounded-[40px]" />
          <div className="absolute bottom-[15px] right-[154px] w-[353px] h-[300px]">
            {/* Chat bubble placeholder */}
            <div className="w-full h-full bg-white rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyInquiry;
