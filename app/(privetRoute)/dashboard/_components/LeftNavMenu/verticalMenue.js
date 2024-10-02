'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import A from '@/components/header/NavigationMenuItemcomponent';
import MenuNavigationLink from './MenuNavigationLink';
import { HiHome, HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { GoHome } from 'react-icons/go';
import { usePathname } from 'next/navigation';
import { FaRegChartBar } from 'react-icons/fa';
import { BsCup } from 'react-icons/bs';
import { CiCalendar } from 'react-icons/ci';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { BiWalletAlt } from 'react-icons/bi';

export default function VerticalMenuComponent() {
  // const [active, setActive] = React.useState(false);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className='group flex flex-col gap-4 py-2'>
      <nav className='grid gap-1 px-2 '>
        <MenuNavigationLink
          active={pathname === '/dashboard'}
          href={'/dashboard'}>
          {' '}
          <span className='mx-3  text-3xl'>
            <GoHome />{' '}
          </span>
          Dashboard
        </MenuNavigationLink>

        <MenuNavigationLink
          active={pathname === '/orders'}
          href={'/orders'}>
          {' '}
          <span className='mx-3 text-3xl'>
            <HiOutlineBars3BottomLeft />{' '}
          </span>
          Order List
        </MenuNavigationLink>

        <MenuNavigationLink
          active={pathname === '/analytics'}
          href={'/analytics'}>
          {' '}
          <span className='mx-3 text-2xl'>
            <FaRegChartBar />{' '}
          </span>
          Analytics
        </MenuNavigationLink>
        <MenuNavigationLink
          active={pathname === '/foods'}
          href={'/foods'}>
          {' '}
          <span className='mx-3 text-3xl'>
            <BsCup />
          </span>
          Foods
        </MenuNavigationLink>
        <MenuNavigationLink
          active={pathname === '/calendar'}
          href={'/calendar'}>
          {' '}
          <span className='mx-3 text-3xl'>
            <CiCalendar />{' '}
          </span>
          Calendar
        </MenuNavigationLink>
        <MenuNavigationLink
          active={pathname === '/chat'}
          href={'/chat'}>
          {' '}
          <span className='mx-3 text-3xl'>
            <IoChatboxEllipsesOutline />{' '}
          </span>
          Chat
        </MenuNavigationLink>
        <MenuNavigationLink
          active={pathname === '/chat'}
          href={'/chat'}>
          {' '}
          <span className='mx-3 text-3xl'>
            <BiWalletAlt />{' '}
          </span>
          Wallet
        </MenuNavigationLink>
      </nav>
    </div>
  );
}
