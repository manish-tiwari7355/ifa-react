/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { useLogout } from '@/hooks/auth/logout/useLogout';

import Button from '@/components/buttons/Button';

// import TitleProduct from '@/components/titleProduct';
import { categoryDetails } from '@/store/category';
import { currentUsers } from '@/store/users';

import { queryClient } from '@/pages/_app';
import { cookies } from '@/utils/apiUtils';
import { EmailIcon, MenuIcon, PhoneIcon } from '@/utils/AppIcons';

const Header = () => {
  const router = useRouter();
  const userLogout = useLogout();
  const { route } = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const refMenu: any = useRef(null);
  const [getCategory, setCategory] = useAtom(categoryDetails);

  const [getUser, setUser] = useAtom(currentUsers);

  const handleLogout = () => {
    userLogout

      .mutateAsync()
      .then((res: any) => {
        if (res.success) setUser({});

        cookies.remove('accessToken');
        localStorage.removeItem('accessToken');
        queryClient.clear();
      })
      .catch((err) => {
        ('');
      });
    setUser({});
    cookies.remove('accessToken');
    localStorage.removeItem('accessToken');
    queryClient.clear();
  };

  const handleMenuClickOutside = (event: any) => {
    if (refMenu?.current && !refMenu?.current.contains(event.target)) {
      setIsMenuOpened(false);
    }
  };

  useEffect(() => {
    setIsMenuOpened(true);
    if (isMenuOpened) {
      document.addEventListener('click', handleMenuClickOutside, true);
    }

    return () => {
      document.addEventListener('click', handleMenuClickOutside, true);
    };
  }, []);

  const navHeader = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Facilities', link: '/facilities' },
    { title: 'Events', link: '/events' },
    { title: 'Activities', link: '/activities' },
    { title: 'Awards', link: '/awards' },
    { title: 'Tours', link: '/tours' },
    { title: 'News', link: '/news' },
    { title: 'Alumni', link: '/alumni' },
    { title: 'Contact', link: '/contact' },
    { title: 'Gallery', link: '/gallery' },
  ];

  return (
    <div style={{ marginTop: '-0px' }} className=' sticky top-0 z-50  '>
      <div className='flex flex-col-reverse lg:block'>
        <div className='  h-auto items-center bg-[#001A31] py-[10px] md:flex 2xl:px-[20px]'>
          <div className='mx-auto flex  w-full justify-between lg:mx-6 xl:mx-auto  xl:w-4/5'>
            <div className='hidden w-full items-center justify-between gap-5 font-medium  text-white lg:flex xl:justify-start'>
              <div className='flex'>
                <PhoneIcon />
                <div className='ml-2 '>+91-950-1108830 </div>
              </div>
              <div className='flex'>
                <EmailIcon />
                <div className='ml-2 mr-4'>info@fatehacademy.com</div>
              </div>
            </div>
            <div className='flex w-full justify-center space-x-2 px-2  lg:justify-end  lg:space-x-4  '>
              <div className='hidden md:flex'>
                <Button
                  onClick={() =>
                    router.push('https://ifa-admin-4406d.web.app/login')
                  }
                  variant='outline'
                >
                  School App Login
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => router.push('/applyforjob')}
                  variant='outline'
                >
                  Apply For a Job
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => router.push('/register')}
                  variant='primary'
                >
                  New Admissions Registration
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[78px] bg-white'>
          <div className='mx-5 flex cursor-pointer items-center justify-between md:mx-16 lg:mx-4 xl:mx-48'>
            <div onClick={() => router.push('/')} className=''>
              <Image
                src='/images/logoIFA.png'
                height='72vh'
                width='230vw'
                objectFit='contain'
                alt=''
              />
            </div>
            <div className='hidden lg:flex  '>
              {navHeader?.map((nav) => (
                <Link href={nav?.link} key={nav?.title} passHref>
                  <div
                    className={`text[17px] cursor-pointer px-[20px] py-[17px] ${
                      route === nav?.link ? 'text-[#FA6210]' : 'text-[#001A31]'
                    }`}
                  >
                    {nav?.title}
                    {route === nav?.link && (
                      <div className=' absolute -mt-[27px] -ml-2 '>
                        <Image
                          alt=''
                          src='/images/orangelines.png'
                          height='60px'
                          width='60px'
                          objectFit='contain'
                        />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div
              className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#01305A] lg:hidden '
              onClick={() => {
                setIsMenuOpened(!isMenuOpened);
              }}
            >
              <div
                onClick={() => {
                  setIsMenuOpened(!isMenuOpened);
                }}
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isMenuOpened && (
        <div
          style={{ overflowY: 'hidden', height: '100vh' }}
          className='w-full  bg-white py-5'
          ref={refMenu}
        >
          <div className='  '>
            {navHeader?.map((nav) => (
              <Link href={nav?.link} key={nav?.title} passHref>
                <div
                  onClick={() => setIsMenuOpened(!isMenuOpened)}
                  className={`text[17px] cursor-pointer px-[20px] py-[17px] ${
                    route === nav?.link ? 'text-[#FA6210]' : 'text-[#001A31]'
                  }`}
                >
                  {nav?.title}
                  {route === nav?.link && (
                    <div className=' absolute -mt-[27px] -ml-2 '>
                      <Image
                        alt=''
                        src='/images/orangelines.png'
                        height='60px'
                        width='60px'
                        objectFit='contain'
                      />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className=' mx-[20px] mt-4 flex flex-col gap-2 '>
            <button
              onClick={() => {
                router.push('/register');
                setIsMenuOpened(!isMenuOpened);
              }}
              className='w-60 border border-[#01305A] px-[15px] py-[9px] text-[#01305A]'
            >
              New Admissions Registration
            </button>
            <a href='https://ifa-admin-4406d.web.app/login'>
              <button className='w-40 border border-[#01305A] px-[15px] py-[9px] text-[#01305A]'>
                School App Login
              </button>
            </a>
            <button
              onClick={() => {
                router.push('/applyforjob');
                setIsMenuOpened(!isMenuOpened);
              }}
              className='w-40 border  bg-[#01305A] px-[15px] py-[9px] text-white'
            >
              Apply For a Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
