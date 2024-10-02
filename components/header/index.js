import React from 'react';
import { Logo } from '../Logo';
import NavigationMenuComponent from './menu';
import { Button } from '../ui/button';
import Link from 'next/link';

const MainNav = () => {
  return (
    <div className='flex justify-between items-center w-full py-8 h-20 '>
      <Link href='/'>
        <Logo />
      </Link>

      <div>
        <NavigationMenuComponent />{' '}
      </div>
      <div>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default MainNav;
