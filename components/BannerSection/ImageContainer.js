'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';

import MouseParallaxComponent from './parallax';

const ImageContainer = () => {
  return (
    <div className=' w-full  min-h-full'>
      <>
        <div
          className='h-[700px]   min-h-full'
          style={{
            height: '100%',
            width: '100%',
            // background: '#4b4bae',
            color: '#fff',
            overflow: 'hidden',
          }}>
          <div className=' min-h-full relative'>
            <MouseParallaxComponent />
          </div>
        </div>
      </>
    </div>
  );
};

export default ImageContainer;
