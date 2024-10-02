import React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const A = ({ children, href }) => {
  return (
    <NavigationMenuItem>
      <Link
        href={href}
        legacyBehavior
        passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default A;
