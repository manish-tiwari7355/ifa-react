import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

import PageContainer from '@/components/pageContainer';

const PrescribedBooks = () => {
  const [books, setBooks] = useState([]);
  // console.log('books', books);

  // const localUrl = 'http://localhost:5000';
  const liveUrl = 'https://api.fatehacademy.com';
  const fetchBooks = () => {
    axios
      .get(`${liveUrl}/api/book`)
      .then((response) => setBooks(response?.data?.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <PageContainer title='Prescribed Books' />
      <ToastContainer />
      <div className='mx-auto max-w-[1200px] px-3 py-10'>
        <h1 className='my-6 pl-5 text-3xl font-semibold text-[#01305a] md:my-10 md:text-4xl'>
          Prescribed Books
        </h1>
        <div className='flex justify-center  border-red-500'>
          <Image
            src='/images/books.jpg'
            alt='books'
            width={500}
            height={280}
            objectFit='contain'
            priority
          />
        </div>
        <div className='relative mx-auto max-w-[700px] overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-left text-sm text-black dark:text-black'>
            <thead className='bg-[#001A31] text-md uppercase text-white dark:bg-[#001A31] md:text-lg '>
              <tr>
                <th scope='col' className='px-6 py-5'>
                  Classes
                </th>
                {/* <th scope='col' className='px-6 py-5'>
                  Name&nbsp;of&nbsp;the&nbsp;book
                </th>
                <th scope='col' className='px-6 py-5'>
                  Subject
                </th>
                <th scope='col' className='px-6 py-5'>
                  Publisher
                </th> */}
                <th scope='col' className='px-6 py-5 text-center'>
                  Link
                </th>
              </tr>
            </thead>
            {books[0]?.data?.map((classData) => (
              <tbody className='text-md md:text-lg' key={classData._id}>
                <tr className='border-b bg-white dark:border-gray-300 dark:bg-gray-400'>
                  <th
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-black '
                  >
                    {classData?._id}
                  </th>
                  {/* <td className='px-6 py-4'>
                    <ul>
                      {classData?.data?.map((item) => (
                        <li key={item?._id}>{item?.bookName}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul>
                      {classData?.data?.map((item) => (
                        <li key={item?._id}>{item?.subject}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul>
                      {classData?.data?.map((item) => (
                        <li key={item?._id}>{item?.publisher}</li>
                      ))}
                    </ul>
                  </td> */}
                  <td className='px-2 py-4 text-center font-medium text-blue-700 dark:text-blue-600 xs:px-6'>
                    <ul>
                      {classData?.data?.map((item) => (
                        <li
                          className='cursor-pointer hover:underline'
                          key={item?._id}
                        >
                          <a href={item?.media[0]?.url} download>
                            Click
                          </a>
                        </li>
                        // <li key={item?._id}>{item?.publisher}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                {/* <tr className='border-b bg-gray-50 dark:border-gray-300 dark:bg-gray-200'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-6 py-4 font-medium text-black '
                    >
                      Class 2
                    </th>
                    <td className='px-6 py-4'>
                      <ul>
                        <li> The World We Live</li>
                        <li> The World We Live</li>
                        <li> The World We Live</li>
                      </ul>
                    </td>
                    <td className='px-6 py-4'>
                      <ul>
                        <li> English</li>
                        <li> Hindi</li>
                        <li> Hindi</li>
                      </ul>
                    </td>
                    <td className='px-6 py-4'>
                      <ul>
                        <li> Sunbeam</li>
                        <li> Maduban</li>
                        <li> Maduban</li>
                      </ul>
                    </td>
                    <td className='px-6 py-4 font-medium text-blue-600 dark:text-blue-500'>
                      <ul>
                        <li className='cursor-pointer'> Click</li>
                        <li className='cursor-pointer'> Click</li>
                        <li className='cursor-pointer'> Click</li>
                      </ul>
                    </td>
                  </tr> */}
              </tbody>
            ))}
          </table>
        </div>
        <div className='py-5'>
          <h3 className='flex justify-center py-4 font-semibold'>
            Self Declaration
          </h3>
          <p>
            It is to certify that, the textbooks prescribed above is selected
            books of private publishers for Classes 1 to 8. That, there is no
            objectionable content that hurts the feeling of any class,
            community, gender or any religious group in society. The school
            recommends prescribed books by CISCE for classes 9 to 12.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrescribedBooks;
