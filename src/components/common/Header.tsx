import React from 'react';
import Button from './Button';
import Logo from './Logo';
import { NavItem } from '../../types';

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Our Services', href: '/' },
    { label: 'Booking Process', href: '/usage' },
    { label: 'Event', href: '/event' },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 md:mx-[23px] mx-4 mt-4 sm:px-[33px] px-4 h-[72px] flex justify-between items-center rounded-2xl bg-violet-600">
      <div className="flex items-center">
        <Logo className="w-[80px] sm:w-[100px] md:w-[120px] h-auto text-white" />
      </div>
      
      <nav className="flex-1 flex justify-center items-center md:gap-[56px] sm:gap-6 gap-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            className="sm:typo-body2 md:typo-body1 text-white typo-body3 leading-none hover:text-gray-200 transition-colors"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      
      <div>
        <Button variant="secondary" size="small">
          <span className="font-[var(--font-roboto)] font-bold md:text-[18px] sm:text-[16px] text-[14px] leading-[150%] tracking-[-1.5%] text-[#333333]">
            App<span className="hidden sm:inline">Download</span>
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
