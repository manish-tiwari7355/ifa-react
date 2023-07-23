/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { Carousel } from 'react-responsive-carousel';
import HashLoader from 'react-spinners/HashLoader';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './index.module.css';

import { useAwards } from '@/hooks/awards/useAwards';

import PageContainer from '../pageContainer';
import noData from '../../assets/img/nodata-found.png';

const AwardCard = () => {
  const [buttontab, setButtonTab] = useState<any>();
  const [image, setImage] = useState([]);
  const getYeard: any = useAwards({
    query: { year: '' },
  });
  const award: any = useAwards({
    query: { year: buttontab },
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [color, setColor] = useState('#FA6210');
  const year: any = [];
  getYeard?.data?.awardsData.map((item: any) => {
    year?.push(item.year);
  });
  const newYear = new Set(year);
  const newDate = Array.from(newYear).sort();
  const usersPerPage = 6;
  const pageCount = Math.ceil(award?.data?.awardsData.length / usersPerPage);
  const pagesVisited = pageNumber * usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // useEffect(() => {
  //   if (award) {
  //     setButtonTab(newDate[0]);
  //   }
  // }, [award.isSuccess]);
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  const displayActivity = award?.data?.awardsData
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
        <div key={item?._id} className='cursor-pointer'>
          <div className='flex justify-center px-4'>
            <div className=''>
              {item.media[0] ? (
                <div
                  onClick={() => {
                    setShowModal(true);

                    setImage(item.media);
                  }}
                  className=' max-w-sm overflow-hidden rounded shadow-md '
                >
                  <img
                    src={item.media[0].url}
                    alt={item.media[0].title}
                    className='h-[250px] w-[400px]'
                  />
                  <div className='flex items-center justify-between px-6 py-4'>
                    <div className=''>
                      <div className='mb-2 cursor-pointer font-sans text-[17px]  font-bold text-[#104d83]'>
                        {item.title}
                      </div>
                      <div className='mb-2 font-sans text-[14px] text-[#736968]'>
                        {item.type}
                      </div>
                    </div>
                    <div className='flex'>
                      <MdKeyboardArrowRight className='text-[30px] text-[#104d83] ' />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className=' mb-40 items-center justify-center'>
        <PageContainer title='Awards' />

        <div className='flex justify-center px-4'>
          <div
            className={`mt-24 flex w-[1200px] space-x-4 overflow-auto pb-4 ${styles.scroll} `}
          >
            {newDate?.map((item: any, index) => {
              return (
                <div key={index} className=' '>
                  <button
                    className={`${
                      buttontab === item
                        ? ' bg-[#fa6210] text-black'
                        : 'bg-[#01305a]'
                    } w-48 rounded-md py-5 px-5 font-sans text-[#ffffff] hover:bg-[#fa6210] md:text-[15px] lg:block lg:px-8  xl:text-[21px]`}
                    onClick={() => {
                      setButtonTab(item);
                    }}
                  >
                    {item}-{item + 1}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {!award.isFetched ? (
          <div className=' mt-2 hidden border-b-2 border-[#104d83] md:mx-4 md:flex xl:mx-28 2xl:mx-[340px]' />
        ) : null}

        {!award.isFetched ? (
          <div className='sweet-loading'>
            <HashLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={150}
            />
          </div>
        ) : null}
        <div className='mt-8 grid gap-8 md:grid-cols-3 xl:mx-28 2xl:mx-80'>
          {displayActivity}
        </div>
        {award?.data?.awardsData.length === 0 ? (
          <div className='flex w-full justify-center'>
            <Image src={noData} alt='nodata' width='800px' height='400px' />
          </div>
        ) : null}
        <div className='mt-4 flex justify-center pb-10'>
          <ReactPaginate
            previousLabel='Previous'
            nextLabel='Next'
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBtn}
            previousLinkClassName={styles.prevBtn}
            nextLinkClassName={styles.nextBtn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
          />
        </div>
      </div>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-50  flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div
              onClick={() => {
                setShowModal(false);
              }}
              className='absolute h-screen w-screen bg-transparent'
            ></div>

            <div className='relative  my-6 mx-auto w-auto max-w-3xl  '>
              <div
                onClick={() => setShowModal(false)}
                className='flex  justify-end'
              >
                <div
                  onClick={() => setShowModal(false)}
                  className='z-10000 absolute mt-10 grid  h-10 w-10 cursor-pointer place-items-center rounded-full   text-white '
                >
                  <IoClose
                    onClick={() => setShowModal(false)}
                    className=' z-1 cursor-pointer  text-[35px] '
                  />
                </div>
              </div>

              <div className='relative mt-20 flex w-full flex-col rounded-lg border-0 shadow-lg outline-none focus:outline-none'>
                <div className='relative  flex-auto '>
                  <div className='  bg-black'></div>
                </div>
                <div className='h-[400px] '>
                  <Carousel showThumbs={false} showArrows={true}>
                    {image.map((item: any) => {
                      return (
                        <>
                          <div key={item._id}>
                            <img
                              alt='campus'
                              src={item?.url}
                              className='z-40 h-[500px]  rounded'
                            />
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-90'></div>
        </>
      ) : null}
    </>
  );
};

export default AwardCard;
