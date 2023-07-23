import Image from 'next/image';
import React, { useState } from 'react';

function ImageMagnifier({
  src,
  width,
  height,

  zoomLevel = 1.5,
}: {
  src: string;
  width?: string;
  height?: string;

  zoomLevel?: number;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: 'relative',
        height: height,
        width: width,
        overflow: 'hidden',
      }}
    >
      <div className='relative h-[350px] md:h-[550px]  '>
        <Image
          src={src}
          className='rounded-lg '
          objectFit='contain'
          layout='fill'
          priority={true}
          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
          }}
          alt='img'
        />
      </div>

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',

          pointerEvents: 'none',

          height: `100%`,
          width: `100%`,

          top: `${y - 600 / 2}px`,
          left: `${x - 600 / 2}px`,
          opacity: '1',

          backgroundColor: 'white',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',

          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          backgroundPositionX: `${-x * zoomLevel + 600 / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + 600 / 2}px`,
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier;
