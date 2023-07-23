/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import styles from './FontStyle.module.css';

import PageContainer from '@/components/pageContainer';

import { useJobRegister } from '../../hooks/auth/jobRegister/jobRegister';

function ApplyForJob() {
  const [mPhone, setMPhone] = useState('');
  const [resume, setResume] = useState<any>([]);
  const inputRef = useRef<any>(undefined);
  const [userData, setUserData] = useState<any>({
    name: '',
    fathersName: '',
    qualifications: '',
    experience: '',
    message: '',
    email: '',
    phone: '',
  });
  const useJobRegisters = useJobRegister();
  const submit = (e) => {
    const formData = new FormData();

    formData.append('files', resume);
    formData.append('name', userData.name);
    formData.append('fathersName', userData.fathersName);
    formData.append('qualifications', userData.qualifications);
    formData.append('experience', userData.experience);
    formData.append('message', userData.message);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    e.preventDefault();
    useJobRegisters
      .mutateAsync({
        body: formData,
      })
      .then((res) => {
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
          toast.success('Job Application submitted successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setUserData({
            name: '',
            fathersName: '',
            qualifications: '',
            experience: '',
            message: '',
            email: '',
            phone: '',
          });
          setResume([]);

          inputRef.current.value = null;
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  function handleChange(event) {
    setResume(event.target.files[0]);
  }
  const [m, setM] = useState('');

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
      <div className={styles.fontStyle}>
        <PageContainer title='Apply For Job' />
        <ToastContainer />
        <div className='mx-5 mt-28 mb-36 rounded-md bg-[#01305a] pb-12 text-white xl:mx-[400px]'>
          <div className=' mx-4 flex justify-center py-8 md:mx-0'>
            <Image
              src='/images/logo.png'
              width='350px'
              height='90px'
              alt='logo'
            />
          </div>
          <div className='mx-4 flex justify-center'>
            <div className={styles.fontStyle}>
              <div className='text-3xl md:text-4xl'>Job Application</div>
            </div>
          </div>

          <div className='mx-10 mt-10 grid gap-y-8 gap-x-8 md:mt-5 md:grid-cols-2'>
            <div>
              <div className='mb-1'>Name *</div>
              <input
                className='h-12 w-full border-b-2 bg-[#003063] pl-8 placeholder:text-white  focus:outline-none '
                placeholder='Enter Name '
                type='text'
                value={userData?.name}
                onChange={(e: any) => {
                  const result = e.target.value.replace(/[^a-z ]/gi, '');
                  setUserData({
                    ...userData,
                    name: result,
                  });
                }}
                required
              />
            </div>
            <div>
              <div>
                <div className='mb-1'>Father / Spouse Name *</div>
                <input
                  className='h-12 w-full border-b-2 bg-[#003063] pl-8 placeholder:text-white  focus:outline-none '
                  placeholder='Enter Father / Spouse Name '
                  type='text'
                  value={userData?.fathersName}
                  onChange={(e: any) => {
                    const result = e.target.value.replace(/[^a-z ]/gi, '');
                    setUserData({
                      ...userData,
                      fathersName: result,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <div className='mb-1'>Qualification *</div>
                <input
                  className='h-12 w-full border-b-2 bg-[#003063] pl-8 placeholder:text-white  focus:outline-none '
                  placeholder='Enter Qualification '
                  type='text'
                  value={userData?.qualifications}
                  onChange={(e: any) => {
                    setUserData({
                      ...userData,
                      qualifications: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <div className='mb-1'>Experience *</div>
                <input
                  className='h-12 w-full border-b-2 bg-[#003063] pl-8 placeholder:text-white  focus:outline-none '
                  placeholder='Enter Experience '
                  type='text'
                  value={userData?.experience}
                  onChange={(e: any) => {
                    setUserData({
                      ...userData,
                      experience: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <div className='mb-1'>Email *</div>

                <input
                  type='email'
                  id='email'
                  className='h-12 w-full border-b-2 bg-[#003063] pl-8 placeholder:text-white  focus:outline-none '
                  value={userData?.email}
                  onChange={(e: any) => {
                    ValidateEmail(e.target.value);
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    });
                  }}
                  placeholder='Enter email address '
                  required
                />
                <div className='text-red-500'>{m}</div>
              </div>
            </div>
            <div>
              <div>
                <div className='mb-1'>Phone *</div>

                <input
                  className='h-12 w-full appearance-none border-b-2 bg-[#003063] pl-8 placeholder:text-white  focus:outline-none '
                  placeholder='Enter your phone number '
                  type='text'
                  value={userData?.phone}
                  onChange={(e: any) => {
                    if (e.target.value.length <= 10) {
                      setUserData({
                        ...userData,
                        phone: e.target.value
                          .replace(/(?!-)[^0-9.]/g, '')
                          .replace('-', ''),
                      });
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
          <div className='mx-10 mt-6'>
            <div>
              <div className='mb-1'>Message *</div>
              <textarea
                className='h-20 w-full  border-b-2 bg-[#003063] pl-8 outline-none  placeholder:text-white focus:outline-none '
                placeholder='Please enter message to submit the application '
                value={userData?.message}
                onChange={(e: any) => {
                  setUserData({
                    ...userData,
                    message: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className='ml-10 mt-8'>
            <div className='mb-3'> Upload Resume :</div>
            <button>
              <input
                type='file'
                ref={inputRef}
                accept='.pdf,.jpg, .png, .jpeg, .tiff|image/*'
                className='text-grey-500 text-sm
            file:mr-5 file:rounded-full file:border-0
            file:bg-blue-50 file:py-2
            file:px-6 file:text-sm
            file:font-medium file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-[#fa6210] 
            
            hover:file:text-white'
                onChange={handleChange}
                required
              />
            </button>
            <div>
              <button
                onClick={submit}
                className='mt-8 rounded-lg border-[#fa6210] bg-[#fa6210] p-3 px-16 text-xl hover:border hover:border-[#fa6210] hover:bg-[#01305a]'
              >
                <div className={styles.fontStyle}>Submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyForJob;
