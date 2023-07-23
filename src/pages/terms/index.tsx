import Image from 'next/image';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import styles from './FontStyle.module.css';

import PageContainer from '@/components/pageContainer';

function Terms() {
  return (
    <>
      <PageContainer title='Terms & Conditions' />
      <ToastContainer />
      <div className={styles.input1}>
        <div className='mx-auto max-w-[1300px]  p-4 py-6 md:bg-white'>
          <div className='flex justify-center '>
            <div className='rounded-md bg-contactBg px-6  pb-10 md:px-5 '>
              <div className={styles.fontStyle}>
                <div className=' my-10 text-2xl font-semibold text-[#fa6210] md:text-4xl'>
                  <div className=' flex justify-center '>
                    Terms & Conditions
                    <div className='mb-10 hidden md:flex'>
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
                </div>
                <div className='mt-2 text-gray-600 lg:text-md'>
                  Below are some of the terms and conditions of our school.
                  Students have to follow these rules. Those students who
                  neglect them won&#39;t be entertained.
                </div>
              </div>
              <div>
                <div className='my-6 text-xl font-semibold text-[#01305a] md:my-10 md:text-3xl'>
                  School Regulations
                </div>
                <ul className='mt-5 list-disc text-md'>
                  <li>
                    Every pupil has to maintain the prestige of the school
                    through his/her good etiquette and manner.
                  </li>
                  <li>
                    Students need to take good care of the school property. Do
                    not damage any furniture or scratch or spoil the desk. No
                    student should mess up the walls or damage
                    others&#39;belongings. Report the damage to the supervisor
                    or class teacher.
                  </li>
                  <li>Chewing of gum is not allowed in school facilities.</li>
                  <li>
                    Soft toys of educational value for Kindergarten children.
                  </li>
                  <li>
                    Students should not bring any kind of tabs, mobile phones,
                    portable games, toys, MP3 players, and other valuables to
                    school. In case you bring them for whatever reason, submit
                    them in the morning and collect them at the end of the
                    school day. The school won&#39;t be responsible for any
                    damage to student&#39;s belongings.
                  </li>
                  <li>
                    If a student&#39;s behavior is harmful to other students/ to
                    the school, the school has the right to expel the student.
                  </li>
                  <li>
                    Parents have to check out and sign the school diary on a
                    regular basis. Also, they must keep a check on the
                    teacher&#39;s remarks.
                  </li>
                  <li>
                    If the students lose any book from the library, they have to
                    pay off double the price.
                  </li>
                  <li>
                    Students should carry books according to their timetable.
                  </li>
                  <li>
                    Every student has to attend all the programs held in the
                    school. Students must attend the assembly; if not, they
                    should take permission from the in charge or supervisor.
                  </li>
                  <li>
                    Children can&#39;t make a call if they forget or leave their
                    belongings at home.
                  </li>
                  <li>
                    Students should not leave the school midway or after recess.
                    In case of any emergency, parents have to take permission
                    from the principal.
                  </li>
                </ul>
                <div className='my-6 text-xl font-semibold text-[#01305a] md:my-10 md:text-3xl'>
                  Uniform Regulations
                </div>
                <ul className='mt-5 list-disc text-md'>
                  <li>
                    Students should properly wear neat and clean uniforms.
                  </li>
                  <li>Girls must wear cycling shorts with skirts. </li>
                  <li>
                    Boys must wear underpants beneath their shorts or trousers.{' '}
                  </li>
                  <li>
                    Every student must come to school in their uniform. If they
                    are not in proper uniform, they will be sent back home.{' '}
                  </li>
                  <li>Boys should maintain a simple haircut. </li>
                  <li>Any jewelry, accessories, or makeup is not allowed.</li>
                  <li>Boys should not put on low waist trousers. </li>
                  <li>
                    Students need to polish their shoes regularly and their
                    socks should be clean as well.{' '}
                  </li>
                </ul>
                <div className='my-6 text-xl font-semibold text-[#01305a] md:my-10 md:text-3xl'>
                  Birthday Regulations
                </div>
                <ul className='mt-5 list-disc text-md'>
                  <li>Pupils might come in decent colored attire to school.</li>
                  <li>
                    Girls should make sure not to wear makeup or high heels.
                  </li>
                  <li>
                    Students are not permitted to arrange birthday parties in
                    the school.
                  </li>
                </ul>
                <div className='my-6 text-xl font-semibold text-[#01305a] md:my-10 md:text-3xl'>
                  Parents Teacher Meeting
                </div>
                <ul className='mt-5 list-disc text-md'>
                  <li>
                    The school conducts parent-teacher meetings to discuss the
                    progress of the child. Teachers can share if there is any
                    matter of concern with the student.
                  </li>
                  <li>
                    Students have to come to the meetings in proper school
                    uniforms.
                  </li>
                  <li>
                    Parents should meet all the teachers to know their
                    child&#39;s progress.
                  </li>
                </ul>
                <div className='my-6 text-xl font-semibold text-[#01305a] md:my-10 md:text-3xl'>
                  Copyright
                </div>
                <ul className='mt-5 list-disc text-md'>
                  <li>
                    The data provided on this website is subject to copyright.
                    Do not try to create any copyright of our data. All the
                    images and videos that we upload are not bound to any piece
                    of legal evidence as they&#39;re our personal data. It is
                    not appropriate to use it for other purposes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terms;
