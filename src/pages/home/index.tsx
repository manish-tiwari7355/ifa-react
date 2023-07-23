import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import HashLoader from 'react-spinners/HashLoader';
import Cookies from 'universal-cookie';

import styles from './index.module.css';

import AnimatedButton from '@/components/animatedButton';
import Card from '@/components/Card/Card';
import HomeCard from '@/components/homecard/HomeCard';

import { useSingleEvents } from '../../hooks/events/useSingleEvent';
import { useGetNews } from '../../hooks/news/useGetNews';

const cookies = new Cookies();

const imageCarousal = [
  {
    id: '1',
    description:
      ' It is wonderful to visit International Fateh Academy. All students work very hard. Every performance had a great message for Punjab and it is very important to open the eyes of Punjabis. This is the best millennium because of this type of initiatives. IFA is rocking. May God bless IFA. They can give good students to the society of Punjab. May Waheguru give more success to IFA.',
    name: 'Anureet Kaur Virk (Social Worker) 2018-11-05',
  },
  {
    id: '2',
    description:
      'Really this institute is very great and give a valuable knowledge to students. Really appreciate it & excellent function.',

    name: 'Palwinderpal Singh (Principal), Sri Guru Hargobind Public School 2018-11-05',
  },
  {
    id: '3',
    description:
      'I am feeling really great watching all the performances. Everybody looking so great and perform really well. I am feeling glad to see the performances based on Punjabi Culture. After so long time I see this function which reminds me about our culture.',

    name: ' Amrinderjit Kaur Gill (Guest) 2018-11-05',
  },
  {
    id: '4',
    description:
      'I am so happy because my little angle perform very well in Shabad Kirtan. It is my dream come true. I really appreciate this effort to encourage self confidence in my child. Thanks',

    name: 'Supreet Bhullar (Parent) 2018-11-05',
  },
  {
    id: '5',
    description:
      'Today I visited this glorious Academy of education at the occassion of its annual function. I appreciate and admire S. Jagbir singh and his team of management  for bringing quality education with world class facilities. Keeping our great traditions with us. I wish all the best for the golden future of the academy and its students',

    name: 'Kunwar Vijay Pratap Singh (IPS,IGP,ATS) Punjab 2017-11-13',
  },
  {
    id: '6',
    description:
      'It is a wonderful experience today to see the such colorful or intellectual program of Fateh Academy annual function whitch was so religious and knowledgeable to the new genration',
    name: 'Shailender Singh AIG/IUT',
  },
  {
    id: '7',
    description:
      'It was a wonderful experience to be present here for 15th A day of IFA. God bless the whole team to work for the society and make thier valuable service to humanity by give quality education to the childern of Jandiala Guru . ',
    name: 'Suhinder Kaur W/o Cabinet minister Harbhajan Singh (ETO)',
  },
  {
    id: '8',
    description:
      'I feel very proud to attend the 12th annual day of the school .I personally felt so much effort of the founders, teachers and students.I pray for great achievements by the school in every corner of the world .Congratulations ',
    name: 'Mandeep Kaur ',
  },
  {
    id: '9',
    description:
      'Visited the Academy today . It was a pleasure to see a wonderful institution located in rural area of the district . The performances of the students were at once spiritual and with strong & relevant social messages . I wish the Fateh Academy / institutions all my best for future . May the students of these schools become excellent citizens in addition to adriening academic success of making a mark in their lines as achievers every field . All the best !!',
    name: 'Kamaldeep Singh Sangha D.C Amritsar',
  },
  {
    id: '10',
    name: 'Dalbir Singh Tong (MLA Baba Bakala)',
    description:
      'ਮੈ ਅੱਜ ਫਤਿਹ ਅਕੈਡਮੀ ਨੂੰ ਆਪਣੇ ਵੱਲੋ ਸ਼ੁਭ ਕਾਮਨਾਵਾ ਦਿਆਗਾ ਕਿ ਪਮਾਤਮਾ ਹਮੇਛਾ ਦਿਨ ਦਿਗਣੀ ਤੇ ਰਾਤ ਚੋਗਣੀ ਤਰਕੀ ਬਖਸ਼ੇ',
  },
  {
    id: '11',
    name: 'ਸ਼ੇਰ ਜੰਗ ਸਿੰਘ ਹੁੰਦਲ',
    description:
      'IFA ਕੌਮ ਦਾ ਸਰਮਾਇਆ ਹੈ ਅਤੇ ਆਸ ਹੈ  ਕਿ ਇਸ ਸਰਮਾਏ ਦਾ ਖੱਟਿਆ ਕੌਮ ਨੂੰ ਕਈ ਸਿਖਰਾ ਦੇਵੇਗਾ ਧੰਨਵਾਦ ਸਹਿਤ ',
  },
];
function Home() {
  const [color, setColor] = useState('#FA6210');
  const [loading, setLoading] = useState(true);
  const getNews: any = useGetNews({
    query: { category: 'news' },
  });
  const [id, setId] = useState('');
  const getSingleEvent: any = useSingleEvents({
    pathParams: {
      blogId: id,
    },
  });
  const [showModal, setShowModal] = useState(false);
  const date = new Date(getSingleEvent?.data?.blog.updatedAt.slice(0, 10));
  const month = date.toLocaleString('default', { month: 'long' });
  const Newdate = date.getDate();
  const NewMonth = month.slice(0, 3);
  const NewYear = date.getFullYear();
  const router = useRouter();

  return (
    <div className=' '>
      <div
        className='mt-[-90px] flex min-h-[100vh] items-end justify-center px-6 md:mt-[-20px]  lg:mt-0 lg:min-h-[60vh] xl:min-h-[83vh] 2xl:min-h-[78vh] '
        style={{
          backgroundImage: 'url(/images/fatehBg.png) ',
          backgroundSize: 'cover',
          backgroundAttachment: `fixed`,
          backgroundPosition: `center`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=' h-full items-center gap-10  text-white lg:flex  xl:mt-0 '>
          <div className='w-full items-center self-stretch '>
            <div className={styles.fontStyle}>
              <div className='text-4xl  leading-[70px] md:text-[56px]'>
                International Fateh Academy
              </div>
            </div>
            <p className='mt-4  text-[17px] font-medium'>
              <p className=''>
                {' '}
                <span className='text-3xl'>Future </span>IS YOURS
              </p>
              <p>
                WE <span className='text-3xl'>PREPARE</span> YOU{' '}
                <span className='text-3xl'>TODAY</span>
              </p>
            </p>
            <div
              onClick={() => router.push('/register')}
              className='mt-10  mb-20 md:mb-0'
            >
              <AnimatedButton size='large' title='Admissions Open' />
            </div>
          </div>
          <div className='   w-full items-end overflow-hidden    '>
            <div className=' -mb-8 flex h-full w-full  justify-center '>
              <Image
                alt=''
                src='/images/blob.png'
                height='500px'
                width='500px'
                objectFit='contain'
              />
              <div
                className={`absolute -bottom-[200px] -ml-[520px] flex h-40  w-20 justify-center    lg:bottom-[200px] xl:bottom-2  ${styles?.arrow}`}
              >
                <Image
                  alt=''
                  src='/images/arrow.svg'
                  height='100px'
                  width='100px'
                  objectFit='contain'
                />
              </div>
              <div
                className={`absolute bottom-[100px] -ml-[50vw] md:bottom-[200px] lg:-bottom-[-550px] xl:-bottom-[-350px] 2xl:-ml-[35vw] ${styles.Image1} `}
              >
                <Image
                  alt=''
                  src='/images/idea.png'
                  height='140px'
                  width='140px'
                  objectFit='contain'
                />
              </div>
              <div
                className={`absolute bottom-[-60px] -ml-[4vw] md:bottom-[-140px] lg:-bottom-[-200px] lg:-ml-[0vw] xl:-bottom-[0px] 2xl:-bottom-[-60px] ${styles.Image} `}
              >
                <Image
                  alt=''
                  src='/images/maths.svg'
                  height='100px'
                  width='100px'
                  objectFit='contain'
                />
              </div>
              <div
                className={`absolute bottom-[-70px] -mr-[65vw]  md:bottom-[-150px] md:-ml-[20vw]  lg:-bottom-[-200px] lg:-ml-[40vw]  xl:-bottom-[0px] 2xl:-bottom-[-60px]  ${styles.Image} `}
              >
                <Image
                  alt=''
                  src='/images/science.svg'
                  height='120px'
                  width='120px'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' px-[20px] pt-[100px] pb-[60px]'>
        <div className='mx-auto  w-4/5  '>
          <div className='flex items-end gap-2 '>
            <div className='h-[30px] w-[30px] bg-[#FA6210] ' />{' '}
            <span className='text-[21px] font-medium text-[#333333] '>
              <div className={styles.fontStyle}>About Us</div>
            </span>
          </div>
          <div className='mt-10 flex flex-col gap-10  lg:flex-row'>
            <div className='w-full  '>
              <h3 className=' text-[33px] font-semibold text-[#15538B] lg:text-[38px]'>
                <div className={styles.fontStyle}>
                  Great Campus Of Fateh
                  <span className='text-[#FA6210]'> Academy</span>
                </div>
              </h3>
              <div className=' absolute -mt-12  '>
                <Image
                  alt=''
                  src='/images/orangelines.png'
                  height='100px'
                  width='100px'
                  objectFit='contain'
                />
              </div>
              <p className='mt-5 text-justify text-[17px] leading-8 text-[#333333]'>
                The medium of instruction at IFA is English, and the curriculum
                we follow is in accordance with ICSE/CIE(IGCSE) Board. However,
                the real crux of education at IFA lies in how we choose to bring
                this universe of knowledge to our students. IFA has an
                environment that encourages and enlightens the spirit. It
                generates hunger to explore and discover, a desire to
                experiment, debate and through interactions encourage
                independent thought.
              </p>
              <p className='mt-2 text-justify text-[17px] leading-8 text-[#333333]'>
                Spacious Classrooms equipped with modern and scientific
                facilities. Furniture, Toys, Games & Colour Scheme of Classroom
                walls have been designed to suit the needs and age group of
                students.
              </p>
              <div className=' mt-4 flex '>
                <Image
                  alt=''
                  src='/images/signature.png'
                  height='100px'
                  width='100px'
                  objectFit='contain'
                />
                <div className=' ml-[10px]'>
                  <div className='text-[22px] font-semibold text-[#333333] '>
                    Jagbir Singh
                  </div>
                  <div className='text-[17px] text-[#01305A]'>
                    (Chairman & Founder)
                  </div>
                </div>
              </div>
              <div onClick={() => router.push('/about')}>
                <AnimatedButton title='Read More' size='normal' />
              </div>
            </div>
            <div className='flex w-full justify-center self-stretch  '>
              <Image
                alt='about'
                src='/images/about-image.png'
                height='500px'
                width='500px'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#E6F3FFB5] px-[20px]  '>
        <div className='mx-8 flex justify-center '>
          <div className={styles.fontStyle}>
            <div className='mt-10 flex justify-center text-xl font-semibold text-[#01305a]'></div>
            <div className='mt-4 text-4xl font-semibold'>
              <span className='text-[#fa6210]'> Testimonial</span>
            </div>
            <div className='  absolute ml-[0px] mt-[-70px] '>
              <Image
                alt='orangelines'
                src='/images/orangelines.png'
                height='150px'
                width='150px'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto w-4/5 justify-center overflow-hidden  lg:flex '>
          <Card data={imageCarousal} />
        </div>
      </div>
      <div className='flex justify-center bg-homebg '>
        <div className=' pt-20 pb-20 2xl:px-[290px]'>
          <div className='flex justify-center'>
            <div className='grid gap-x-16  gap-y-20 md:grid-cols-2 xl:grid-cols-4'>
              <div>
                <div className='h-40 w-72 bg-transparent'>
                  <div className={styles.fontStyle}>
                    <div className=' rounded rounded-br-lg  bg-[#1a65a7] shadow-md'>
                      <div className='ml-1 mt-[-2px] flex justify-between rounded-tr bg-white px-6 py-4'>
                        <div className='mt-5 text-xl'>Learn</div>
                        <div>
                          <Image
                            alt='book'
                            src='/images/learn.png'
                            height='60px'
                            width='60px'
                            objectFit='contain'
                          />
                        </div>
                      </div>
                      <div className='ml-1 mt-[-2px]  rounded-br-lg bg-white px-7 pb-12'>
                        At IFA we provide an environment where your child is
                        inspired to learn.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='h-40 w-72 bg-transparent'>
                  <div className={styles.fontStyle}>
                    <div className=' rounded rounded-br-lg  bg-[#1a65a7] shadow-md'>
                      <div className='ml-1 mt-[-2px] flex justify-between rounded-tr bg-white px-6 py-4'>
                        <div className='mt-5 text-xl'>Grow</div>
                        <div>
                          <Image
                            alt='grow'
                            src='/images/grow.png'
                            height='60px'
                            width='60px'
                            objectFit='contain'
                          />
                        </div>
                      </div>
                      <div className='ml-1 mt-[-2px] rounded-br-lg bg-white px-7 pb-12'>
                        Nurturing the growth and channelizing the energy of your
                        child in a positive way.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className='h-40 w-72 bg-transparent'>
                  <div className={styles.fontStyle}>
                    <div className=' rounded rounded-br-lg  bg-[#1a65a7] shadow-md'>
                      <div className='ml-1 mt-[-2px] flex justify-between rounded-tr bg-white px-6 py-4'>
                        <div className='mt-5 text-xl'>Share</div>
                        <div>
                          <Image
                            alt='achievement'
                            src='/images/achievement.png'
                            height='60px'
                            width='60px'
                            objectFit='contain'
                          />
                        </div>
                      </div>
                      <div className='ml-1 mt-[-2px] rounded-br-lg bg-white px-7 pb-12'>
                        By giving people the power to share, we’re making the
                        world more transparent.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='h-40 w-72 bg-transparent'>
                  <div className={styles.fontStyle}>
                    <div className=' rounded rounded-br-lg  bg-[#1a65a7] shadow-md'>
                      <div className='ml-1 mt-[-2px]  flex justify-between rounded-tr bg-white px-6 py-4'>
                        <div className='mt-5 text-xl'>Succeed</div>
                        <div>
                          <Image
                            alt='book'
                            src='/images/collaboration-p-500.png'
                            height='60px'
                            width='60px'
                            objectFit='contain'
                          />
                        </div>
                      </div>
                      <div className='ml-1 mt-[-2px] h-[120px] rounded-br-lg bg-white px-7 pb-12'>
                        Success is where preparation and opportunity meet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:justify-satrt flex  justify-between '>
            <div className={styles.fontStyle}>
              <div className='mt-28 text-4xl font-semibold text-[#15538b]'>
                Courses & <span className='text-[#fa6210]'> Classes</span>
              </div>
              <div className='  absolute mt-[-45px] pl-10 md:ml-[180px]  '>
                <Image
                  alt='orangelines'
                  src='/images/orangelines.png'
                  height='100px'
                  width='100px'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='mt-20 grid gap-y-10  md:grid-cols-2 md:gap-x-10 lg:grid-cols-3'>
              <div className=''>
                <div className='w-[300px]  cursor-pointer shadow-md hover:bg-gray-100 xl:w-[370px] '>
                  <Image
                    alt='students1'
                    src='/images/students1.jpg'
                    height='450px'
                    width='500px'
                    className='rounded-t-md duration-500 ease-in hover:scale-110'
                  />

                  <div className='mt-[-10px] h-[230px] w-[300px]  rounded-b-md bg-white xl:w-[370px] '>
                    <div className='mx-7  pt-5 text-xl font-semibold text-[#01305a]'>
                      Pre Nursery
                    </div>
                    <div className='mx-7 mt-2 font-semibold text-gray-500'>
                      Creative assignments, reading and extra-curricular to
                      enhance your child’s learning experience.
                    </div>
                    <div className='mt-10 flex justify-between'>
                      <div onClick={() => router.push('/register')}>
                        <AnimatedButton title='Join Now' size='normal' />
                      </div>
                      <div className=''>
                        <Image
                          alt='lines'
                          src='/images/lines.png'
                          height='50px'
                          width='50px'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className='w-[300px] shadow-md xl:w-[370px] '>
                    <Image
                      alt='science_1'
                      src='/images/OurStaff.jpg'
                      height='450px'
                      width='500px'
                      className='rounded-t-md duration-500 ease-in hover:scale-110'
                    />

                    <div className='mt-[-10px] w-[300px] rounded-b-md bg-white xl:h-[230px] xl:w-[370px] '>
                      <div className='mx-7  pt-5 text-xl font-semibold text-[#01305a]'>
                        Science Lab
                      </div>
                      <div className='mx-7 mt-2 font-semibold text-gray-500'>
                        Equipped with all the latest facilities and smart
                        learning tools, the science labs are learning spaces,
                        meant to inspire.
                      </div>
                      <div className='mt-5 flex justify-between xl:mt-10'>
                        <div onClick={() => router.push('/register')}>
                          <AnimatedButton title='Join Now' size='normal' />
                        </div>
                        <div className=''>
                          <Image
                            alt='lines'
                            src='/images/lines.png'
                            height='50px'
                            width='50px'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div className='w-[300px] shadow-md xl:w-[370px] '>
                      <Image
                        alt='engineering'
                        src='/images/home2.jpg'
                        height='450px'
                        width='500px'
                        objectFit='cover'
                        className='rounded-t-md duration-500 ease-in hover:scale-110'
                      />

                      <div className='mt-[-10px] h-[230px] w-[300px]  rounded-b-md bg-white xl:w-[370px] '>
                        <div className='mx-7  pt-5 text-xl font-semibold text-[#01305a]'>
                          Engineering
                        </div>
                        <div className='mx-7 mt-2 h-[70px] font-semibold text-gray-500'>
                          We offer a plethora of modular courses for
                          engineering.
                        </div>
                        <div className='mt-10  flex justify-between'>
                          <div onClick={() => router.push('/register')}>
                            <AnimatedButton title='Join Now' size='normal' />
                          </div>
                          <div className=''>
                            <Image
                              alt='lines'
                              src='/images/lines.png'
                              height='50px'
                              width='50px'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='2xl:mx-[220px] 2xl:mr-72'>
        <div className=' mt-24  justify-between md:flex'>
          <div>
            <div className='justify-satrt  flex '>
              <div className={styles.fontStyle}>
                <div className=' mx-12 text-4xl font-semibold text-[#15538b]  xl:mx-20'>
                  News & <span className='text-[#fa6210]'> Updates</span>
                </div>
                <div className='  absolute mt-[-45px] pl-10 md:ml-[180px]  '>
                  <Image
                    alt='orangelines'
                    src='/images/orangelines.png'
                    height='100px'
                    width='100px'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push('/news')}
            className='mt-10 ml-5 md:mt-0 md:ml-0 md:mr-10'
          >
            <AnimatedButton title='View More' size='normal' />
          </div>
        </div>
        <div className=' flex justify-center lg:mx-4 xl:mx-20'>
          <div className='mt-5  grid gap-x-20 gap-y-10 pb-40 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 xl:grid-cols-4'>
            {getNews?.data?.blogs?.slice(0, 4).map((items) => {
              const date = new Date(items.updatedAt.slice(0, 10));
              const month = date.toLocaleString('default', {
                month: 'long',
              });

              const Newdate = date.getDate();
              const NewMonth = month.slice(0, 3);
              const NewYear = date.getFullYear();
              return (
                <div
                  onClick={() => {
                    setShowModal(true);
                    cookies.set('eventId', items._id);
                    setId(cookies.get('eventId'));
                  }}
                  key={items.id}
                >
                  <HomeCard
                    image={items?.media[0]?.url || '/images/noImage.png'}
                    date={Newdate + ' ' + NewMonth + ' ' + NewYear}
                    heading={items.title}
                    desc={items.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <--Modal---> */}
      {showModal ? (
        <>
          <div className='fixed inset-0 z-50  flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div
              onClick={() => setShowModal(false)}
              className='absolute h-screen w-screen bg-transparent'
            ></div>

            <div className='relative  my-6 mx-auto w-auto max-w-3xl md:mt-36 '>
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                <div className='relative  flex-auto '>
                  <div
                    onClick={() => setShowModal(false)}
                    className='flex  justify-end'
                  >
                    <div
                      onClick={() => setShowModal(false)}
                      className='z-10000 absolute  grid h-10 w-10  cursor-pointer place-items-center rounded-full   text-white    '
                    >
                      <IoClose
                        onClick={() => setShowModal(false)}
                        className=' cursor-pointer text-[35px] text-black '
                      />
                    </div>
                  </div>
                  {getSingleEvent?.data?.blog ? (
                    <div className='h-[500px] w-full rounded-lg bg-white'>
                      <div className='mt-5 grid grid-cols-2'>
                        <div className='flex px-10'>
                          <Image
                            src={
                              getSingleEvent?.data?.blog?.media[0]?.url ||
                              '/images/noImage.png'
                            }
                            width={200}
                            height={150}
                            alt='event'
                            className='rounded-lg'
                          />
                        </div>
                        <div className='mt-8 '>
                          <div className={styles.fontStyle}>
                            <p className=' max-h-[100px]  truncate break-all pr-4 text-3xl font-semibold'>
                              {getSingleEvent?.data?.blog.title}
                            </p>
                            <div className='text-xl'>
                              {' '}
                              {Newdate + ' ' + NewMonth + ' ' + NewYear}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mx-12 mt-5 text-2xl font-semibold'>
                        News :
                      </div>

                      <div
                        className={`${styles.scroll} mx-12 mt-2 h-52 overflow-auto text-lg`}
                      >
                        {getSingleEvent?.data?.blog.description}
                      </div>
                    </div>
                  ) : (
                    <div className='flex h-[450px] w-[600px] items-center justify-center rounded-lg bg-white'>
                      <div className='sweet-loading '>
                        <HashLoader
                          color={color}
                          loading={loading}
                          size={150}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/*  */}
              </div>
            </div>
          </div>

          <div className='fixed inset-0 z-40 bg-black opacity-70'></div>
        </>
      ) : null}
    </div>
  );
}

export default Home;
