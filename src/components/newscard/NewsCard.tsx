import Image from 'next/image';

const NewsCard = ({ image, year, date, heading, desc }) => {
  return (
    <>
      <div className=' w-[300px] cursor-pointer rounded-md bg-white p-4 shadow-lg  hover:bg-gray-100 md:w-full  '>
        <div className='md:flex'>
          <div className=''>
            <div className='mb-4 flex justify-center'>
              <Image
                src={image}
                width='250'
                height='130'
                alt='newsCard'
                className='rounded-md'
                objectFit='cover'
              />
            </div>

            <div className='grid place-items-center rounded-md bg-[#01305a] py-2 text-white'>
              <div className='text-3xl'>{year}</div>
              <div>{date}</div>
            </div>
          </div>
          <div className='ml-4'>
            <div className='mt-4 w-60 truncate text-center text-[21px] font-semibold text-gray-800 md:w-80 md:text-left'>
              {heading}
            </div>
            <div className='mt-4 text-center   md:w-[300px]  md:text-left xl:w-80'>
              {desc.slice(0, 190)}
            </div>
            <div className='mt-2 text-center text-lg text-[#ff8642] md:text-left'>
              Read More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsCard;
