import Image from 'next/image';
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { IoClose } from 'react-icons/io5';
import ReactPaginate from 'react-paginate';
import HashLoader from 'react-spinners/HashLoader';
import { EffectFlip, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cookies from 'universal-cookie';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './FontStyle.module.css';

import NewsCard from '@/components/newscard/NewsCard';
import PageContainer from '@/components/pageContainer';

import noData from '../../assets/img/nodata-found.png';
import { useActivities } from '../../hooks/activities/useActivities';
import { useSingleEvents } from '../../hooks/events/useSingleEvent';

const cookies = new Cookies();
function Tours() {
  const getTours: any = useActivities({
    query: { category: 'tour', viewSize: 1000 },
  });
  console.log('getTours', getTours);

  const [id, setId] = useState('');
  const getSingleEvent: any = useSingleEvents({
    pathParams: {
      blogId: id,
    },
  });
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };
  const [color, setColor] = useState('#FA6210');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const date = new Date(getSingleEvent?.data?.blog.date.slice(0, 10));
  console.log('getSingleEvent', getSingleEvent);
  const month = date.toLocaleString('default', { month: 'long' });
  const Newdate = date.getDate();
  const NewMonth = month.slice(0, 3);
  const NewYear = date.getFullYear();
  const usersPerPage = 6;
  const pageCount = Math.ceil(getTours?.data?.blogs?.length / usersPerPage);

  const pagesVisited = pageNumber * usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayTours = getTours?.data?.blogs
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((items) => {
      const date = new Date(items.date.slice(0, 10));
      const month = date.toLocaleString('default', {
        month: 'long',
      });

      const Newdate = date.getDate();
      const NewMonth = month.slice(0, 3);
      const NewYear = date.getFullYear();

      return (
        <div
          onClick={() => {
            setShowModal(true);
            cookies.set('eventId', items._id);
            setId(cookies.get('eventId'));
          }}
          key={items.id}
        >
          <div>
            <NewsCard
              // image={items?.media[0]?.url || '/images/noImage.png'}
              image={items?.media[0]?.url || '/images/noImage.png'}
              date={Newdate + ' ' + NewMonth + ' ' + NewYear}
              heading={items.title}
              desc={items.description}
              year={date.getFullYear()}
            />
          </div>
        </div>
      );
    });

  return (
    <>
      <PageContainer title='Tours' />
      <div className='mt-[-8px] bg-[#f3faff] '>
        <div className='flex  justify-center'>
          <div className='mt-16'>
            <div className='mt-2 text-center text-4xl font-semibold'>
              Latest Tours
            </div>
            {!getTours.isFetched ? (
              <div className='sweet-loading'>
                <HashLoader
                  color={color}
                  loading={loading}
                  cssOverride={override}
                  size={150}
                />
              </div>
            ) : null}
            <div className='mt-12 mb-16 grid gap-x-10 gap-y-10 xl:grid-cols-2'>
              {displayTours}
            </div>
            {getTours?.data?.blogs.length === 0 ? (
              <div className='flex w-full justify-center'>
                <Image src={noData} alt='nodata' width='800px' height='400px' />
              </div>
            ) : null}
          </div>
        </div>
        <div className='flex justify-center pb-10'>
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
      {/* <--Modal---> */}
      {showModal ? (
        <>
          <div className='fixed inset-0 z-50  flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div
              onClick={() => setShowModal(false)}
              className='absolute h-screen w-screen bg-transparent'
            ></div>

            <div className='relative  my-6 mx-auto w-auto max-w-4xl md:mt-36 '>
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                <div className='relative  flex-auto '>
                  <div
                    onClick={() => setShowModal(false)}
                    className='flex  justify-end'
                  >
                    <div
                      onClick={() => setShowModal(false)}
                      className='z-10000 absolute  m-10 grid h-10 w-10  cursor-pointer place-items-center rounded-full   text-white    '
                    >
                      <IoClose
                        onClick={() => setShowModal(false)}
                        className=' cursor-pointer text-[35px] text-black '
                      />
                    </div>
                  </div>
                  {getSingleEvent?.data?.blog ? (
                    <div className=' w-auto rounded-lg bg-white'>
                      <div className='flex p-10'>
                        <div className='tour flex px-10'>
                          {/* <Image
                            src={
                              getSingleEvent?.data?.blog?.media[0]?.url ||
                              '/images/noImage.png'
                            }
                            width={200}
                            height={150}
                            alt='event'
                            className='rounded-lg'
                          /> */}
                          <Swiper
                            effect='flip'
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className='mySwiper'
                          >
                            {getSingleEvent?.data?.blog?.media.map((item) => (
                              <SwiperSlide key={item}>
                                {/* {console.log('item:>>>>', item)}
                                <img src='https://swiperjs.com/demos/images/nature-1.jpg' /> */}
                                <Image
                                  src={item?.url || '/images/noImage.png'}
                                  width={300}
                                  height={270}
                                  alt='event'
                                  className='rounded-lg'
                                />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                        <div className='mt-8 '>
                          <div className={styles.fontStyle}>
                            <p className='truncate break-all pr-4 text-3xl font-semibold'>
                              {getSingleEvent?.data?.blog.title}
                            </p>
                            <div className='text-xl'>
                              {' '}
                              {Newdate + ' ' + NewMonth + ' ' + NewYear}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mx-12 mt-5 text-2xl font-semibold'>
                        Tours :
                      </div>

                      <div
                        className={`${styles.scroll} mx-12 mt-2 overflow-auto pb-10 text-lg`}
                      >
                        {getSingleEvent?.data?.blog.description}
                      </div>
                    </div>
                  ) : (
                    <div className='flex h-[450px] w-[600px] items-center justify-center rounded-lg bg-white'>
                      <div className='sweet-loading '>
                        <HashLoader
                          color={color}
                          loading={loading}
                          cssOverride={override}
                          size={150}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/*  */}
              </div>
            </div>
          </div>

          <div className='fixed inset-0 z-40 bg-black opacity-70'></div>
        </>
      ) : null}
    </>
  );
}

export default Tours;
