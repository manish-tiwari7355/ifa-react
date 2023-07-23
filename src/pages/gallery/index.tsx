import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import ReactPlayer from 'react-player';
import HashLoader from 'react-spinners/HashLoader';

import styles from './FontStyle.module.css';

import PageContainer from '@/components/pageContainer';

import noData from '../../assets/img/nodata-found.png';
import { useGetEvents } from '../../hooks/gallary/useGetGallary';

const Gallery = () => {
  const getAllGallaryImages: any = useGetEvents({
    query: { category: 'events', viewSize: 1000 },
  });
  const [gallaryData, setGallaryData] = useState([]);
  const [gallaryType, setGallaryType] = useState('ALL');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (gallaryType === 'ALL') {
      setGallaryData(getAllGallaryImages?.data?.alldata);
    }
  }, [getAllGallaryImages]);

  const overRide: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  // const localUrl = 'http://localhost:5001';
  const liveUrl = 'https://api.fatehacademy.com';
  const fetchVideo = () => {
    axios
      .get(`${liveUrl}/api/video`)
      .then((res) => setVideos(res?.data?.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div>
      <div>
        <div className='sweet-loading'>
          <HashLoader
            color='#FA6210'
            loading={getAllGallaryImages?.isLoading}
            cssOverride={overRide}
            size={150}
          />
        </div>
        <PageContainer title=' Gallery' />
        <div className='mx-8 flex justify-center pt-16 '>
          <div className=' text-4xl  '>
            <div className={styles.fontStyle}>
              <span className='text-[#fa6210]'> Gallery </span>
            </div>
          </div>
          <div className='hidden md:flex'>
            <div className=' absolute mt-[35px] ml-[-100px]'>
              <Image
                alt='orangelines'
                src='/images/orangelines.png'
                height='100px'
                width='100px'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <div>
          <div className='my-5'>
            <button
              onClick={() => {
                setGallaryData(getAllGallaryImages?.data?.alldata);
                setGallaryType('ALL');
              }}
              className={`ml-5 border px-4 py-2 ${
                gallaryType === 'ALL' && 'bg-[#fa6210] text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setGallaryData(
                  getAllGallaryImages?.data?.alldata?.filter((fil: any) =>
                    fil?.type.includes('image')
                  )
                );
                setGallaryType('IMAGES');
              }}
              className={`ml-5 border px-4 py-2 ${
                gallaryType === 'IMAGES' && 'bg-[#fa6210] text-white'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => {
                setGallaryData(
                  getAllGallaryImages?.data?.alldata?.filter((fil: any) =>
                    fil?.type?.includes('video')
                  )
                );
                setGallaryType('VIDEOS');
              }}
              className={`ml-5 border px-4 py-2 ${
                gallaryType === 'VIDEOS' && 'bg-[#fa6210] text-white'
              }`}
            >
              Video
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='mb-4 border-b border-black text-center text-xl font-medium text-[#fa6210]'>
            {gallaryType}
          </p>
        </div>
        {getAllGallaryImages?.data?.alldata?.length <= 0 ? (
          <div className='flex w-full justify-center'>
            <Image src={noData} alt='nodata' width='800px' height='400px' />
          </div>
        ) : (
          <div className='item-center mx-5 my-10 flex grid justify-center gap-4 xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {gallaryType === 'VIDEOS'
              ? videos?.map((item: any) => (
                  <div className='h-[400px] w-full bg-gray-200' key={item?._id}>
                    <ReactPlayer
                      url={item?.link}
                      width='100%'
                      height='100%'
                      controls
                    />
                  </div>
                ))
              : gallaryData?.map((item: any) => (
                  <div key={item?._id}>
                    <div className='mx-auto '>
                      <Image
                        src={item?.url}
                        alt={item?.description}
                        width='500px'
                        height='500px'
                      />
                    </div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
