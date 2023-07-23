/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { IoMdCall } from 'react-icons/io';
import { MdPlace } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './FontStyle.module.css';

import { useRegister } from '@/hooks/auth/register/useRegister';

import PageContainer from '@/components/pageContainer';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [m, setM] = useState('');
  const [mPhone, setMPhone] = useState('');

  const body = { firstName, lastName, email, phone, address, message };

  const register = useRegister();

  const submit = (e) => {
    e.preventDefault();

    register
      .mutateAsync({
        body,
      })
      .then((res) => {
        if (res?.response?.status === 500) {
          toast.error('Your form has already submitted', {
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
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setMessage('');
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
  return (
    <>
      <PageContainer title='Contact Us' />
      <ToastContainer />
      <div className={styles.input1}>
        <div className='mt-[-10px] rounded bg-gray-100 py-5 lg:py-40'>
          <div className='mx-auto max-w-[1300px] p-4 py-6 md:bg-white'>
            <div className='grid md:grid-cols-2'>
              <div className='flex justify-center '>
                <div className='w-[280px] rounded-md bg-contactBg px-5  pb-20 md:px-5  lg:w-full'>
                  <div>
                    <div className={styles.fontStyle}>
                      <div className='mt-20 text-4xl font-semibold text-[#01305a]'>
                        Get In Touch
                      </div>
                      <div className='mt-2 text-gray-400'>
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique. */}
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
                      <Link href='https://www.facebook.com/FatehacademyASR'>
                        <div className='cursor-pointer rounded-full bg-gray-700 p-2 duration-200 ease-in  hover:bg-blue-500'>
                          <FiFacebook className='text-2xl text-white' />
                        </div>
                      </Link>
                      <Link href='https://www.instagram.com/fatehacademy/'>
                        <div className='cursor-pointer rounded-full bg-gray-700 p-2 duration-200 ease-in  hover:bg-pink-700'>
                          <FiInstagram className='text-2xl text-white' />
                        </div>
                      </Link>
                      <Link href='https://www.youtube.com/@FatehAcademy/'>
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
                  <div className='mx-5 mt-10 grid gap-y-6 gap-x-6 md:mt-5 md:grid-cols-2'>
                    <div>
                      {firstName ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className='h-6 '>Name</div>
                        </div>
                      ) : (
                        <div className=' h-6'></div>
                      )}
                      <input
                        className='h-12 w-full border-0 border-b-2 border-gray-200  pl-4  text-gray-600 placeholder:text-gray-500  focus:outline-none '
                        placeholder='Enter Name *'
                        type='text'
                        value={firstName}
                        onChange={(e) => {
                          const result = e.target.value.replace(
                            /[^a-z ]/gi,
                            ''
                          );
                          setFirstName(result);
                        }}
                        required
                      />
                    </div>
                    <div>
                      <div>
                        {lastName ? (
                          <div className={`${styles.fontStyle}`}>
                            <div className='h-6 '>Last Name</div>
                          </div>
                        ) : (
                          <div className=' h-6'></div>
                        )}
                        <input
                          className='h-12 w-full border-0 border-b-2 border-gray-200  pl-4  text-gray-600 placeholder:text-gray-500  focus:outline-none '
                          placeholder='Enter Last Name'
                          value={lastName}
                          type='text'
                          onChange={(e) => {
                            const result = e.target.value.replace(
                              /[^a-z ]/gi,
                              ''
                            );
                            setLastName(result);
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        {email ? (
                          <div className={`${styles.fontStyle}`}>
                            <div className='h-6 '>Email</div>
                          </div>
                        ) : (
                          <div className=' h-6'></div>
                        )}
                        <input
                          className='h-12 w-full  border-0 border-b-2 border-gray-200  pl-4  text-gray-600 placeholder:text-gray-500  focus:outline-none '
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
                            <div className='h-6 '>Phone Number</div>
                          </div>
                        ) : (
                          <div className=' h-6'></div>
                        )}
                        <input
                          className='h-12 w-full border-0 border-b-2 border-gray-200  pl-4  text-gray-600 placeholder:text-gray-500  focus:outline-none '
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

                            // if (!e.target.value) {
                            //   setUserData({
                            //     ...userData,
                            //     phone: e.target.value,
                            //   });

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
                  </div>
                  <div className='mx-5 mt-6'>
                    <div>
                      {address ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className='h-6 '>Address</div>
                        </div>
                      ) : (
                        <div className=' h-6'></div>
                      )}
                      <textarea
                        className='textarea h-20  w-full border-0 border-b-2 border-gray-200  bg-white   pl-4 placeholder:text-gray-500 focus:outline-none '
                        placeholder='Enter Address *'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className='mx-5 mt-6'>
                    <div>
                      {message ? (
                        <div className={`${styles.fontStyle}`}>
                          <div className='h-6 '>Message</div>
                        </div>
                      ) : (
                        <div className=' h-6'></div>
                      )}
                      <textarea
                        className='textarea h-20  w-full border-0 border-b-2 border-gray-200  bg-white   pl-4 placeholder:text-gray-500 focus:outline-none '
                        placeholder='Enter Message *'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
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

export default Contact;
