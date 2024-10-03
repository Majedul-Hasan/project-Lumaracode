import MainNav from '@/components/header';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

const layout = ({ children }) => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <header className='z-40  backdrop-blur-md fixed top-0 left-0 right-0 border-b '>
          {/* TODO: SessionProvider  */}
          <SessionProvider>
            <div className='container flex  items-center justify-between py-12 '>
              <MainNav />
            </div>
          </SessionProvider>
        </header>
        <main className='flex-1 pt-20 flex flex-col '>{children}</main>
      </div>
    </>
  );
};

export default layout;
