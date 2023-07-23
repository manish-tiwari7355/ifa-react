/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div
      className=' w-full '
      style={{
        backgroundImage: 'url(/images/footer.png) ',
        backgroundSize: 'cover',

        backgroundPosition: `center`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=' flex  flex-col justify-center  px-[20px]  py-[40px] xl:mx-auto xl:w-4/5 '>
        <div>
          <div className=' mt-2 flex justify-between p-3'>
            <Image
              src='/images/education.png'
              height='112px'
              width='232px'
              className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
              alt='logo'
            />
            <div className='flex gap-5'>
              <Image
                src='/images/igma.png'
                height='100px'
                width='133px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
              <Image
                src='/images/AIM.png'
                height='100px'
                width='80px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
              <Image
                src='/images/educom.png'
                height='100px'
                width='133px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
              <Image
                src='/images/HSG.png'
                height='100px'
                width='80px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
              <Image
                src='/images/cam-brdg.png'
                height='100px'
                width='133px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
              <Image
                src='/images/NCC.png'
                height='100px'
                width='80px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
              {/* <Image
                src='/images/edu.png'
                height='100px'
                width='133px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              /> */}
              <Image
                src='/images/bblogo.png'
                height='100px'
                width='80px'
                className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                alt='logo'
              />
            </div>
          </div>
        </div>
        <div className='  w-full  justify-between gap-6 border-t border-[#fa6210] pt-4 md:flex lg:flex   '>
          <div className='w-full md:w-1/2'>
            <Link href='/'>
              <div className=' cursor-pointer '>
                <Image
                  src='/images/logoIFAWhite.png'
                  height='88px'
                  width='348px'
                  className='  object-contain  sm:mx-auto md:mx-0 lg:mx-0'
                  alt='logo'
                />
              </div>
            </Link>

            <div className=' cursor-pointer gap-5 py-[10px] '>
              <ul className=' font-regular px-0 text-[16px]  leading-[1.3rem] text-white '>
                <li className='flex items-center gap-2 py-2'>
                  {/* <div className='h-[35px] w-[35px]  p-1'>
                    <Image src={emailIcon} alt='email' />
                  </div> */}
                  <span> info@fatehacademy.com</span>
                </li>
                <li className='flex items-center gap-2 py-2'>
                  {/* <div className='h-[35px] w-[35px]   p-1'>
                    <Image src={phoneIcon} alt='phone' />
                  </div> */}
                  <span>+91 9501108830</span>
                </li>
                <li className='flex items-center gap-2 py-2'>
                  {/* <div className='h-[35px] w-[35px]   p-1'>
                    <Image src={phoneIcon} alt='phone' />
                  </div> */}
                  <span>Academy Road, Jandiala Guru, Punjab 143001</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-1/2 justify-start gap-6 xxs:items-start xs:ml-0 xs:block md:ml-[200px] md:flex md:items-start'>
            <div className='mt-10 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
              <div className=' mb-5  text-[20px] font-medium  leading-[1.3rem] text-white '>
                Quick Links
              </div>
              <ul className=' font-regular cursor-pointer px-0  text-[16px] leading-[1.3rem] text-white'>
                <Link href='/'>
                  <div className='py-1'>Home</div>
                </Link>
                <Link href='/about'>
                  <div className='py-1'>About</div>
                </Link>
                <Link href='/facilities'>
                  <div className='py-1'>Facilities</div>
                </Link>
                <Link href='/terms'>
                  <div className='py-1'>Terms & Conditions</div>
                </Link>
                <Link href='/contact'>
                  <div className='py-1'>Contact Us</div>
                </Link>
                <Link href='/tours'>
                  <div className='py-1'>Tours</div>
                </Link>
                <Link href='/prescribedbooks'>
                  <div className='py-1'>Prescribed Books</div>
                </Link>
              </ul>
            </div>

            <div className=' xs:ml-0 xs:mt-10 md:mt-0 lg:mt-0 xl:mt-0  2xl:mt-0'>
              <div className=' mb-5  text-[20px] font-medium   leading-[1.3rem] text-white '>
                Information
              </div>
              <ul className=' font-regular px-0 text-[16px]  leading-[1.3rem] text-white '>
                <Link href='/activities'>
                  <li className='cursor-pointer py-1'>Activities</li>
                </Link>
                <Link href='/news'>
                  <li className='cursor-pointer py-1'>News</li>
                </Link>
                <Link href='/events'>
                  <li className='cursor-pointer py-1'>Event</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center text-center'>
          <div className='  py-5 '>
            <div className=' text-[15px] text-white '>
              Copyright © 2022 All rights reserved © IFA.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
