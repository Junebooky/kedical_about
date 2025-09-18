import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-[38px]">
      <div className="flex flex-col gap-4 max-w-[92%] mx-auto">
        <div className="flex justify-between items-center">
          <Logo className="w-[80px] sm:w-[100px] md:w-[120px] h-auto text-white" />
          <div className="flex gap-4 sm:typo-body2 typo-body3 text-white">
            <span className="cursor-pointer hover:text-gray-200 transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-gray-200 transition-colors">Privacy Policy</span>
          </div>
        </div>
        
        <hr className="border-white" />
        
        <div className="flex flex-col sm:typo-body2 typo-body3 text-white">
          <span>Acote Consulting Co., Ltd. | CEO: Junyeop Kim</span>
          <span>
            5F, 501, 73 Dosan-daero 1-gil, Gangnam-gu, <br />
            Seoul, South Korea (Sinsa-dong)
          </span>
          <p>254-86-02496</p>
          <p>+82 10-8785-0501</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
