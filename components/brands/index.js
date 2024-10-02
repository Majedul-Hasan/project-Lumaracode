/* eslint-disable react/no-unescaped-entities */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    title: 'airbnb',
    url: 'http://airbnb.com',
  },
  {
    title: 'google',
    url: 'http://google.com',
  },
  {
    title: 'microsoft',
    url: 'http://microsoft.com',
  },
  {
    title: 'fedex',
    url: 'http://fedex.com',
  },
  {
    title: 'amazon',
    url: 'http://amazon.com',
  },
];

const Brands = () => {
  return (
    <section className='my-12 container'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className='mySwiper'>
        {brands.map((brand) => (
          <SwiperSlide key={brand.title}>
            <div className='container max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
              <Link
                href={brand.url}
                target='_blank'>
                <figure className='max-w-screen-md mx-auto'>
                  <Image
                    src={`/assets/brands/${brand.title}.png`}
                    height={120}
                    width={155}
                    alt={brand.title}
                  />
                </figure>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
