import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="60"
        y="28"
        fontSize="24"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Pretendard, sans-serif"
      >
        KEDICAL
      </text>
    </svg>
  );
};

export default Logo;
