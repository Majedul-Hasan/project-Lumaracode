import MainNav from '@/components/header';
import React from 'react';
import LeftNavMenu from './dashboard/_components/LeftNavMenu';
import Header from './dashboard/_components/Header';

const layout = ({ children }) => {
  return (
    <>
      <div className='flex min-h-screen '>
        <LeftNavMenu />

        {/* <header className='z-40  backdrop-blur-md fixed top-0 left-0 right-0 border-b '> */}
        {/* TODO: SessionProvider  */}
        {/* <div className='container flex  items-center justify-between py-12 '>
           
          </div>
        </header> */}
        <main className='flex-1 pt-20 flex flex-col '>
          <Header></Header>

          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
