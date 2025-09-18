import React from 'react';

interface AppDownloadButtonsProps {
  className?: string;
}

const AppDownloadButtons: React.FC<AppDownloadButtonsProps> = ({ className = '' }) => {
  return (
    <div className={`flex gap-[19px] justify-center ${className}`}>
      {/* App Store Button */}
      <button
        className="z-20 md:w-[200px] md:h-[59px] w-[150px] h-[40px] bg-black text-white rounded-lg flex items-center justify-center duration-300 cursor-pointer active:scale-[0.99] hover:opacity-90"
        aria-label="Download on the App Store"
      >
        <div className="flex items-center gap-2">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.125 12.75C16.1094 11.2891 16.6875 9.96094 17.625 9.03125C16.8125 7.875 15.5547 7.17969 14.1328 7.10156C12.6406 6.94531 11.1953 7.98438 10.4453 7.98438C9.69531 7.98438 8.51562 7.11719 7.24219 7.14062C5.63281 7.16406 4.17188 8.09375 3.375 9.54688C1.71875 12.5078 3.00781 16.8828 4.64062 19.2812C5.4375 20.4531 6.39844 21.7969 7.67188 21.75C8.89844 21.7031 9.35156 20.9766 10.8359 20.9766C12.3203 20.9766 12.7266 21.75 13.9766 21.7266C15.2734 21.7031 16.0859 20.5078 16.8828 19.3281C17.7656 18 18.125 16.6953 18.1484 16.6172C18.125 16.6094 16.1406 15.8438 16.125 12.75Z" fill="white"/>
            <path d="M14.2266 5.74219C14.8828 4.92188 15.3438 3.79688 15.2266 2.67188C14.25 2.71094 13.0547 3.375 12.375 4.19531C11.7656 4.92188 11.2266 6.07031 11.3672 7.16406C12.4453 7.25 13.5703 6.5625 14.2266 5.74219Z" fill="white"/>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px] leading-none">Download on the</span>
            <span className="text-[14px] font-semibold leading-none">App Store</span>
          </div>
        </div>
      </button>
      
      {/* Google Play Button */}
      <button
        className="z-20 md:w-[200px] md:h-[59px] w-[150px] h-[40px] bg-black text-white rounded-lg flex items-center justify-center duration-300 cursor-pointer active:scale-[0.99] hover:opacity-90"
        aria-label="Get it on Google Play"
      >
        <div className="flex items-center gap-2">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4375 0.421875C1.17188 0.6875 1 1.0625 1 1.54688V20.4531C1 20.9375 1.17188 21.3125 1.4375 21.5781L1.5 21.625L11.3281 11.7969V11.6875V11.5781L1.5 1.75L1.4375 0.421875Z" fill="url(#paint0_linear)"/>
            <path d="M14.7031 15.1719L11.3281 11.7969V11.6875V11.5781L14.7031 8.20312L14.7812 8.25L18.7656 10.5C19.9219 11.1719 19.9219 12.3125 18.7656 12.9844L14.7812 15.2344L14.7031 15.1719Z" fill="url(#paint1_linear)"/>
            <path d="M14.7812 15.2344L11.3281 11.7812L1.4375 21.5781C1.79688 21.9531 2.39062 21.9844 3.04688 21.625L14.7812 15.2344Z" fill="url(#paint2_linear)"/>
            <path d="M14.7812 8.25L3.04688 1.85938C2.39062 1.5 1.79688 1.53125 1.4375 1.90625L11.3281 11.7812L14.7812 8.25Z" fill="url(#paint3_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="10.3594" y1="1.60938" x2="-3.42188" y2="15.3906" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A0FF"/>
                <stop offset="0.0066" stopColor="#00A1FF"/>
                <stop offset="0.2601" stopColor="#00BEFF"/>
                <stop offset="0.5122" stopColor="#00D2FF"/>
                <stop offset="0.7604" stopColor="#00DFFF"/>
                <stop offset="1" stopColor="#00E3FF"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="20.4219" y1="11.6875" x2="0.875" y2="11.6875" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE000"/>
                <stop offset="0.4087" stopColor="#FFBD00"/>
                <stop offset="0.7754" stopColor="#FFA500"/>
                <stop offset="1" stopColor="#FF9C00"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="12.5938" y1="13.9844" x2="-5.84375" y2="32.4219" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3A44"/>
                <stop offset="1" stopColor="#C31162"/>
              </linearGradient>
              <linearGradient id="paint3_linear" x1="-1.35938" y1="-7.125" x2="7.32812" y2="1.5625" gradientUnits="userSpaceOnUse">
                <stop stopColor="#32A071"/>
                <stop offset="0.0685" stopColor="#2DA771"/>
                <stop offset="0.4762" stopColor="#15CF74"/>
                <stop offset="0.8009" stopColor="#06E775"/>
                <stop offset="1" stopColor="#00F076"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px] leading-none">GET IT ON</span>
            <span className="text-[14px] font-semibold leading-none">Google Play</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AppDownloadButtons;
