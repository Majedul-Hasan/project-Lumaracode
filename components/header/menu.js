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
import A from './NavigationMenuItemcomponent';

export default function NavigationMenuComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <A href='/'> home</A>
        <A href='/projects'> projects</A>
        <A href='/services'>services</A>
        <A href='/login'>login</A>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
