import Image from 'next/image';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import ReactPlayer from 'react-player';
// import required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './SliderStyle.module.css';

const ViewImages = ({ getSingleEvent, setIsSlider }) => {
  return (
    <div className='h-[]'>
      <div className='fixed inset-0 z-50 flex  items-center justify-center overflow-hidden overflow-x-hidden overflow-y-hidden outline-none focus:outline-none'>
        <div
          onClick={() => setIsSlider(false)}
          className='absolute  bg-transparent'
        ></div>
        <div className='relative  my-6 mx-auto xxs:w-[90%] xs:w-[100%] sm:w-[70%] md:mt-36 md:w-[60%] lg:w-[50%] xl:w-[50%] '>
          <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
            <div
              onClick={() => setIsSlider(false)}
              className='mb-3 flex justify-between  border-b font-medium'
            >
              <div className='px-5 py-5 pt-2'>Images/Videos</div>
              <div
                onClick={() => setIsSlider(false)}
                className='z-10000    grid h-10 w-10  cursor-pointer place-items-center rounded-full text-white'
              >
                <IoClose
                  onClick={() => setIsSlider(false)}
                  className=' cursor-pointer text-[35px] text-black '
                />
              </div>
            </div>
            <div className='my-5 select-none'>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className='mySwiper h-[100%] w-[100%]'
              >
                {getSingleEvent?.data?.blog?.media?.map((item: any) => (
                  <SwiperSlide
                    className='flex h-[100%] w-[100%]  justify-center'
                    key={item?.id}
                  >
                    {item?.type?.includes('image') ? (
                      <div className='mx-auto '>
                        <Image
                          src={item?.url}
                          alt=''
                          width='500px'
                          height='500px'
                        />
                      </div>
                    ) : (
                      <div className='h-full w-full bg-gray-200'>
                        <ReactPlayer
                          url={item?.url}
                          width='100%'
                          height='100%'
                          controls
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewImages;
