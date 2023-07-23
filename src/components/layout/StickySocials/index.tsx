import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function StickySocials() {
  const socialMedia = [
    {
      src: '/images/facebook.png',
      href: 'https://www.facebook.com/FatehacademyASR',
    },
    {
      src: '/images/instagram.png',
      href: 'https://www.instagram.com/fatehacademy/',
    },
    {
      src: '/images/linkedin.png',
      href: 'https://www.linkedin.com/',
    },
    {
      src: '/images/whatsapp.png',
      href: 'https://www.whatsapp.com/',
    },
    {
      src: '/images/YouTubeIcon.png',
      href: 'https://www.youtube.com/@FatehAcademy',
    },
  ];

  return (
    <div className=' hidden md:flex'>
      <div className='  fixed bottom-20 ml-[80vw]  flex  w-20 flex-col items-center  justify-end md:ml-[90vw]  '>
        {socialMedia?.map((social) => (
          <Link key={social?.src} href={social?.href} passHref>
            <div className=' cursor-pointer rounded-lg '>
              <Image
                src={social?.src}
                alt=''
                objectFit='cover'
                height='35px'
                width='35px'
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StickySocials;
