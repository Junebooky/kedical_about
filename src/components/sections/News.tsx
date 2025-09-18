import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Button from '../common/Button';
import { NewsItem } from '../../types';
import { Instagram } from 'lucide-react';

const News: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    startIndex: 5 // Start with the last item as active
  });

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: "Celebrate Kedical's Debut: Free Consultations",
      date: '2025.03.15',
      image: '/placeholder-news-1.jpg',
      instagram: true,
    },
    {
      id: '2',
      title: "Celebrate Kedical's Debut: Free Consultations",
      date: '2025.03.15',
      image: '/placeholder-news-2.jpg',
      instagram: true,
    },
    {
      id: '3',
      title: "Celebrate Kedical's Debut: Free Consultations",
      date: '2025.03.15',
      image: '/placeholder-news-3.jpg',
      instagram: true,
    },
    {
      id: '4',
      title: 'Complimentary Hotel Stay with Gangnam Hospital Services',
      date: '2025.03.15',
      image: '/placeholder-news-1.jpg',
      instagram: true,
    },
    {
      id: '5',
      title: "Celebrate Kedical's Debut: Free Consultations",
      date: '2025.03.15',
      image: '/placeholder-news-2.jpg',
      instagram: true,
    },
    {
      id: '6',
      title: "Celebrate Kedical's Debut: Free Consultations",
      date: '2025.03.15',
      image: '/placeholder-news-3.jpg',
      instagram: true,
    },
  ];

  return (
    <div className="bg-white min-[1440px]:px-[168px] min-[1440px]:py-[159px] xl:px-[100px] xl:py-[159px] lg:px-[50px] sm:py-[100px] py-[50px] relative lg:h-[817px] overflow-hidden flex lg:flex-row lg:gap-0 flex-col gap-[50px] justify-between items-center">
      <div className="flex flex-col gap-6 shrink-0 z-10 lg:items-start items-center">
        <div className="flex flex-col gap-2 lg:items-start items-center max-w-[92%] mx-auto">
          <span className="md:typo-head5 sm:text-[20px] text-[18px] text-violet-600">
            NEWS
          </span>
          <span className="md:typo-head1 sm:typo-head2 typo-head-lg lg:text-left text-center text-black">
            Social media buzz
            <br />
            With Kedical
          </span>
          <span className="md:typo-body1 sm:typo-body2 typo-body-lg lg:text-left text-center text-black">
            Check it out now!
          </span>
        </div>
        <Button variant="primary" size="medium" className="*:!font-bold">
          View more
        </Button>
      </div>
      
      {/* Carousel */}
      <div className="lg:absolute xl:-right-[150px] lg:-right-[180px] top-[190px] embla h-[470px] lg:mt-0 md:-mt-[60px] sm:-mt-[80px] min-[500px]:-mt-[100px] -mt-[120px] xl:scale-none lg:scale-[0.7] md:scale-[0.65] sm:scale-[0.6] min-[500px]:scale-[0.5] scale-[0.4]">
        <div className="embla__viewport w-[990px] h-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex h-full items-center ml-[125px]">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`embla__slide flex-none ml-[30px] transition-[width,height] duration-300 ${
                  index === 5 ? 'w-[368px] h-[465px]' : 'w-[281px] h-[355px]'
                }`}
              >
                <div className="rounded-2xl bg-white p-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] w-full h-full relative select-none overflow-hidden">
                  {/* Background image placeholder */}
                  <div className="absolute inset-0 bg-gray-200" />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/[0.216] to-transparent pointer-events-none" />
                  
                  {/* Instagram icon */}
                  {item.instagram && (
                    <div className={`absolute top-[15px] right-[15px] rounded-full flex items-center justify-center cursor-pointer ${
                      index === 5 ? 'w-[72px] h-[72px]' : 'w-[54px] h-[54px]'
                    }`}>
                      <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                        <Instagram size={index === 5 ? 36 : 28} className="text-purple-600" />
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex flex-col gap-1 absolute left-[20px] bottom-[20px]">
                    <span className={`text-white ${index === 5 ? 'typo-head3' : 'typo-head4'}`}>
                      {item.title}
                    </span>
                    <span className="typo-body1 text-white">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
