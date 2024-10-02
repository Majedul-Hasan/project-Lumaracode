import MainNav from '@/components/header';
import React from 'react';

const layout = ({ children }) => {
  return (
    <>
      <div className='container flex h-20 items-center justify-between py-6 '>
        <MainNav />
      </div>
      <div>{children}</div>
    </>
  );
};

export default layout;
