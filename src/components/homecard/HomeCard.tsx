import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

import styles from './FontStyle.module.css';
const HomeCard = ({ image, date, heading, desc }) => {
  return (
    <>
      <div className='flex h-[490px] w-[300px] cursor-pointer flex-col items-end justify-between rounded-md    p-4 shadow-lg hover:bg-gray-100 '>
        <div className='flex justify-center'>
          <Image
            src={image}
            width='300px'
            height='300px'
            alt='newsletter'
            className='rounded-md'
          />
        </div>
        <div className='w-full'>
          <div className={styles.fontStyle}>
            <div className='mt-2 flex w-full justify-start text-gray-500'>
              <div>{date}</div>
            </div>
            <p className='my-3 w-60 truncate break-all text-lg font-semibold text-[#16456e] '>
              {heading}
            </p>
            <div className=' text-gray-600'>{desc.slice(0, 40)}</div>
          </div>
        </div>

        <div className='w-full'>
          <div className='mt-2 flex items-end justify-between'>
            <div className='text-[#ff8642]'>Read More</div>
            <div>
              <MdKeyboardArrowRight className='text-3xl ' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeCard;
