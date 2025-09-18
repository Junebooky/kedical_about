import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Review } from '../../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const reviews: Review[] = [
    {
      id: '1',
      rating: 5,
      title: 'Helpful reviews made comparing clinics a breeze.',
      content: 'For something like a nose job, seeing real photos\nfrom past patients really gave me confidence.',
      image: '/placeholder-review-1.jpg',
    },
    {
      id: '2',
      rating: 5,
      title: 'Even asking about small procedures felt easy.',
      content: 'I appreciated being able to consult online about minor treatments—no pressure, no judgment.',
      image: '/placeholder-review-2.jpg',
    },
    {
      id: '3',
      rating: 5,
      title: 'Super kind and clear support, even for first-timers.',
      content: 'It was my first time at a plastic surgery clinic, and they explained everything in a friendly way.',
      image: '/placeholder-review-3.jpg',
    },
    {
      id: '4',
      rating: 5,
      title: 'Consulted easily, even from far away.',
      content: 'I didn\'t feel the distance at all—everything was smooth and there were no language issues.',
      image: '/placeholder-review-4.jpg',
    },
    {
      id: '5',
      rating: 5,
      title: 'Kedical only partners with trusted clinics',
      content: 'Too many options can be overwhelming, but Kedical filters out the noise with trusted choices.',
      image: '/placeholder-review-5.jpg',
    },
    {
      id: '6',
      rating: 5,
      title: 'Everything was easy—even though it was my first time.',
      content: 'It was my first time and I had no idea where to start, but Kedical made it all surprisingly easy.',
      image: '/placeholder-review-6.jpg',
    },
  ];

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
        <path
          fill="#FFD271"
          d="m9 0 2.645 5.36 5.915.859-4.28 4.172 1.01 5.89L9 13.5l-5.29 2.781 1.01-5.89L.44 6.219l5.915-.86z"
        />
      </svg>
    ));
  };

  return (
    <div className="embla w-full flex items-center justify-center gap-[17px] sm:-mt-11 -mt-17">
      <button
        onClick={scrollPrev}
        className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer text-gray-600"
      >
        <ChevronLeft size={30} />
      </button>
      
      <div className="embla__viewport w-[1232px] h-[480px] overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full items-center">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="embla__slide flex-none w-[389px] ml-4"
            >
              <div className="rounded-2xl bg-white h-fit shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] flex flex-col p-8 w-full md:scale-none sm:scale-[0.98] min-[500px]:scale-[0.9] min-[400px]:scale-[0.7] scale-[0.63]">
                <div className="flex flex-col gap-2 mb-[25px]">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="typo-head4 -mr-1">{review.title}</span>
                  <span className="typo-body2 -mr-[5px] whitespace-pre-line">
                    {review.content}
                  </span>
                </div>
                {/* Review image placeholder */}
                <div className="w-full h-[200px] bg-gray-200 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollNext}
        className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer text-gray-600"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default Reviews;
