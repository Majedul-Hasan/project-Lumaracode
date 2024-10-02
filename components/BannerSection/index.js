import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import HeroImage from './HeroImage';

const BannerSection = () => {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 grainy'>
      <div className='container flex  flex-col items-center gap-4 text-center relative isolate '>
        <div className='flex w-full flex-col md:flex-row min-h-max '>
          <div className='md:w-1/2 p-5 md:p-8'>
            <h3 className='font-heading text-left text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl'>
              Empower Your Business With Stunning Design!
            </h3>
            <p className='max-w-[40rem] my-8  text-justify leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
              Lumaracode is a digital design and development studio. We design
              and develop astonishing websites and mobile apps.
            </p>
            <div className='flex items-start gap-3 flex-wrap justify-start'>
              <Link
                href='/contact'
                className={cn(buttonVariants({ size: 'lg' }), 'bg-primary')}>
                Get in touch
              </Link>
              <Link
                href='/portfolio'
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                    size: 'lg',
                  })
                )}>
                See our work
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 min-h-full'>
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
