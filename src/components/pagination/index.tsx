import React,{useState} from 'react';

const Pagination = () => {
  const [start,setStart] = useState(0)
  const [pageSize,setPageSize] = useState(5)
 
  return (
    <>
      <nav aria-label='Page navigation '>
        <ul className='inline-flex items-center -space-x-px'>
          <li>
            <div className='ml-0 block rounded-l-lg border border-gray-300 bg-white  py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <span className='sr-only'>Previous</span>
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
          </li>
          <li onClick={()=>{setStart(start+1*pageSize+1);}}>
            <div className='border border-gray-300 bg-white py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              1
            </div>
          </li>
          <li>
            <div className='border border-gray-300 bg-white  py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              2
            </div>
          </li>
          <li>
            <div className='border border-gray-300 bg-white  py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              3
            </div>
          </li>
          <li>
            <div className='border border-gray-300 bg-white  py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              4
            </div>
          </li>
          <li>
            <div className='border border-gray-300 bg-white  py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              5
            </div>
          </li>
          <li>
            <div className='block rounded-r-lg border border-gray-300 bg-white  py-4 px-8 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <span className='sr-only'>Next</span>
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
