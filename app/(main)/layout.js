import MainNav from '@/components/header';
import React from 'react';

const layout = ({ children }) => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <header className='z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b '>
          {/* TODO: SessionProvider  */}
          <div className='container flex h-20 items-center justify-between py-6 '>
            <MainNav />
          </div>
        </header>
        <main className='flex-1 pt-20 flex flex-col bg-[#F4F6FC]'>
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
