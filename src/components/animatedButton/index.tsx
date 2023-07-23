import React from 'react';

import Styles from './index.module.css';

import { RightArrow } from '@/utils/AppIcons';

function AnimatedButton({ size, title }) {
  const getButton = () => {
    switch (size) {
      case 'large':
        return (
          <div className='group relative flex h-[50px] w-[220px] cursor-pointer  items-center justify-start gap-2  overflow-hidden bg-[#FA6210]  pl-[20px] text-white'>
            <div className={`  group-hover:  absolute text-[16px] font-medium`}>
              {title}
            </div>

            <div
              className={`${Styles.circle} ml-[150px] group-hover:ml-[-60px] group-hover:h-[240px] group-hover:w-[560px] `}
            ></div>
            <span className='absolute right-[20px] z-[100] '>
              {' '}
              <RightArrow />
            </span>
            <div
              className={`${Styles.circle1}  group-hover:h-[40px] group-hover:w-[40px] group-hover:bg-gray-700`}
            ></div>
          </div>
        );

      case 'normal':
        return (
          <div className='group relative flex h-[50px] w-[180px] cursor-pointer  items-center justify-start gap-2  overflow-hidden bg-[#FA6210]  pl-[20px] text-white'>
            <div className={`  group-hover:  absolute text-[16px] font-medium`}>
              {title}
            </div>

            <div
              className={`${Styles.circle} ml-[110px] group-hover:ml-[-60px] group-hover:h-[240px] group-hover:w-[560px] `}
            ></div>
            <span className='absolute right-[20px] z-[100] '>
              {' '}
              <RightArrow />
            </span>
            <div
              className={`${Styles.circle1}  group-hover:h-[40px] group-hover:w-[40px] group-hover:bg-gray-700`}
            ></div>
          </div>
        );

      default:
        return (
          <div className='group relative flex h-[50px] w-[156px] cursor-pointer  items-center justify-start gap-2  overflow-hidden bg-[#FA6210]  pl-[20px] text-white'>
            <div
              className={`  group-hover:  absolute text-[16px] font-medium `}
            >
              {title}
            </div>

            <div
              className={`${Styles.circle} ml-[86px] group-hover:ml-[-60px] group-hover:h-[240px] group-hover:w-[560px] `}
            ></div>
            <span className='absolute right-[20px] z-[100] '>
              {' '}
              <RightArrow />
            </span>
            <div
              className={`${Styles.circle1}  group-hover:h-[40px] group-hover:w-[40px] group-hover:bg-gray-700`}
            ></div>
          </div>
        );
    }
  };
  return getButton();
}

export default AnimatedButton;
