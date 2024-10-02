import React from 'react';
import Logo from './Logo';
import VerticalMenuComponent from './verticalMenue';

const LeftNavMenu = () => {
  return (
    <aside className='w-2/12 py-7 flex flex-col '>
      <Logo />
      <VerticalMenuComponent />
    </aside>
  );
};

export default LeftNavMenu;
