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
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function NavigationMenuComponent() {
  const { data: session } = useSession();
  const [loginSession, setLoginSession] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (session?.error === 'RefreshAccessTokenError') {
    redirect('/login');
  }

  useEffect(() => {
    setLoginSession(session);
    async function fetchMe() {
      try {
        const response = await fetch('/api/me');
        const data = await response.json();
        console.log(data);
        setLoggedInUser(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMe();
  }, [session]);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <A href='/'> home</A>
        <A href='/projects'> projects</A>
        <A href='/services'>services</A>
        {!loginSession ? (
          <A href='/login'>login</A>
        ) : (
          <A
            href='#'
            onClick={() => {
              signOut();
            }}>
            signOut
          </A>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
