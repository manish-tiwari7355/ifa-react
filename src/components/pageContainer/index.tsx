import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './FontStyle.module.css';
function PageContainer({ title }) {
  const router = useRouter();
  return (
    <div>
      <div className='  w-full'>
        <Image
          alt='Mountains'
          src='/images/breadcrumb.png'
          height='380px'
          width='2300px'
          objectFit='cover'
          priority={true}
        />
      </div>
      <div className=' absolute top-[10%] w-full md:top-[22%] lg:top-[24%]  xl:top-[33%]'>
        <div className='flex  items-center justify-center '>
          <div className='text-center'>
            <div>
              <div className={styles.fontStyle}>
                <div className=' mt-2 text-[18px] font-medium text-white sm:text-[38px] md:mt-0'>
                  {title}
                </div>
              </div>
            </div>
            <div className=' hidden items-center  justify-center gap-4 md:my-[10px] lg:flex'>
              <div onClick={() => router.push('/')} className='cursor-pointer'>
                <Image
                  src='/images/home.png'
                  height='18px'
                  width='18px'
                  alt=''
                />
              </div>
              <Image
                src='/images/arrow.png'
                height='18px'
                width='18px'
                alt=''
              />

              <span className='text-[16px] font-medium text-white'>
                {title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContainer;
