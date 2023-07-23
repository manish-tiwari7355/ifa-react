import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './FontStyle.module.css';
import Entertainment from '../../assets/img/entertainment.jpg';
import Hostel from '../../assets/img/hostel.jpg';
import Medical from '../../assets/img/medical.jpg';

import AboutCard from '@/components/aboutCard/aboutCard';
import AnimatedButton from '@/components/animatedButton';
import PageContainer from '@/components/pageContainer';
function Facilities() {
  const router = useRouter();
  return (
    <div>
      <PageContainer title='Our Facilities' />
      <div className='mx-8 flex justify-center pt-16 '>
        <div className=' text-4xl  '>
          <div className={styles.fontStyle}>
            Our<span className='text-[#fa6210]'> Facilities</span>
          </div>
        </div>
        <div className='hidden md:flex'>
          <div className=' absolute mt-[35px] ml-[-100px]'>
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
      <div className={styles.fontStyle}>
        <div className='mx-8 mt-10 flex justify-center md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-[500px]'>
          <div className='text-center text-lg leading-8 text-gray-500'>
            IFA provides the best facilities and an active environment for your
            children to have the best learning experience possible and
            constantly progress toward success.
          </div>
        </div>
      </div>
      <div className='mt-10 mb-28 grid gap-x-5 gap-y-10  xl:grid-cols-2 2xl:mx-60'>
        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  md:flex   md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-l-lg '>
                <Image
                  alt='sports'
                  src='/images/sports-1.jpg'
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-l-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-r-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-5 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  Sports Opportunities
                </div>
              </div>
              <div
                className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
              >
                IFA has a proper arrangement of professional coaches for
                Skating, Fencing, Football, Volleyball, BasketBall, Hockey,
                Badminton, Kho Kho and traditional sports such as Horse Riding,
                Gatka etc.
              </div>
            </div>
          </div>
        </div>
        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  flex-row-reverse  md:flex md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-r-lg '>
                <Image
                  alt='sports'
                  src='/images/sports-1.jpg'
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-r-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-l-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-5 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  Creative Activities
                </div>
              </div>
              <div
                className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
              >
                Activities such as painting, art and craft, classical and
                instrumental music are regularly organized for students to
                explore their creative sides.
              </div>
            </div>
          </div>
        </div>
        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  md:flex   md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-l-lg '>
                <Image
                  alt='sports'
                  src='/images/sports-1.jpg'
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-l-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-r-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-5 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  Athletic Meet
                </div>
              </div>
              <div className=''>
                <div
                  className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
                >
                  Every year, the ICSE Inter Zonal Athletic Meet is held at IFA,
                  with over 300 kids from 14 ICSE affiliated schools from the
                  Amritsar and Tarn-Taran districts converging on the grounds.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  flex-row-reverse  md:flex md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-r-lg '>
                <Image
                  alt='sports'
                  src='/images/creative.jpg'
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-r-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-l-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-5 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  Other rejuvenating activities
                </div>
              </div>
              <div
                className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
              >
                Our rejuvenating activities include regular excursions to
                historic monuments and cultural heritage sites. We also have a
                dramatics club for children and organize field trips and
                picnics.
              </div>
            </div>
          </div>
        </div>
        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  md:flex   md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-l-lg '>
                <Image
                  alt='Hostel'
                  src={Hostel}
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-l-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-r-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-5 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  Hostel and Housing
                </div>
              </div>
              <div className=''>
                <div
                  className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
                >
                  Our school provides hostel facilities for both girls and boys.
                  Students can live there comfortably with all the basic
                  facilities. Along with that, students can rely on our mess
                  facility. They provide nutritious food at a reasonable price.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  flex-row-reverse  md:flex md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-r-lg '>
                <Image
                  alt='LearningStrategies'
                  src={Entertainment}
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-r-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-l-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-4 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  Entertainment and Extracurricular
                </div>
              </div>
              <div
                className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
              >
                With boarding schools, students can get along with a variety of
                extracurricular activities. They can go for it after school. We
                offer different sports activities; they can enroll themselves
                according to their choice. Thus, students can spend their time
                in a productive way rather than wasting it on computer screens.
              </div>
            </div>
          </div>
        </div>

        <div className='flex  justify-center md:ml-12 md:inline lg:ml-48 xl:ml-12 2xl:ml-0'>
          <div className='  md:flex   md:w-[650px]  '>
            <div className='flex   '>
              <div className='w-[200px] rounded-t-md bg-[#01305a] md:w-[200px] md:rounded-l-lg '>
                <Image
                  alt='Medical'
                  src={Medical}
                  height='500px'
                  width='500px'
                  className='rounded-t-md md:rounded-t-none md:rounded-l-lg'
                />
              </div>
            </div>
            <div className=' w-[200px] rounded-b-md bg-[#01305a] pb-5  text-white md:w-[500px] md:rounded-b-none md:rounded-r-lg  md:pb-0'>
              <div className={styles.fontStyle}>
                <div className='mx-5 text-center text-2xl md:mt-4 md:pl-5 md:text-left'>
                  24*7 Medical
                </div>
              </div>
              <div className=''>
                <div
                  className={`${styles.scroll} mx-5 mt-5  h-[100px] overflow-auto text-center md:ml-10 md:text-left lg:mx-10`}
                >
                  We offer a secure environment to our students so they can
                  focus on their studies well. Students live on their own, and
                  they need guidance with every step. There are caretakers and
                  wardens to look after the students. In case of any emergency,
                  we also provide medical care for the safety of our students.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-Facility_img  pb-20 text-white'>
        <div className='mx-8 flex justify-center pt-4 md:pt-16 '>
          <div className='text-2xl font-semibold  md:text-[32px] '>
            <div className={styles.fontStyle}>
              <div className='text-center'>Sports Facilities</div>
            </div>
            <div className='mt-4 text-center text-lg font-normal leading-8 md:text-xl lg:mx-20 xl:mx-60 2xl:mx-[480px]'>
              Our International values promote participation, and provide
              students with equal opportunity to develop their skills. At IFA we
              provide exposure to various sports that students have identified
              their interests and aptitudes for. Coaches value and recognize
              hard work, enthusiasm, and individual improvement.
              <div className='mt-2'>
                Some of the Sport Achievements that IFA has provided over the
                recent years are simply outstanding.
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 grid lg:grid-cols-2'>
          <div className='flex w-full justify-center lg:ml-10 xl:ml-28 2xl:ml-0'>
            <div className='grid gap-y-5 md:grid-cols-2  2xl:ml-96'>
              <div className='ml-16'>
                <div>
                  <Image
                    alt='globe'
                    src='/images/globe.png'
                    height='50px'
                    width='50px'
                    objectFit='contain'
                  />
                </div>
                <div className='text-lg font-semibold'>National Games</div>
                <div className='mt-2 mr-28 md:mr-10'>
                  4 National levels Athletes (19th National Games for ICSE & ISC
                  Schools 2015 in Ahmedabad, Gujarat).
                </div>
              </div>

              <div className=' ml-16 md:ml-0'>
                <div>
                  <Image
                    alt='hockey'
                    src='/images/hockey.png'
                    height='50px'
                    width='50px'
                    objectFit='contain'
                  />
                </div>
                <div className='text-lg font-semibold'>Hockey</div>
                <div className='mt-2 mr-20 lg:mr-10'>
                  5 National Hockey players representing at National Level
                  Hockey Tournament 2015 in Jalandhar, Punjab.
                </div>
              </div>

              <div className='ml-16'>
                <div>
                  <Image
                    alt='attack'
                    src='/images/attack.png'
                    height='50px'
                    width='50px'
                    objectFit='contain'
                  />
                </div>
                <div className='text-lg font-semibold'>Judokas</div>
                <div className='mt-2 mr-28 md:mr-10'>
                  4 Judokas (Judo players) and 6 Karateka (Karate Players) in
                  2015 signifying the importance of learning Defense Mechanisms.
                </div>
              </div>
              <div className=' ml-16 md:ml-0'>
                <div>
                  <Image
                    alt='Gatka'
                    src='/images/Gatka.png'
                    height='50px'
                    width='50px'
                    objectFit='contain'
                  />
                </div>
                <div className='text-lg font-semibold'>Gatka</div>
                <div className='mt-2 mr-20 lg:mr-10'>
                  20 new Gatka players every year since 2013 bring citations, as
                  IFA is an IGMA Center under Sports Authority of India.
                </div>
              </div>
            </div>
          </div>
          <div className=' flex justify-center  lg:mt-10 xl:mt-0'>
            <div className='mt-4 h-[300px] w-[300px] rounded-md bg-[#1563a8] p-4 md:h-[370px] md:w-[370px]'>
              <Image
                alt='Flag'
                src='/images/Flag.jpeg'
                height='370'
                width='370'
                className='rounded-md'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[100px] md:flex'>
        <div
          className='h-fit md:sticky '
          style={{
            top: 150,
            right: 50,
          }}
        >
          <div className=' flex justify-center md:justify-start 2xl:w-[800px] '>
            <div className='text-3xl  font-semibold md:ml-[120px] 2xl:ml-[450px]'>
              <div className={styles.fontStyle}>
                <div className='text-[#214a6e]'>Reasons to choose</div>
                <div className='text-[#fa6210]'>Fateh Academy</div>
                <div className='mt-5 w-[250px] text-lg font-normal'>
                  A certain set of tasks which are a part of the service are to
                  be kept in mind in order to accomplish the service in a better
                  way.
                </div>
              </div>
              <div onClick={() => router.push('/register')} className='mt-10'>
                <AnimatedButton title='Registration' size='normal' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-10 flex justify-center  md:mx-10 md:mt-0 lg:mx-28 lg:mt-0'>
          <div className=' grid gap-y-12 gap-x-20 px-5  lg:grid-cols-1 xl:grid-cols-2 '>
            <div>
              <AboutCard
                image='/images/computer.png'
                heading='Online Classes From Experts'
                color='#fa6210'
                desc=' IFA prioritizes the quality of learning of your child. As a salient  feature of our academy, we schedule online lectures from selected  industry experts to amplify your child’s learning experience.'
              />
            </div>
            <div>
              <AboutCard
                image='/images/scholarships.png'
                heading=' Fulbright & Free Scholarships'
                color='#01305a'
                desc=' We also reward our brilliant students with scholarships.'
              />
            </div>
            <div>
              <AboutCard
                image='/images/scholarships.png'
                heading='  Infrastructure'
                color='#01305a'
                desc='  Large classrooms with state-of-the-art scientific equipment.
                Furniture, toys, games, and the color scheme of classroom
                walls have all been tailored to the requirements and ages of
                the students.'
              />
            </div>
            <div>
              <AboutCard
                image='/images/computer.png'
                heading='    Our Staff'
                color='#fa6210'
                desc='   The solid pillars of IFA&#x27;s academic edifice are highly
                qualified, trained, experienced, and motivated staff members
                who are proficient Integrators of Modernity with Morality.'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='h-36' />
    </div>
  );
}

export default Facilities;
