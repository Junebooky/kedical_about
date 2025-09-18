import React from 'react';
import Button from '../common/Button';
import { Event } from '../../types';

const Promotions: React.FC = () => {
  const events: Event[] = [
    {
      id: '1',
      type: 'Promotional events',
      title: 'Enter event name',
      location: 'Gangnam Station',
      specialty: 'Plastic surgery specialist',
      thumbnail: '/placeholder-event-1.jpg',
    },
    {
      id: '2',
      type: 'Promotional events',
      title: 'Enter event name',
      location: 'Gangnam Station',
      specialty: 'Plastic surgery specialist',
      thumbnail: '/placeholder-event-1.jpg',
    },
    {
      id: '3',
      type: 'Promotional events',
      title: 'Enter event name',
      location: 'Gangnam',
      specialty: 'Plastic surgery specialist',
      thumbnail: '/placeholder-event-1.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center md:h-[1100px] md:pt-[133px] py-[100px] md:gap-[40px]">
      <div className="flex flex-col gap-2 items-center max-w-[92%] mx-auto">
        <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
          PROMOTIONS
        </span>
        <span className="md:typo-head1 sm:typo-head2 typo-head-lg text-center text-black">
          Exclusive deals just for Kedical customers
        </span>
        <span className="md:typo-body1 sm:typo-body2 typo-body-lg text-center text-black">
          Special offers prepared by Kedical and partner hospitals for our members.
        </span>
      </div>
      
      <div className="flex gap-[30px] md:flex-row flex-col min-[1440px]:scale-none xl:scale-[0.9] xl:-mt-[10px] lg:scale-[0.8] lg:-mt-[20px] md:scale-[0.6] md:-mt-[50px] scale-[0.6] -mt-[260px]">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white flex flex-col w-[432px] h-[465px] p-0 rounded-[16px] overflow-hidden"
          >
            <div className="flex-1 relative overflow-hidden rounded-[16px]">
              <div className="w-full h-full bg-gray-200" />
            </div>
            <div className="h-[185px] flex flex-col gap-1 pt-[26px] px-[26px]">
              <span className="typo-head5 text-violet-600">{event.type}</span>
              <span className="typo-head3 text-black">{event.title}</span>
              <span className="typo-body1 text-black">
                {event.location}, Seoul |<br />
                {event.specialty}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="primary" size="medium" className="md:mt-0 -mt-[260px] *:!font-bold">
        View more
      </Button>
    </div>
  );
};

export default Promotions;
