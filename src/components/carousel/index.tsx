import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Carousel = ({ carouselItems }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((pre) => pre + 1);
    }, 5000);

    if (activeIndex === carouselItems?.length) {
      setActiveIndex(0);
    }
    return () => {
      clearInterval(timer);
    };
  }, [activeIndex, carouselItems?.length]);

  return (
    <div
      className=' mx-auto flex  h-[641px] w-full  items-center rounded-xl  pb-[34px] pt-[50px] shadow-lg md:h-[641px]  md:w-[950px] md:px-[20px]  md:pb-[124px]  lg:px-[20px] lg:pb-[124px] xl:px-[20px] xl:pb-[124px]  xl:pt-[50px]'
      style={{
        backgroundImage: 'url(/images/carousal-bg.jpg) ',
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='relative w-full'>
        {carouselItems
          ?.filter((item: any) => {
            return item?._id === carouselItems?.[activeIndex]?._id;
          })
          .map((item: any) => {
            return (
              <div
                key={item?._id}
                id='default-carousel'
                data-carousel='static'
                className='     '
              >
                <div className='w-full '>
                  <div className='item-start -ml-4 flex w-[290px]  translate-x-6 flex-col-reverse  transition duration-200 ease-in-out  xs:w-full sm:w-full sm:px-10  md:w-full md:flex-row md:items-center lg:flex-row xl:flex-row '>
                    <div className=' mt-20 ml-0 w-full  pr-10 md:pl-[40px] md:pr-0 lg:pl-[40px] lg:pr-0 xl:pl-[40px] xl:pr-0 '>
                      <h1 className='    text-[38px] font-semibold uppercase leading-[45px] text-[#009E60] '>
                        {item?.name}
                      </h1>
                      <div className='my-[20px] overflow-hidden truncate text-ellipsis pr-5 text-[18px] md:w-[400px] '>
                        {item?.description}
                      </div>
                      <Link
                        href={`/products/viewproduct?productId=${item?._id}`}
                        passHref
                      >
                        <button className='mt-1  max-h-[50px] max-w-[150px]  rounded-xl  border bg-[#009E60] px-[15px] py-[9px] text-[16px] text-white hover:border-[#009E60] hover:bg-white hover:text-[#009E60] md:w-full '>
                          Order Now
                        </button>
                      </Link>
                    </div>
                    <Link
                      href={`/products/viewproduct?productId=${item?._id}`}
                      passHref
                    >
                      <div className='flex items-center justify-center md:w-full  md:justify-end'>
                        <div className='relative h-[200px]  w-[250px] pt-[20px] pr-10 md:h-[300px] md:w-[300px] md:pr-0 lg:pr-0   xl:pr-0 '>
                          <Image
                            src={item?.media[0]}
                            objectFit='contain'
                            height='300px'
                            width='300px'
                            alt=''
                            className=''
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        <div className='absolute z-30 mt-10 hidden  w-full  items-center justify-center md:block lg:block xl:block'>
          <div className='flex w-full items-center justify-center space-x-2 '>
            {' '}
            {carouselItems?.map((item: any, index: any) => {
              return (
                <div key={item?._id} className='   '>
                  <button
                    type='button'
                    className={`  rounded-full  ${
                      carouselItems?.[activeIndex]?._id === item?._id
                        ? 'bg-white shadow-lg'
                        : 'bg-gray-100 shadow-lg '
                    } h-[14px] w-[14px]   `}
                    aria-current='false'
                    aria-label='Slide 1'
                    data-carousel-slide-to='0'
                    onClick={() => {
                      setActiveIndex((prev) => prev + 1);
                    }}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
