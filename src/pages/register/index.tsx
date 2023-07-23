/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './FontStyle.module.css';

import { useNewAdmissionsRegistration } from '@/hooks/auth/signup/useRegister';

import Notification from '@/components/Notification';
import PageContainer from '@/components/pageContainer';
function Register() {
  const [showNotification, setShowNotification] = useState(false);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [userData, setUserData] = useState<any>({
    name: '',
    dateOfBirth: '',
    fatherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    motherName: '',
    email: '',
    phone: '',
    telephoneNumber: '',
    freshAdmission: checked,
    permanentAddress: '',
    admissionSought: '',
    presentlyStudying: '',
    currentSchool: '',
    currentBoard: '',
    remark: '',
  });

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  const [mPhone, setMPhone] = useState('');
  const [mPhone1, setMPhone1] = useState('');

  const today1 = yyyy + '-' + mm + '-' + dd;

  const newAdmissionsRegistration = useNewAdmissionsRegistration();

  const submit = (e) => {
    e.preventDefault();

    e.target.reset();
    newAdmissionsRegistration
      .mutateAsync({
        body: userData,
      })

      .then(function (resp) {
        if (resp?.response?.status === 500) {
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
          toast.success('User successfully registered!', {
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
            dateOfBirth: '',
            fatherName: '',
            fatherOccupation: '',
            motherOccupation: '',
            motherName: '',
            email: '',
            phone: '',
            telephoneNumber: '',
            freshAdmission: false,
            admissionSought: '',
            presentlyStudying: '',
            currentSchool: '',
            currentBoard: '',
            permanentAddress: '',
            remark: '',
          });
        }
      });
  };
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
        {showNotification ? (
          <Notification color={color} message={message} />
        ) : null}
        <ToastContainer />
        <PageContainer title='Registration' />
        <div className='mx-5 mt-28 mb-36 rounded-xl bg-[#01305a] pb-12 text-white xl:mx-[400px]'>
          <div className=' mx-4 flex justify-center pt-16 pb-10 md:mx-0'>
            <Image
              src='/images/logo.png'
              width='350px'
              height='90px'
              alt='logo'
            />
          </div>

          <form onSubmit={submit}>
            <div className='mx-10 mt-10 grid gap-y-6 gap-x-6 md:mt-5 md:grid-cols-2'>
              <div>
                <div className='mb-1'>Name *</div>

                <input
                  className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
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
                  <div className='mb-1'>Date Of Birth *</div>
                  <input
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Enter Date Of Birth '
                    type='date'
                    max={today1}
                    onChange={(e: any) => {
                      setUserData({
                        ...userData,
                        dateOfBirth: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Father &rsquo;s Name *</div>
                  <input
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Enter Father &rsquo;s Name '
                    type='text'
                    value={userData?.fatherName}
                    onChange={(e: any) => {
                      const result = e.target.value.replace(/[^a-z ]/gi, '');
                      setUserData({
                        ...userData,
                        fatherName: result,
                      });
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Father &rsquo;s Occupation *</div>
                  <input
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Enter Father &rsquo;s Occupation '
                    type='text'
                    value={userData?.fatherOccupation}
                    onChange={(e: any) => {
                      const result = e.target.value.replace(/[^a-z ]/gi, '');
                      setUserData({
                        ...userData,
                        fatherOccupation: result,
                      });
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Mother &rsquo;s Name *</div>
                  <input
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Enter Mother &rsquo;s Name '
                    type='text'
                    value={userData?.motherName}
                    onChange={(e: any) => {
                      const result = e.target.value.replace(/[^a-z ]/gi, '');
                      setUserData({
                        ...userData,
                        motherName: result,
                      });
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Mother &rsquo;s Occupation *</div>
                  <input
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Enter Mother &rsquo;s Occupation '
                    type='text'
                    value={userData?.motherOccupation}
                    onChange={(e: any) => {
                      const result = e.target.value.replace(/[^a-z ]/gi, '');
                      setUserData({
                        ...userData,
                        motherOccupation: result,
                      });
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='mx-10 mt-8'>
              <div>
                <div className='mb-1'>Enter Permanent Address *</div>
                <textarea
                  className='h-36 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                  placeholder='Enter Permanent Address '
                  onChange={(e: any) => {
                    setUserData({
                      ...userData,
                      permanentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div className='mx-10 mt-10 grid gap-y-6 gap-x-6 md:mt-5 md:grid-cols-2'>
              <div>
                <div className='mb-1'>Home Telephone No. </div>
                <input
                  className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                  placeholder='Enter Home Telephone No. '
                  type='text'
                  value={userData?.telephoneNumber}
                  onChange={(e: any) => {
                    if (e.target.value.length <= 10) {
                      setUserData({
                        ...userData,
                        telephoneNumber: e.target.value
                          .replace(/(?!-)[^0-9.]/g, '')
                          .replace('-', ''),
                      });
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
                />

                <div className='text-red-500'>{mPhone}</div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Mobile No. *</div>
                  <input
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Enter Mobile No. '
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
                        setMPhone1('Please enter valid phone number');
                      }
                      if (e.target.value.length === 10) {
                        setMPhone1('');
                      }
                      if (e.target.value.length === 0) {
                        setMPhone1('');
                      }
                    }}
                    required
                  />
                  <div className='text-red-500'>{mPhone1}</div>
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Email Address *</div>

                  <input
                    type='email'
                    id='email'
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
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
                <div className=' flex md:mt-10'>
                  <input
                    className='mr-2 h-6 w-6 rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    placeholder='Whether a Fresh Admission Sought'
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => {
                      setChecked(e.target.checked);
                      setUserData({
                        ...userData,
                        freshAdmission: e.target.checked,
                      });
                    }}
                  />
                  <div className=''>Fresh Admission Sought</div>
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Admission sought for grade *</div>

                  <input
                    type='text'
                    id='admissionSought'
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    // pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                    onChange={(e: any) => {
                      setUserData({
                        ...userData,
                        admissionSought: e.target.value,
                      });
                    }}
                    placeholder='Enter Admission sought for grade'
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Presently studying in Grade *</div>

                  <input
                    type='text'
                    id='presentlyStudying'
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    // pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                    onChange={(e: any) => {
                      setUserData({
                        ...userData,
                        presentlyStudying: e.target.value,
                      });
                    }}
                    placeholder='Enter Presently studying in Grade'
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>
                    Current School/ School last attended *
                  </div>

                  <input
                    type='text'
                    id='currentSchool'
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    // pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                    onChange={(e: any) => {
                      setUserData({
                        ...userData,
                        currentSchool: e.target.value,
                      });
                    }}
                    placeholder='Enter Current School/ School last attended'
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className='mb-1'>Current Board/ Last attended *</div>

                  <input
                    type='text'
                    id='currentBoard'
                    className='h-12 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                    // pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                    onChange={(e: any) => {
                      setUserData({
                        ...userData,
                        currentBoard: e.target.value,
                      });
                    }}
                    placeholder='Enter Current Board/ Last attended'
                    required
                  />
                </div>
              </div>
            </div>
            <div className='mx-10 mt-8'>
              <div>
                <div className='mb-1'>Remark</div>
                <textarea
                  className='h-36 w-full rounded-md border-b-2 bg-white pl-4 text-gray-700 placeholder:text-gray-400   focus:outline-none '
                  placeholder='Remark'
                  onChange={(e: any) => {
                    setUserData({
                      ...userData,
                      remark: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className='ml-10 mt-8 '>
              <div className='pb-2'>
                <button className=' rounded bg-[#fa6210] p-3 px-10 text-xl hover:border hover:border-[#fa6210] hover:bg-[#01305a]'>
                  <div className={styles.fontStyle}>Sign up</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
