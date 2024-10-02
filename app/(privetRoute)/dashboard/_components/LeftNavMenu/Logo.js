import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href={'/dashboard'}
      className='flex justify-center py-3 fw-bolder'>
      <span className='text-5xl text-right '>Foody</span>
      <span className='text-5xl text-right text-green-500'>.</span>
    </Link>
  );
};

export default Logo;
