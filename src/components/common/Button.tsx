import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-bold transition-all duration-300 active:scale-[0.99] cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white',
    secondary: 'bg-white hover:bg-gray-50 active:bg-gray-100 text-violet-600',
    white: 'bg-white hover:bg-gray-50 active:bg-gray-100 text-black',
  };
  
  const sizeClasses = {
    small: 'w-[150px] h-[45px] typo-body2',
    medium: 'md:w-[181px] md:h-[52px] w-[150px] h-[45px] typo-body1',
    large: 'md:w-[200px] md:h-[59px] w-[150px] h-[40px] typo-body1',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className={variant === 'primary' ? 'text-white' : ''}>{children}</span>
    </button>
  );
};

export default Button;
