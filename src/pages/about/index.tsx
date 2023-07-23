/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

// eslint-disable-next-line react/no-unescaped-entities
import styles from './FontStyle.module.css';

import AnimatedButton from '@/components/animatedButton';
import PageContainer from '@/components/pageContainer';

import CuttingEdge from '../../assets/img/cuttingEdge.jpg';
import Entertainment from '../../assets/img/entertainment.jpg';
import Hostel from '../../assets/img/hostel.jpg';
import Medical from '../../assets/img/medical.jpg';

function About() {
  const [image, setImage] = useState('');
  const [pdf, setPdf] = useState('');
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);
  return (
    <div>
      <PageContainer title='About us' />
      <div className='absolute w-full '>
        <div className='-mt-[55px] flex justify-end'>
          <Image
            alt='dotPlane'
            src='/images/dot-plan-1.svg'
            height='200px'
            width='200px'
            objectFit='contain'
          />
        </div>
        <div className=' mt-80   hidden md:block'>
          <div className='flex justify-end'>
            {' '}
            <div className='download'>
              <Image
                alt=''
                src='/images/download-2.png'
                height='200px'
                width='110px'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
      <div className=' px-[20px] pt-[100px] pb-[60px]'>
        <div className='mx-auto  w-4/5  '>
          <div className='mt-10 flex flex-col gap-10  lg:flex-row'>
            <div className='w-full  '>
              <h3 className=' text-[33px] font-semibold text-[#333333] lg:text-[38px]'>
                About
                <span className='text-[#FA6210]'>Fateh Academy</span>{' '}
                <div className=' absolute -mt-12 ml-[40px] sm:ml-[220px]  lg:ml-[270px]'>
                  <Image
                    alt='orangelines'
                    src='/images/orangelines.png'
                    height='100px'
                    width='100px'
                    objectFit='contain'
                  />
                </div>
              </h3>

              <p className='mt-5 text-justify text-[17px] text-[#333333]'>
                The medium of instruction at IFA is English, and the curriculum
                we follow is in accordance with ICSE/CIE(IGCSE) Board. However,
                the real crux of education at IFA lies in how we choose to bring
                this universe of knowledge to our students. IFA has an
                enviornment that encourages and enlightens the spirit. It
                generates hunger to explore and discover, a desire to
                experiment, debate and through interactions encourage
                independent thought.Spacious Classrooms equipped with modern and
                scientific facilities. Furniture, Toys, Games & Colour Scheme of
                Classroom walls have been designed to suit the needs and age
                group of students.
              </p>

              <div onClick={() => router.push('/contact')} className='mt-5'>
                <AnimatedButton title='Get in touch' size='normal' />
              </div>
            </div>
            <div className='flex w-full justify-center self-stretch  '>
              <Image
                alt='about'
                src='/images/aboutImage.png'
                height='500px'
                width='500px'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='w-full bg-about_img pb-20 '>
          <div className='mt-[-30px] flex justify-end'>
            <div className='mt-[-45px]'>
              <Image
                alt='dotPalne'
                src='/images/dot-plan-1.svg'
                height='200px'
                width='200px'
                objectFit='contain'
              />
            </div>
          </div>

          <div className=' grid w-full lg:grid-cols-2'>
            <div className='mr-40 flex justify-center md:mr-0 lg:ml-10  lg:mt-[-80px] xl:ml-40'>
              <div className=' w-10  gap-y-5 md:mx-16 md:grid md:w-full '>
                <div className='mr-[80px] justify-end space-y-4 md:mr-[200px] md:flex md:space-y-0 md:space-x-3'>
                  <div
                    onClick={() => {
                      setShowModal(true);
                      setImage('/images/academy-1.jpg');
                    }}
                  >
                    <div className=' w-[200px] opacity-90  lg:w-[16rem]'>
                      <Image
                        alt='academy'
                        src='/images/academy-1.jpg'
                        height='700px'
                        width='500px'
                        className='rounded'
                      />
                    </div>
                    <div className=' absolute ml-[80px] mt-[-160px] rounded-full bg-[#092f50] p-1 lg:mt-[-190px] lg:ml-[110px]'>
                      <IoMdAdd className='text-3xl text-gray-300' />
                    </div>
                  </div>
                  <div
                    className='w-20'
                    onClick={() => {
                      setShowModal(true);
                      setImage('/images/img-1.jpg');
                    }}
                  >
                    <div className=' w-[200px] opacity-90 md:pt-0 lg:w-[13.5rem] lg:pt-[47px]'>
                      {' '}
                      <Image
                        alt=''
                        src='/images/img-1.jpg'
                        height='650px'
                        width='450px'
                        className='rounded'
                      />
                    </div>
                    <div className=' absolute ml-[80px] mt-[-160px] rounded-full bg-[#092f50] p-1 lg:mt-[-180px] lg:ml-[90px]'>
                      <IoMdAdd className='text-3xl text-gray-300' />
                    </div>
                  </div>
                </div>
                <div className='mr-[80px] justify-end  space-y-4 md:flex md:space-y-0 md:space-x-3 xl:mr-[130px]'>
                  <div
                    onClick={() => {
                      setShowModal(true);
                      setImage('/images/campus-1.jpg');
                    }}
                  >
                    <div className='w-[200px] opacity-90 lg:w-[13.5rem]'>
                      <Image
                        alt='campus'
                        src='/images/campus-1.jpg'
                        height='650px'
                        width='450px'
                        className='rounded'
                      />
                    </div>
                    <div className=' absolute ml-[80px] mt-[-160px] rounded-full bg-[#092f50] p-1 lg:mt-[-180px] lg:ml-[90px]'>
                      <IoMdAdd className='text-3xl text-gray-300' />
                    </div>
                  </div>
                  <div
                    className='relative'
                    onClick={() => {
                      setShowModal(true);
                      setImage('/images/group-img1.jpg');
                    }}
                  >
                    <div className='w-[200px] rounded-full lg:w-[16rem]'>
                      {' '}
                      <Image
                        alt='group'
                        src='/images/group-img1.jpg'
                        height='700px'
                        width='500px'
                        className='rounded'
                      />
                      <div className=' absolute ml-[80px] mt-[-160px] rounded-full bg-[#092f50] p-1 lg:mt-[-200px] lg:ml-[110px]'>
                        <IoMdAdd className='text-3xl text-gray-300' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-[18rem] px-8  md:mx-8 md:w-full xl:pr-60 2xl:pr-[430px]'>
                <div className={styles.fontStyle}>
                  <div className='mt-4  text-2xl font-semibold md:text-4xl'>
                    OUR GREAT{' '}
                    <span className='text-[#fa6210]'>VISION & MISSION</span>
                  </div>
                </div>
                <div className='mt-6  text-lg leading-9 text-gray-500'>
                  The vision and mission of IFA is to continue the child
                  centered pedagogy that has revolutionized the approach to
                  education. As parents desire the best for their child, we
                  provide access to the best in education by following a
                  worldwide curriculum with modules ideal for children of
                  various ages and abilities.
                </div>
                <div className='mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 '>
                  <div className='flex space-x-4'>
                    <div className='mt-1 w-24'>
                      <Image
                        alt='education'
                        src='/images/Book.png'
                        height='100%'
                        width='100%'
                        className='rounded'
                      />
                    </div>
                    <div>
                      <div className='text-xl text-[#002f56]'>Education</div>
                      <div>
                        To follow a student centered pedagogy for brilliant
                        results.
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='mt-1  w-24'>
                      <Image
                        alt='Resarch'
                        src='/images/management.png'
                        height='100%'
                        width='100%'
                        className='rounded'
                      />
                    </div>
                    <div>
                      <div className='text-xl text-[#002f56]'>Resarch</div>
                      <div>
                        Building a community of young minds that are the future
                        of this world.
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='mt-1 w-24'>
                      <Image
                        alt='Community'
                        src='/images/comunity.png'
                        height='100%'
                        width='100%'
                        className='rounded'
                      />
                    </div>
                    <div>
                      <div className='text-xl text-[#002f56]'>Community</div>
                      <div>
                        Building a community of young minds that are the future
                        of this world.
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='mt-1 w-20'>
                      <Image
                        alt='Management'
                        src='/images/resarch.png'
                        height='100%'
                        width='100%'
                        className='rounded'
                      />
                    </div>
                    <div>
                      <div className='text-xl text-[#002f56]'>Management</div>
                      <div>
                        World class management system for a better future of
                        your child.
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => router.push('/contact')} className='mt-10'>
                  <AnimatedButton title='Get in touch' size='normal' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#f7f7f7]'>
          <div className='mx-8 flex justify-center '>
            <div className='text-4xl font-semibold'>
              Our Distinctive <span className='text-[#fa6210]'> Features</span>
            </div>
            <div className='  absolute ml-[-100px] mt-16 md:ml-[40px] md:mt-2  lg:ml-[270px]'>
              <Image
                alt='orangelines'
                src='/images/orangelines.png'
                height='100px'
                width='100px'
                objectFit='contain'
              />
            </div>
          </div>
          <div className='   '>
            <div className='mt-6 grid md:mt-12 lg:grid-cols-2 xl:mt-28'>
              <div className='mx-10 md:mr-10 md:ml-20 xl:ml-60 2xl:ml-[300px]'>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    School
                    <span className='text-[#fa6210]'>
                      &nbsp; Infrastructure
                    </span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    Spacious Classrooms equipped with modern and scientific
                    facilities. Furniture, Toys, Games & Colour Scheme of
                    Classroom walls have been designed to suit the needs and age
                    group of students.
                  </li>
                  <li>Airy class rooms with hi-tech audio visual aids.</li>
                  <li>
                    Comfortable, safe and secure buses to carry students between
                    the academy and their homes.
                  </li>
                  <li>
                    Soft toys of educational value for Kindergarten children.
                  </li>
                  <li>
                    A huge library comprising of more than 4000 books and
                    magazines for different age groups.
                  </li>
                  <li>
                    Well furnished computer lab ensuring computer aided learning
                    and Wi-Fi facility.
                  </li>
                  <li>
                    Big play grounds spread over an area of more than ten acres.
                  </li>
                  <li>
                    Well planned laboratories (Science,Maths and Languages).
                  </li>
                  <li>Arrangement of pure and cool drinking water.</li>
                  <li>Gurdwara Sahib on the campus.</li>
                </ul>
              </div>
              <div className='flex justify-center md:mt-8 2xl:ml-[-290px]'>
                <div className='mt-4 h-[16rem] w-[16rem] rounded-3xl bg-[#fa6210] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='DistinctiveFeactures'
                      src='/images/DistinctiveFeactures.jpg'
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='  pb-10 '>
            <div className=' grid lg:grid-cols-2 xl:mt-16 '>
              <div className='flex justify-center lg:mt-10  2xl:ml-[140px]'>
                <div className='mt-8 h-[16rem] w-[16rem] rounded-3xl bg-[#fa6210] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='OurStaff'
                      src='/images/OurStaff.jpg'
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
              <div className='ml-10 mt-8 md:ml-20 md:mr-20 lg:ml-28 2xl:mr-80 '>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    Our
                    <span className='text-[#fa6210]'>&nbsp; Staff</span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    Highly qualified, trained, experienced and motivated staff
                    members who are adept Integrators of Modernity with
                    Morality, constitute the strong pillars of the academic
                    edifice of IFA.
                  </li>
                  <li className='mt-4'>
                    Occasional training of staff about the new western teaching
                    techniques by Foreign Educational Associates..
                  </li>
                  <li className='mt-4'>
                    Constant endeavour to make learning enjoyable.
                  </li>
                  <li className='mt-4'>
                    Motivating and encouraging the students to excel in academic
                    and extra-curricular activities.
                  </li>
                  <li className='mt-4'>
                    (In-House Training) conferences and seminars for the staff.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='  pb-20 '>
            <div className='mt-6 grid md:mt-12 lg:grid-cols-2 xl:mt-12'>
              <div className='mx-10 md:mr-10 md:ml-20 xl:ml-60 2xl:ml-[300px]'>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    Teaching Learning
                    <span className='text-[#fa6210]'>
                      &nbsp; Strategies
                    </span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    No bag no homework for Kindergarten students. Creative
                    assignments, reading, conducting experiments, narrating real
                    life incidents for other students.
                  </li>
                  <li className='mt-2'>
                    Clarification of concepts through Experimentation-Practical
                    lessons for better comprehension.
                  </li>
                  <li className='mt-2'>
                    Teaching by audio visual aids and techniques ------Smart
                    Class programme.
                  </li>
                  <li className='mt-2'>
                    Continuous Assessment of the students.
                  </li>
                  <li className='mt-2'>Focus on learner centered methods.</li>
                  <li className='mt-2'>Educational tours and excursions.</li>
                  <li className='mt-2'>Ideal teacher-taught ratio.</li>
                  <li className='mt-2'>Individual attention.</li>
                </ul>
              </div>
              <div className='flex justify-center md:mt-8 2xl:ml-[-290px]'>
                <div className='mt-4 h-[16rem] w-[16rem] rounded-3xl bg-[#01305a] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='LearningStrategies'
                      src='/images/labo.png'
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='  pb-10 '>
            <div className=' grid lg:grid-cols-2 xl:mt-16'>
              <div className='flex justify-center lg:mt-10  2xl:ml-[140px]'>
                <div className='mt-8 h-[16rem] w-[16rem] rounded-3xl bg-[#fa6210] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='OurStaff'
                      src={Hostel}
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
              <div className='ml-10 mt-8 md:ml-20 md:mr-20 lg:ml-28 2xl:mr-80 '>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    Hostel and Housing
                    <span className='text-[#fa6210]'>
                      &nbsp; Facilities
                    </span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    Our school provides hostel facilities for both girls and
                    boys. Students can live there comfortably with all the basic
                    facilities. Along with that, students can rely on our mess
                    facility. They provide nutritious food at a reasonable
                    price.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='  pb-20 '>
            <div className='mt-6 grid md:mt-12 lg:grid-cols-2 xl:mt-12'>
              <div className='mx-10 md:mr-10 md:ml-20 xl:ml-60 2xl:ml-[300px]'>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    Entertainment and Extracurricular
                    <span className='text-[#fa6210]'>
                      &nbsp; Facilities
                    </span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    With boarding schools, students can get along with a variety
                    of extracurricular activities. They can go for it after
                    school. We offer different sports activities; they can
                    enroll themselves according to their choice. Thus, students
                    can spend their time in a productive way rather than wasting
                    it on computer screens.
                  </li>
                </ul>
              </div>
              <div className='flex justify-center md:mt-8 2xl:ml-[-290px]'>
                <div className='mt-4 h-[16rem] w-[16rem] rounded-3xl bg-[#01305a] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='LearningStrategies'
                      src={Entertainment}
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='  pb-10 '>
            <div className=' grid lg:grid-cols-2 xl:mt-16'>
              <div className='flex justify-center lg:mt-10  2xl:ml-[140px]'>
                <div className='mt-8 h-[16rem] w-[16rem] rounded-3xl bg-[#fa6210] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='OurStaff'
                      src={Medical}
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
              <div className='ml-10 mt-8 md:ml-20 md:mr-20 lg:ml-28 2xl:mr-80 '>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    24*7 Medical
                    <span className='text-[#fa6210]'>&nbsp; Facility</span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    We offer a secure environment to our students so they can
                    focus on their studies well. Students live on their own, and
                    they need guidance with every step. There are caretakers and
                    wardens to look after the students. In case of any
                    emergency, we also provide medical care for the safety of
                    our students.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='  pb-20 '>
            <div className='mt-6 grid md:mt-12 lg:grid-cols-2 xl:mt-12'>
              <div className='mx-10 md:mr-10 md:ml-20 xl:ml-60 2xl:ml-[300px]'>
                <div className={styles.fontStyle}>
                  <p className='ml-[-20px] text-3xl text-[#01305a]'>
                    Cutting-edge Technology In
                    <span className='text-[#fa6210]'>
                      &nbsp; Classrooms
                    </span>{' '}
                  </p>
                </div>
                <ul className='mt-5 list-disc text-lg'>
                  <li>
                    Classrooms are well equipped with the latest technology,
                    such as electronic boards, presenters, speakers, computers,
                    etc. In addition, they can also get individual guidance from
                    the faculties and the teachers. Thus, students can learn in
                    a better way.
                  </li>
                </ul>
              </div>
              <div className='flex justify-center md:mt-8 2xl:ml-[-290px]'>
                <div className='mt-4 h-[16rem] w-[16rem] rounded-3xl bg-[#01305a] md:h-[30.5rem] md:w-[31rem] lg:mt-20  lg:h-[25rem] lg:w-[25rem] xl:mt-5  xl:h-[30.5rem] xl:w-[31rem]'>
                  <div className='ml-2 md:mt-[-10px] lg:mt-[-2px] xl:mt-[-10px]'>
                    <Image
                      alt='LearningStrategies'
                      src={CuttingEdge}
                      height='500'
                      width='500'
                      className='rounded-3xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='w-full bg-[#ffffff] pb-20 '>
          <div className='mt-[-30px] flex justify-end'>
            <div className='mt-[-45px]'>
              <Image
                alt='dotPlan'
                src='/images/dot-plan-1.svg'
                height='200px'
                width='200px'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <div className='mx-8 flex justify-center '>
          <div className='mt-[-150px] text-4xl font-semibold md:mt-[-200px]'>
            School <span className='text-[#fa6210]'> Governing Council</span>
          </div>
          <div className=' ml-[-100px] mt-[-105px] hidden md:absolute md:ml-[40px] md:mt-[-190px]  lg:ml-[270px]'>
            <Image
              alt='orangelines'
              src='/images/orangelines.png'
              height='100px'
              width='100px'
              objectFit='contain'
            />
          </div>
        </div>
        <div className='md:mt-[-60px] lg:ml-20  lg:flex xl:ml-[220px] 2xl:ml-[400px]'>
          <div>
            <div className='mt-6 flex justify-center md:mt-0  '>
              <div className=' h-[18rem] w-[15.5rem] rounded-2xl bg-[#fa6210]     '>
                <div className='ml-[6px]'>
                  <Image
                    alt='Chairman'
                    src='/images/Chairman.jpg'
                    height='580'
                    width='500'
                    className='rounded-2xl'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='ml-10 mt-4 md:ml-[100px] lg:ml-[40px] '>
              <div className='w-[120px] border-b-[3px] border-[#fa6210] md:ml-[230px] lg:ml-6'>
                <div className={styles.fontStyle}>
                  <div className='text-2xl font-semibold text-[#fa6210]'>
                    Chairman
                  </div>
                </div>
              </div>
              <div className='mx-6 text-[17.5px] text-gray-600 md:mr-[150px] 2xl:mr-[370px]'>
                <div className='mt-4 md:mt-6'>
                  {/* Dear Parents, The best gift that parents can give their
                  children is a high-quality education. To assume positions of
                  leadership and address the many challenges that our world
                  faces, the next generation will require exceptional academic
                  and intellectual creativity. Given this, it is critical that
                  the leading schools of the 21st century provide a truly
                  holistic international education that prepares students for
                  the responsibilities they will face in their lives. */}
                  We must view young people as candles to be lit; every moment
                  is a stepping stone for the IFAians. Our purpose as educators
                  is to encourage intellectual curiosity, independent thought
                  and effective learning habits. From an early age, we encourage
                  pupils to be dynamically intellectual, culturally creative and
                  develop independence. So by the time they leave IFA, they are
                  not only well prepared for the expected but can also tackle
                  the unknowns. We at IFA always strive for creating a
                  supportive and inclusive community whilst also celebrating
                  individual success.
                </div>
                <div className='mt-5'>
                  {/* IFA's curriculum is designed to meet the needs of today's
                  learners and is sensitive to various learning styles. A
                  variety of academic and co-curricular activities allow all
                  students to explore different aspects of their personalities.
                  Along with this our curriculum is also focused to make the
                  children aware about the history of our great motherland-
                  Punjab and to keep them connected with the roots. Keeping this
                  motive in view we always try to create an educational
                  experience that will influence the all-round development of
                  students and uphold our commitment towards nation building. */}
                  “Education is not preparation for life, education is life
                  itself” - stated John Dewey. IFA concurs the magnitude of this
                  statement and strives to impact the lives of the students
                  under its fold by constantly striving to provide a conducive
                  environment to create a balance in the academic, emotional,
                  spiritual, creative and physical development of students. We
                  believe that in today’s world where change is constant and
                  fast paced, we as educators, adapt to continuous, innovative
                  and improvised models and trends in education research. This
                  helped us to deliver quality of highest standards and provide
                  a firm foundation for the holistic development, over 15 years
                  of journey of excellence and constant endeavour to transform
                  and shape the lives of the students at IFA, not singularly in
                  the pursuit of personal excellence but coupled with a social
                  conscience.
                </div>
                <div className='mt-5'>
                  {/* I also strongly stress on the character building of the
                  students and parents involvement for this aim I am committed
                  to inculcate in all its students, strong ethical values of
                  integrity, politeness, kindness and respect for elders so that
                  they are able to build such a society having traits of service
                  to mankind and high thinking. At IFA, we believe that children
                  should not always be taught how to do things; rather, they
                  should be encouraged to explore, discover, and learn through
                  reflection, with the help of caring teachers. We are committed
                  to exceeding our parent community expectations and setting an
                  unrivaled standard in the field of quality education.
                  Therefore, we focus on the overall development of the students
                  and impart a qualitative education that moulds them and
                  provides a launch pad to seek a brilliant and bright future. */}
                  IFA knows no bounds in knowledge and realises the margins
                  fades forever and ever as it moves. But within its boundaries,
                  the disseminated knowledge embodies the spirit of inquiry,
                  research and quality. Our search is incessant, our service is
                  ceaseless and our perseverance untiring.
                </div>
                <div className='mt-5'>
                  I conclude my message with an invitation to visit the
                  International Fateh Academy campus, which is nestled in the
                  midst of lush greenery and where teaching and learning are
                  simple, enjoyable, and, most importantly, accessible to
                  students.
                </div>
                <div className='mt-5'>
                  Warm Regards, S. Jagbir Singh Chairman
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-20 flex-row-reverse  lg:ml-20 lg:flex xl:ml-[220px] 2xl:ml-[400px]'>
          <div>
            <div className='mt-6 flex  justify-center  md:mt-8 lg:mr-40 '>
              <div className=' h-[18rem] w-[15.5rem] rounded-2xl bg-[#01305a]     '>
                <div className='ml-[6px]'>
                  <Image
                    alt='ViceChairperson'
                    src='/images/ViceChairperson.jpg'
                    height='580'
                    width='500'
                    className='rounded-2xl'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='pb-20 xl:pb-0'>
            <div className=' '>
              <div className='ml-10 mt-4 w-[200px] border-b-[3px] border-[#fa6210] md:ml-[290px] lg:ml-6'>
                <div className={styles.fontStyle}>
                  <div className='text-2xl font-semibold text-[#fa6210]'>
                    <span className='text-black'>Vice</span> Chairperson
                  </div>
                </div>
              </div>
              <div className='mx-10 text-[17.5px] text-gray-600 md:mx-28 lg:mx-5'>
                <div className='mt-4 md:mt-6'>
                  {/* Dear Parents, If you are searching for best school for all
                  round development of your child, then we ensure that
                  International Fateh Academy is where your search will end. The
                  school has grown leaps and bounds and within few years the
                  school has made niche in education arena. Woman is the creator
                  of the universe. Women play a very important role in human
                  progress and hold an important place in the society. The main
                  responsibility of a woman is to protest mankind and the human
                  race. They should be strictly attached to their respective
                  religion as being a sober woman comes with some large benefits
                  that cannot be seen in the modern era. */}
                  IFA School has always been dedicated to providing the best
                  education and opportunities for the students, and I am
                  particularly proud of the efforts to empower and inspire young
                  girls also.
                </div>
                <div className='mt-5'>
                  {/* If woman herself would not attach to moral values and the
                  religion our future will be in chaos. Therefore, I also
                  strongly stress on the character building of the students and
                  parents involvement for this aim I am committed to inculcate
                  in all its students, strong ethical values of integrity,
                  politeness, kindness and respect for elders so that they are
                  able to build such a society having traits of service to
                  mankind and high thinking. Our USPs are an enviable student
                  teacher ratio, and the deft blend of academics, aided by the
                  most modern interactive props at all levels, with sports,
                  physical activity and a selection of the performing arts. We
                  have a determined focus on sports and train children with the
                  Sikh Martial Arts called Gatka. */}
                  Today's girls are tomorrow's leaders, and it is the
                  responsibility of the school to ensure that they have the
                  skills, knowledge, and confidence to succeed in all spheres of
                  life. At IFA, we are committed to providing a supportive and
                  inclusive environment that encourages girls to reach their
                  full potential. IFA girls are not only making tremendous
                  progress in education but doing extremely well in all sports
                  activities also and this is a testament to their hard work,
                  dedication, and passion.
                </div>
                <div className='mt-5'>
                  {/* Our students have produced top results in District and Zonal
                  tournaments in the field of sports and brought laurels to the
                  Academy. We strive to empower our learners with the skills
                  required to make sense of the diversities and the potentially
                  confusing complexities of the world they step into. The
                  division between global and local has become more blurred, at
                  several levels. The IFA team with its teacher- guided
                  technology, is equipped to foster today’s widening
                  intellectual pursuits, blending the interactions with an
                  awareness of the phenomena called Learning Beyond the
                  Classrooms, preparing today’s students for tomorrow’s world. */}
                  Participating in sports helps to build character, confidence,
                  and teamwork skills. They are contributing towards the
                  security of the nation by participating in NCC. IFA has
                  produced wonderful results in various sports such as hockey,
                  fencing, Gatka, athletics, and basketball, and our girls are
                  equally participating and contributing to these achievements.
                </div>
                <div className='mt-5'>
                  In conclusion, I would like to express my gratitude to all the
                  parents and students who have supported us in the efforts to
                  empower young girls. Together, we are building a brighter
                  future for the community and for future generations.
                </div>
                <div className='mt-5'>
                  Warm Regards, Ravinder Kaur Vice Chairperson
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[-60px]  hidden justify-between xl:flex'>
          <div>
            {/* <Image
              alt='dotPlan'
              src='/images/dot-plan-1.svg'
              height='250px'
              width='250px'
              objectFit='contain'
            /> */}
          </div>
        </div>
      </div>
      <div className='bg-[#f7f7f7]'>
        <div className='mx-8 flex justify-center py-16 '>
          <div className=' text-4xl  '>
            <div className={styles.fontStyle}>
              Certifi<span className='text-[#fa6210]'>cates</span>
            </div>
          </div>
          <div className='hidden md:flex'>
            <div className=' absolute ml-[-100px] mt-2'>
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

        <div className='flex justify-center'>
          <div className='  grid gap-x-10 gap-y-10 pb-20 md:grid-cols-2  lg:mx-10 lg:grid-cols-4'>
            <div
              onClick={() => {
                setShowModal1(true);
                setPdf(
                  'https://ifa-appplication.s3.ap-south-1.amazonaws.com/ifa/jobs/fire-9ac945d1-da19-4326-bf72-ecffed64e9df.pdf'
                );
              }}
              className='h-80 w-60 cursor-pointer rounded-lg  bg-white shadow-md'
            >
              <div className='group '>
                <div className=' absolute z-40 ml-[90px] mt-[80px]  h-16 w-16 rounded-full bg-[#0b243b] text-4xl  text-[#fa6210] opacity-0 duration-500 ease-in group-hover:opacity-100   '>
                  <div className='mt-[11px] grid place-content-center '>
                    <FaFilePdf className='' />
                  </div>
                </div>
                <div className='group-hover:opacity-30 '>
                  <Image
                    alt='certi'
                    src='/images/certi.jpg'
                    height='250px'
                    width='250px'
                    objectFit='contain'
                  />
                </div>
              </div>
              <div className='flex  justify-center py-2'>
                <div>Fire Safety Certificate</div>
              </div>
            </div>
            <div
              onClick={() => {
                setShowModal1(true);
                setPdf(
                  'https://ifa-appplication.s3.ap-south-1.amazonaws.com/ifa/jobs/water-d90abf50-1fe7-430f-8b0b-cecac6e71852.pdf'
                );
              }}
            >
              <div className='h-80 w-60 cursor-pointer rounded-lg bg-white shadow-md'>
                <div className='group '>
                  <div className=' absolute z-40 ml-[90px] mt-[80px]  h-16 w-16 rounded-full bg-[#0b243b] text-4xl  text-[#fa6210] opacity-0 duration-500 ease-in group-hover:opacity-100   '>
                    <div className='mt-[11px] grid place-content-center '>
                      <FaFilePdf className='' />
                    </div>
                  </div>
                  <div className='group-hover:opacity-30 '>
                    <Image
                      alt='certi3'
                      src='/images/water.jpg'
                      height='250px'
                      width='250px'
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className='flex justify-center py-2'>
                  <div className='px-2 text-center'>
                    View No Objection Certificate for Sanitation and Water
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setShowModal1(true);
                setPdf(
                  'https://ifa-appplication.s3.ap-south-1.amazonaws.com/ifa/jobs/Authorization%20Certificate-5b5a6000-1c56-4566-8132-061510de2396.pdf'
                );
              }}
            >
              <div className='h-80 w-60 cursor-pointer rounded-lg bg-white shadow-md'>
                <div className='group '>
                  <div className=' absolute z-40 ml-[90px] mt-[80px]  h-16 w-16 rounded-full bg-[#0b243b] text-4xl  text-[#fa6210] opacity-0 duration-500 ease-in group-hover:opacity-100   '>
                    <div className='mt-[11px] grid place-content-center '>
                      <FaFilePdf className='' />
                    </div>
                  </div>
                  <div className='group-hover:opacity-30 '>
                    <Image
                      alt='certi2'
                      src='/images/authorization.jpeg'
                      height='250px'
                      width='250px'
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className='flex justify-center py-2'>
                  <div className='px-4 text-center'>
                    View School Building Safety Certificate
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setShowModal1(true);
                setPdf(
                  'https://ifa-appplication.s3.ap-south-1.amazonaws.com/ifa/jobs/affiliation%20certificate-bf9828f4-99c2-4bac-9b7c-fa8149a9de50.pdf'
                );
              }}
            >
              <div className='h-80 w-60 cursor-pointer rounded-lg bg-white shadow-md'>
                <div className='group '>
                  <div className=' absolute z-40 ml-[90px] mt-[80px]  h-16 w-16 rounded-full bg-[#0b243b] text-4xl  text-[#fa6210] opacity-0 duration-500 ease-in group-hover:opacity-100   '>
                    <div className='mt-[11px] grid place-content-center '>
                      <FaFilePdf className='' />
                    </div>
                  </div>
                  <div className='group-hover:opacity-30 '>
                    <Image
                      alt='certi4'
                      src='/images/certi4.jpeg'
                      height='250px'
                      width='250px'
                      objectFit='contain'
                    />
                  </div>
                </div>
                <div className='flex justify-center py-2'>
                  <div className='px-2 text-center'>
                    View Certificate of Affiliation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className='fixed inset-0 z-50  flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div
              onClick={() => setShowModal(false)}
              className='absolute h-screen w-screen bg-transparent'
            ></div>

            <div className='relative  my-6 mx-auto w-auto max-w-3xl md:mt-36 '>
              <div className='relative flex w-full flex-col rounded-lg border-0 shadow-lg outline-none focus:outline-none'>
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
                        className=' mt-[100px] ml-20 cursor-pointer text-[35px] text-white '
                      />
                    </div>
                  </div>
                  <div className='relative  my-6 mx-auto w-auto max-w-3xl md:mt-36 '>
                    <div className='relative flex w-full flex-col rounded-lg border-0 shadow-lg outline-none focus:outline-none'>
                      <div className='relative  flex-auto '>
                        <div className=' bg-black'>
                          <Image
                            alt='campus'
                            src={image}
                            height='600px'
                            width='500px'
                            objectFit='cover'
                            className='z-40 rounded'
                          />
                        </div>
                      </div>

                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='fixed inset-0 z-40 bg-black opacity-70'></div>
        </>
      ) : null}
      {showModal1 ? (
        <>
          <div className='fixed inset-0 z-50  flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div
              onClick={() => setShowModal1(false)}
              className='absolute h-screen w-screen bg-transparent'
            >
              <div
                onClick={() => setShowModal1(false)}
                className='flex  justify-end'
              >
                <div
                  onClick={() => setShowModal1(false)}
                  className='z-10000  grid h-10  w-10 cursor-pointer place-items-center rounded-full  pr-36  text-white md:mt-40   '
                >
                  <IoClose
                    onClick={() => setShowModal1(false)}
                    className=' z-1 cursor-pointer  text-[35px] '
                  />
                </div>
              </div>
            </div>

            <div className='relative  my-6 mx-auto w-auto max-w-3xl md:mt-36 '>
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                <div className='relative  flex-auto '>
                  <div className=' '>
                    <iframe src={pdf} width='800' height='600' />
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-90'></div>
        </>
      ) : null}
    </div>
  );
}

export default About;
