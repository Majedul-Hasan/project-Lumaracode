import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';

const MenuNavigationLink = ({ children, className, href, active }) => {
  return (
    <div className='w-full flex '>
      <div
        className={`w-6  ${active && 'border-emerald-200 border-l-8'} `}></div>
      <Link
        className={`inline-flex text-lg my-2 items-center whitespace-nowrap  font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 hover:text-white h-9 rounded-md px-3 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white  w-full ${
          active ? 'bg-emerald-200 text-emerald-700 ' : 'text-gray-500 '
        }`}
        href={href}>
        {children}
      </Link>
    </div>
  );
};

export default MenuNavigationLink;
