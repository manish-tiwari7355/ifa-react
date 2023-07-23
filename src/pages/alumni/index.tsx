/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { IoMdCall } from 'react-icons/io';
import { MdPlace } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import styles from './FontStyle.module.css';

import { useAddAlumni } from '@/hooks/alumni/mutation';

import PageContainer from '@/components/pageContainer';

function Alumni() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [yearOfPassout, setYearOfPassout] = useState('Year of Passout');
  const [selectBranch, setSelectBranch] = useState('Select Branch');
  const [phone, setPhone] = useState('');
  const [currentStatus, setCurrentStatus] = useState('Current Status');
  const [message, setMessage] = useState('');
  const [m, setM] = useState('');
  const [mPhone, setMPhone] = useState('');

  const register = useAddAlumni();

  const submit = (e) => {
    e.preventDefault();

    register
      .mutateAsync({
        body: {
          name,
          gender,
          email,
          yearOfPassout: yearOfPassout,
          phone,
          branch: selectBranch,
          message,
          currentStatus,
        },
      })
      .then((res: any) => {
        if (res?.response?.status === 500) {
          toast.error(res.response.data.error.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success('Submitted successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName('');
          setGender('');
          setEmail('');
          setPhone('');
          setMessage('');
          setCurrentStatus('');
          setSelectBranch('');
          setYearOfPassout('');
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  const ValidateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setM('');
      return true;
    }
    setM('You have entered an invalid email address!');
    return false;
  };

  const years = [
    'Year of Passout',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  const branch = [
    'Select branch',
    'Computer Science And Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Others',
  ];
  const currentStatusList = [
    'Working In Industry',
    'Higher Education',
    'Qualified Competitive Exam',
    'Gov. Job',
    'Running Own/Family Business(Entrepreneurs)',
    'Working in Education Institutes',
    'Others',
  ];
  return (
    <>
      <PageContainer title='Alumni' />
      <ToastContainer />
      <div className={styles.input1}>
        <div className='mt-[-10px] rounded bg-gray-100 py-40'>
          <div className='p-4  py-6 md:bg-white xl:mx-[350px]'>
            <div className='grid md:grid-cols-2'>
              <div className='flex justify-center '>
                <div className='w-[280px] rounded-md bg-contactBg px-12  pb-20 md:px-5  lg:w-full'>
                  <div>
                    <div className={styles.fontStyle}>
                      <div className='mt-20 text-4xl font-semibold text-[#01305a]'>
                        Alumni Registration Form
                      </div>
                      <div className='mt-2 text-gray-400'>
                        Membership is open to individuals who graduated with a
                        degree or a certificate program.
                      </div>
                    </div>
                    <div className='mt-16 flex  '>
                      <div>
                        <SiGmail className='text-2xl text-[#fa6210]' />
                      </div>
                      <div className={styles.fontStyle}>
                        <div className='text-semibold  ml-4 text-gray-600 lg:text-lg '>
                          info@fatehacademy.com
                        </div>
                      </div>
                    </div>
                    <div className='mt-7 flex'>
                      <div>
                        <IoMdCall className='text-2xl text-[#fa6210]' />
                      </div>
                      <div className={styles.fontStyle}>
                        <div className='text-semibold ml-4 text-gray-600 lg:text-lg'>
                          {/* +91-183-2430205, */}
                          +91-9501108830
                        </div>
                      </div>
                    </div>
                    <div className='mt-7 flex'>
                      <div>
                        <MdPlace className='text-2xl  text-[#fa6210]' />
                      </div>
                      <div className={styles.fontStyle}>
                        <div className='text-semibold   ml-4 text-gray-600 lg:text-lg'>
                          Academy Road, Jandiala Guru, Amritsar.
                        </div>
                      </div>
                    </div>
                    <div className='mt-8 flex space-x-2 md:space-x-6'>
                      <Link
                        href='https://www.facebook.com/FatehacademyASR'
                        passHref
                      >
                        <div className='cursor-pointer rounded-full bg-gray-700 p-2 duration-200 ease-in  hover:bg-blue-500'>
                          <FiFacebook className='text-2xl text-white' />
                        </div>
                      </Link>
                      <Link
                        href='https://www.instagram.com/fatehacademy/'
                        passHref
                      >
                        <div className='cursor-pointer rounded-full bg-gray-700 p-2 duration-200 ease-in  hover:bg-pink-700'>
                          <FiInstagram className='text-2xl text-white' />
                        </div>
                      </Link>
                      <Link
                        href='https://www.youtube.com/@FatehAcademy/'
                        passHref
                      >
                        <div className='cursor-pointer rounded-full bg-gray-700 p-2 duration-200 ease-in  hover:bg-red-700'>
                          <FiYoutube className='text-2xl text-white' />
                        </div>
                      </Link>
                      <a
                        onClick={() => {
                          const phoneNumber = '9501108830';
                          const message = 'Hello, how can I help you?';
                          window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
                        }}
                      >
                        <div className='cursor-pointer rounded-full bg-gray-700 p-2 duration-200 ease-in  hover:bg-green-700'>
                          <BsWhatsapp className='text-2xl text-white' />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={submit}>
                <div className='mt-16'>
                  <div className='mx-10 mt-10 grid gap-y-6 gap-x-6 md:mt-5 md:grid-cols-2'>
                    <div>
                      {name ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className='h-6 '>Name</div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <input
                        className='!important mt-1 block   h-12  w-full   rounded-md  border-0  border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                        invalid:text-black focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                        disabled:border-slate-200 disabled:bg-slate-50
                        disabled:text-slate-500 disabled:shadow-none '
                        placeholder='Enter Name *'
                        type='text'
                        value={name}
                        onChange={(e) => {
                          const result = e.target.value.replace(
                            /[^a-z ]/gi,
                            ''
                          );
                          setName(result);
                        }}
                        required
                      />
                    </div>
                    <div className=''>
                      {gender === 'Male' || gender === 'Female' ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className=' h-6 '>Gender</div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <div className='relative '>
                        <select
                          className='!important mt-1 block h-12  w-full  rounded-md  border-0  border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                         invalid:text-black focus:border-orange-500 focus:outline-none 
                         focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                         disabled:border-slate-200 disabled:bg-slate-50
                         disabled:text-slate-500 disabled:shadow-none '
                          value={gender}
                          onChange={(e) => {
                            setGender(e?.target?.value);
                          }}
                        >
                          <option value=''>Select gender</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                          <svg
                            className='h-4 w-4 fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                          >
                            <path d='M9.293l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className=''>
                      {yearOfPassout !== 'Year of Passout' ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className='mb-2 h-6 '>Year Of Passout</div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <div className='relative'>
                        <select
                          className='!important mt-1 block h-12   w-full  rounded-md  border-0  border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                         invalid:text-black focus:border-orange-500 focus:outline-none 
                         focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                         disabled:border-slate-200 disabled:bg-slate-50
                         disabled:text-slate-500 disabled:shadow-none '
                          value={yearOfPassout}
                          onChange={(e) => {
                            setYearOfPassout(e?.target?.value);
                          }}
                        >
                          {years?.map((item) => {
                            return (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                          <svg
                            className='h-4 w-4 fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                          >
                            <path d='M9.293l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        {email ? (
                          <div className={`${styles.fontStyle}`}>
                            <div className='h-6 '>Email</div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <input
                          className='!important mt-1 block h-12 w-full rounded-md  border-0 border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                            invalid:text-black focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                            disabled:border-slate-200 disabled:bg-slate-50
                            disabled:text-slate-500 disabled:shadow-none '
                          placeholder='Enter email *'
                          type='email'
                          value={email}
                          onChange={(e) => {
                            ValidateEmail(e.target.value);
                            setEmail(e.target.value);
                          }}
                          required
                        />
                        <div className='text-red-500'>{m}</div>
                      </div>
                    </div>
                    <div>
                      <div>
                        {phone ? (
                          <div className={`${styles.fontStyle}`}>
                            <div className='h-6 text-base '>Phone Number</div>
                          </div>
                        ) : (
                          <div className=''></div>
                        )}
                        <input
                          className='!important mt-1 block h-12 w-full  rounded-md  border-0 border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                            invalid:text-black focus:border-orange-500 focus:outline-none
                            focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                            disabled:border-slate-200 disabled:bg-slate-50
                            disabled:text-slate-500 disabled:shadow-none '
                          type='text'
                          placeholder='Phone number *'
                          value={phone}
                          onChange={(e: any) => {
                            if (e.target.value.length <= 10) {
                              setPhone(
                                e.target.value
                                  .replace(/(?!-)[^0-9.]/g, '')
                                  .replace('-', '')
                              );
                            }

                            if (e.target.value.length < 10) {
                              setMPhone('Please enter valid phone number');
                            }
                            if (e.target.value.length === 10) {
                              setMPhone('');
                            }
                            if (e.target.value.length === 0) {
                              setMPhone('');
                            }
                          }}
                          required
                        />
                        <div className='text-red-500'>{mPhone}</div>
                      </div>
                    </div>
                    <div className=''>
                      {currentStatus !== 'Current Status' ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className=' h-6 text-base '>Current Status</div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <div className='relative'>
                        <select
                          className='!important mt-1 block h-12 w-full  rounded-md  border-0 border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                         invalid:text-black focus:border-orange-500 focus:outline-none
                         focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                         disabled:border-slate-200 disabled:bg-slate-50
                         disabled:text-slate-500 disabled:shadow-none '
                          value={currentStatus}
                          onChange={(e) => {
                            setCurrentStatus(e?.target?.value);
                          }}
                        >
                          {currentStatusList?.map((item) => {
                            return (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                          <svg
                            className='h-4 w-4 fill-current'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                          >
                            <path d='M9.293l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mx-10 my-5'>
                    {selectBranch !== 'Select Branch' ? (
                      <div className={`${styles.fontStyle}`}>
                        <div className=' h-6 text-base '>Select Branch</div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className='relative'>
                      <select
                        className='!important mt-1 block h-12 w-full rounded-md  border-0 border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                         invalid:text-black focus:border-orange-500 focus:outline-none
                         focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                         disabled:border-slate-200 disabled:bg-slate-50
                         disabled:text-slate-500 disabled:shadow-none '
                        value={selectBranch}
                        onChange={(e) => {
                          setSelectBranch(e?.target?.value);
                        }}
                      >
                        {branch?.map((item) => {
                          return (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                          className='h-4 w-4 fill-current'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='mx-10 mt-6'>
                    <div>
                      {message ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className='h-6 text-base'>Message</div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <textarea
                        className='!important mt-1 block h-36 w-full rounded-md  border-0 border-slate-300 bg-white px-3 py-2 pl-4 text-sm text-gray-600 placeholder-slate-400 shadow-lg placeholder:text-gray-500 invalid:border-white
                          invalid:text-black focus:border-orange-500 focus:outline-none
                          focus:ring-1 focus:ring-orange-500 focus:invalid:border-black focus:invalid:ring-black
                          disabled:border-slate-200 disabled:bg-slate-50
                          disabled:text-slate-500 disabled:shadow-none '
                        placeholder='Enter Message *'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='mx-10 '>
                    <div>
                      <button className='mt-8 w-full rounded-lg bg-[#fa6210] p-3 px-16 text-xl text-white  hover:border hover:border-white hover:bg-[#01305A] '>
                        <div className={styles.fontStyle}>Submit</div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alumni;
