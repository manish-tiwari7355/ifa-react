import Image from 'next/image';
import { useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css';

import Styles from './index.module.css';
SwiperCore.use([Navigation, Pagination, A11y]);
import { RightArrowIcon } from '@/utils/AppIcons';
const Card = ({ data }) => {
  const [prevState, setPrevState] = useState(0);
  const [nextState, setNextState] = useState(2);

  return (
    <div className=' relative h-full w-full lg:h-[55vh]'>
      <div className='lg:mt-25 mx-auto w-[100%] max-w-[1400px]  md:w-[80%] xl:w-[90%] 2xl:w-[90%]'>
        <div className='lg:mt-20'>
          <Swiper
            slidesPerView={1}
            spaceBetween={80}
            slidesPerGroupSkip={1}
            grabCursor={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            speed= {1000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: '.swiper-navigation-next1',
              prevEl: '.swiper-navigation-prev1',
            }}
            modules={[Autoplay]}
            style={{ zIndex: 0 }}
          >
            {/* {data?.map((item: any) => (
              <div
                className='h-[250px] w-full rounded-lg  bg-[#001A31] shadow-md '
                key={item?.id}
              >
                <div className='flex justify-between'>
                  <div className=' ml-[45px] mt-[-30px] h-[75px] w-[75px] rounded-full border-4 border-[#001A31]'>
                    <Image
                      src='/images/female.png'
                      alt=''
                      height='100%'
                      width='100%'
                      objectFit='contain'
                    />
                  </div>
                  <div className=''>
                    <Image
                      src='/images/ribbon.png'
                      alt=''
                      height='80'
                      width='100'
                    />
                  </div>
                </div>
                <div className='mt-[-40px]  flex flex-col justify-between p-4 leading-normal'>
                  <h5 className='sans-serif mb-2 text-[18px] font-bold tracking-tight text-[#FFFFFF] dark:text-white'>
                    {item?.name}
                  </h5>
                  <div
                    className={`mb-3 justify-center  font-sans text-[16px] font-normal text-[#FFFFFF] ${Styles.disc}`}
                  >
                    {item?.description}
                  </div>
                </div>
              </div>
            ))} */}
            {data?.map((item: any) => (
              <div key={item?.id}>
                <SwiperSlide>
                  <div className='relative '>
                    <div className='mt-10 rounded-lg bg-[#001A31] shadow-md lg:h-[280px] 2xl:h-[250px] 2xl:w-[650px] '>
                      <div className='flex justify-between'>
                        <div className=' ml-[45px] mt-[-30px] h-[75px] w-[75px] rounded-full border-4  border-[#001A31]'>
                          <div className=''>
                            <Image
                              src='/images/female.png'
                              alt=''
                              height={100}
                              width={100}
                              objectFit='contain'
                            />
                          </div>
                        </div>
                        <div className=''>
                          <Image
                            src='/images/ribbon.png'
                            alt=''
                            height={80}
                            width={100}
                          />
                        </div>
                      </div>
                      <div className='mt-[-40px]  flex flex-col justify-between p-4 leading-normal'>
                        <h5 className='sans-serif mb-2 text-[18px] font-bold tracking-tight text-[#FFFFFF] dark:text-white'>
                          {item?.name}
                        </h5>
                        <div
                          className={`mb-3 justify-center  font-sans text-[16px] font-normal text-[#FFFFFF] ${Styles.disc}`}
                        >
                          {item?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <div className='items-center justify-center gap-5 space-y-20 overflow-hidden py-20 sm:space-y-10 sm:p-20 lg:flex lg:space-y-0  '>
        {data?.slice(prevState, nextState)?.map((item: any) => {
          return (
            <div
            className='h-[250px] w-full rounded-lg  bg-[#001A31] shadow-md '
            key={item?.id}
            >
            <div className='flex justify-between'>
                <div className=' ml-[45px] mt-[-30px] h-[75px] w-[75px] rounded-full border-4 border-[#001A31]'>
                  {' '}
                  <Image
                    src='/images/female.png'
                    alt=''
                    height='100%'
                    width='100%'
                    objectFit='contain'
                  />
                </div>
                <div className=''>
                  <Image
                    src='/images/ribbon.png'
                    alt=''
                    height='80'
                    width='100'
                  />
                </div>
              </div>
              <div className='mt-[-40px]  flex flex-col justify-between p-4 leading-normal'>
                <h5 className='sans-serif mb-2 text-[18px] font-bold tracking-tight text-[#FFFFFF] dark:text-white'>
                  {item?.name}
                </h5>
                <div
                  className={`mb-3 justify-center  font-sans text-[16px] font-normal text-[#FFFFFF] ${Styles.disc}`}
                >
                  {item?.description}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className=''>
        <div className='absolute z-30  mx-auto flex w-full   items-center justify-end   md:top-[45%]  md:block lg:top-[50%] lg:block xl:block 2xl:top-[39%]'>
          <div className='mx-auto flex w-full'>
            <div className='flex w-full items-center  justify-between'>
              <button
                type='button'
                className={`swiper-navigation-prev1 
                  h-[40px] 
                   
                        w-[40px] rounded-md
                         bg-[#001A31] shadow-lg  `}
              >
                <div className='mr-2 rotate-180'>
                  <RightArrowIcon />
                </div>
              </button>
            </div>

            <button
              type='button'
              id='myDiv'
              className={`swiper-navigation-next1 
                  h-[40px] 
                   
                        w-[40px] rounded-md
                         bg-[#001A31] shadow-lg  `}
            >
              <div className='ml-2 '>
                <RightArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
