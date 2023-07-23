import Image from 'next/image';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import ReactPaginate from 'react-paginate';
import HashLoader from 'react-spinners/HashLoader';
import Cookies from 'universal-cookie';

import styles from './FontStyle.module.css';

import PageContainer from '@/components/pageContainer';

import noData from '../../assets/img/nodata-found.png';
import HomeCard from '../../components/homecard/HomeCard';
import { useSingleEvents } from '../../hooks/events/useSingleEvent';
import { useGetNews } from '../../hooks/news/useGetNews';
const cookies = new Cookies();

function News() {
  const [color, setColor] = useState('#FA6210');
  const [loading, setLoading] = useState(true);
  const getNews = useGetNews({
    query: { category: 'news', viewSize: 1000 },
  });
  const [id, setId] = useState('');
  const getSingleEvent = useSingleEvents({
    pathParams: {
      blogId: id,
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const date = new Date(getSingleEvent?.data?.blog.updatedAt.slice(0, 10));
  const month = date.toLocaleString('default', { month: 'long' });
  const Newdate = date.getDate();
  const NewMonth = month.slice(0, 3);
  const NewYear = date.getFullYear();
  const usersPerPage = 8;
  const pageCount = Math.ceil(getNews?.data?.blogs?.length / usersPerPage);

  const pagesVisited = pageNumber * usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayNews = getNews?.data?.blogs
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
          <HomeCard
            image={items?.media[0]?.url || '/images/noImage.png'}
            date={Newdate + ' ' + NewMonth + ' ' + NewYear}
            heading={items.title}
            desc={items.description}
            year={date.getFullYear()}
          />
        </div>
      );
    });
  return (
    <>
      <PageContainer title='News' />
      <div className='mt-[-8px] bg-[#f3faff] '>
        <div className='flex  justify-center'>
          <div className='mt-16'>
            <div className='mt-2 text-center text-4xl font-semibold'>
              Latest News
            </div>
            {!getNews.isFetched ? (
              <div className='sweet-loading'>
                <HashLoader color={color} loading={loading} size={150} />
              </div>
            ) : null}
            <div className='mt-12 mb-16 grid gap-x-20 gap-y-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
              {displayNews}
            </div>
            {getNews?.data?.blogs.length === 0 ? (
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

            <div className='relative my-6 mx-auto w-auto max-w-[80%] md:mt-36 lg:max-w-3xl '>
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                <div className='relative  flex-auto '>
                  <div
                    onClick={() => setShowModal(false)}
                    className='flex  justify-end'
                  >
                    <div
                      onClick={() => setShowModal(false)}
                      className='absolute z-50  m-10 grid h-10 w-10  cursor-pointer place-items-center rounded-full   text-white    '
                    >
                      <IoClose
                        onClick={() => setShowModal(false)}
                        className=' cursor-pointer text-[35px] text-black '
                      />
                    </div>
                  </div>
                  {getSingleEvent?.data?.blog ? (
                    <div className='h-[500px] w-full rounded-lg bg-white'>
                      <div className='flex p-10'>
                        <div className='hidden px-10 md:flex'>
                          <Image
                            src={
                              getSingleEvent?.data?.blog?.media[0]?.url ||
                              '/images/noImage.png'
                            }
                            width={200}
                            height={150}
                            alt='event'
                            className='rounded-lg'
                          />
                        </div>
                        <div className='mt-8 '>
                          <div className={styles.fontStyle}>
                            <p className=' mb-4 max-h-[65px] overflow-y-scroll break-all pr-4 text-xl font-semibold lg:text-2xl'>
                              {getSingleEvent?.data?.blog.title}
                            </p>
                            <div className='text-xl'>
                              {' '}
                              {Newdate + ' ' + NewMonth + ' ' + NewYear}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mx-12 mt-5 text-xl font-semibold'>
                        News :
                      </div>

                      <div
                        className={`${styles.scroll} mx-5 mt-2 h-[200px] overflow-auto pb-10 text-lg lg:mx-12`}
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

export default News;
