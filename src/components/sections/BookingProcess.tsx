import React, { useState } from 'react';
import Button from '../common/Button';
import { Download, MessageSquare, Headphones, FileEdit, Plane } from 'lucide-react';

const BookingProcess: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      icon: <Download className="w-[60px] h-[60px]" />,
      label: 'STEP 1',
      description: 'Download the\nKedical App',
    },
    {
      id: 2,
      icon: <MessageSquare className="w-[60px] h-[60px]" />,
      label: 'STEP 2',
      description: '24/7 chat support\nMedical staff consultation',
    },
    {
      id: 3,
      icon: <Headphones className="w-[60px] h-[60px]" />,
      label: 'STEP 3',
      description: 'Video Consultation\nwith Medical Experts\nMedical staff consultation',
    },
    {
      id: 4,
      icon: <FileEdit className="w-[60px] h-[60px]" />,
      label: 'STEP 4',
      description: 'Book your ideal procedure',
    },
    {
      id: 5,
      icon: <Plane className="w-[60px] h-[60px]" />,
      label: 'STEP 5',
      description: 'Begin your K-medical journey',
    },
  ];

  return (
    <div className="relative py-[126px] bg-gradient-to-b from-[#7600D7] to-[#3E0D71] overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[36px]">
        <div className="w-[543px] h-[674px] bg-purple-800 opacity-20 rounded-full" />
      </div>
      
      <div className="flex flex-col items-center relative">
        <div className="flex flex-col gap-2 items-center max-w-[92%] mx-auto">
          <span className="md:typo-head5 sm:text-[20px] text-[18px] text-white">
            How to book
          </span>
          <span className="md:typo-head1 sm:typo-head2 typo-head-lg text-center text-white">
            Your quick and easy journey
            <br />
            with Kedical starts here
          </span>
          <span className="md:typo-body1 sm:typo-body2 typo-body-lg text-center text-white">
            From convenient consultations to simple procedure scheduling.
            <br />
            All at your fingertips.
          </span>
        </div>
        
        <Button variant="white" size="medium" className="mt-4">
          View more
        </Button>
        
        <div className="flex sm:flex-row flex-col items-center justify-center relative mt-[30px] max-w-[92%] mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center justify-center bg-navy rounded-full opacity-85 w-[154px] h-[154px] relative overflow-hidden transition-all duration-300 ease-in-out z-0 ${
                index > 0 ? 'sm:-ml-[48px]' : ''
              } sm:mt-0 mt-[15px]`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`block items-center justify-center typo-body4 text-white mb-2 transition-opacity duration-300 ease-in-out ${
                    hoveredStep === step.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {step.label}
                </span>
                <span
                  className={`transition-opacity duration-300 ease-in-out text-white ${
                    hoveredStep === step.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {step.icon}
                </span>
                <span
                  className={`absolute left-1/2 top-1/2 w-full px-4 -translate-x-1/2 -translate-y-1/2 text-center typo-body4 text-white transition-all duration-300 ease-in-out pointer-events-none whitespace-pre-line ${
                    hoveredStep === step.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
