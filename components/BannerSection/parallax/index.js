import { Carousel } from 'react-responsive-carousel';

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import Image from 'next/image';
import Hero1 from '@/assets/Hero1.png';
import visa from '@/assets/visa.png';
import paypal from '@/assets/paypal.png';
import mastercard from '@/assets/mastercard.png';
import like from '@/assets/like.png';

const MouseParallaxComponent = () => {
  return (
    <MouseParallaxContainer
      className='parallax  min-h-[430px]'
      containerStyles={{
        width: '100%',
        height: '100%',
        display: 'grid',
      }}
      resetOnLeave>
      <MouseParallaxChild
        factorX={0.4}
        factorY={0.3}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          // background: 'url("@/assets/Hero1.png") #a3a3ed',
          backgroundPositionX: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='md:absolute top-2 left-2 z-10'>
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.03}
          updateStyles={{
            marginBottom: '50px',

            width: 'auto',
          }}>
          <div className=' bg-white md:h-56 w-full md:w-56 rounded-3xl px-10 md:p-4 md:pb-12'>
            <div className='flex  flex-col justify-start items-start py-4 md:py-0 '>
              <Link
                href='/'
                className={cn(
                  buttonVariants({
                    variant: '',
                  }),
                  'text-black bg-transparent hover:text-white'
                )}>
                back
              </Link>
              <p className='text-black mx-4  '>Choose your card</p>
            </div>
            <Carousel
              autoPlay={true}
              interval={1000}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}>
              <div className='flex-1 h-full p-2'>
                <Image
                  className='h-full '
                  src={visa}
                  alt=''
                />
              </div>
              <div className='flex-1'>
                <Image
                  className='h-full'
                  src={paypal}
                  alt=''
                />
              </div>
              <div className='flex-1'>
                <Image
                  className='h-full'
                  src={mastercard}
                  alt=''
                />
              </div>
            </Carousel>
          </div>
        </MouseParallaxChild>
      </div>
      <div className='flex-1 md:absolute md:bottom-[50%] md:right-[50%] md:translate-x-[50%] md:translate-y-[50%] block '>
        <MouseParallaxChild
          factorX={0.02}
          factorY={0.03}
          updateStyles={{}}>
          <div className='relative  '>
            <div className='absolute h-[348px] w-[348px] bottom-0 left-0 bg-[#D3D7EB] rounded-full -z-10'></div>
            <div className='overflow-hidden bg-transparent rounded-full '>
              {' '}
              <Image
                className=''
                height={350}
                width={350}
                src={Hero1}
                alt=''
              />
            </div>
          </div>
        </MouseParallaxChild>
      </div>
      <div className='h-3 md:hidden'> </div>
      <div className='md:absolute bottom-2 right-2 z-10 md:h-56 w-full   md:w-52'>
        <MouseParallaxChild
          factorX={0.2}
          factorY={0.1}
          updateStyles={{
            display: 'flex',
            marginBottom: '50px',
            justifyContent: 'center',
            width: 'auto',
          }}>
          <div className=''>
            <div className=' bg-white  rounded-3xl  p-2 py-6 '>
              <div className='flex  flex-col justify-center items-center h-full'>
                <button
                  className=' bg-cyan-100/55 p-8 rounded-3xl '
                  variant='outline'>
                  <Image
                    src={like}
                    height={52}
                    width={52}
                    alt='like'
                  />
                  {/* <ThumbsUp
                            size={48}
                            fill='yellow'
                          /> */}
                </button>
                <p className='text-black my-5 md:text-sm text-base md:my-2'>
                  Project has been accepted.
                </p>
              </div>
            </div>
          </div>
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
};

export default MouseParallaxComponent;
