import Image from 'next/image';
import React from 'react';

import styles from './FontStyle.module.css';

const AboutCard = ({ image, heading, desc, color }) => {
  return (
    <div
      className={`   cursor-pointer rounded-xl border border-gray-300 bg-[${color}] `}
    >
      <div className='relative mt-1 h-[420px] rounded-xl border border-gray-300 bg-white pt-12'>
        <div className=' px-10 '>
          <Image
            alt='computer'
            src={image}
            height='50'
            width='50'
            className='rounded-md'
          />
        </div>
        <div className={styles.fontStyle}>
          <div className='w-[300px] px-10  text-[23px] font-semibold text-[#01305a] lg:w-[350px]'>
            {heading}
          </div>
          <div className=' mt-4 px-10 '>{desc}</div>
        </div>
        <div className='absolute right-0 bottom-0 flex items-end justify-end'>
          <Image
            alt='computer'
            src='/images/lines.png'
            height='50'
            width='50'
            className='rounded-md'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
