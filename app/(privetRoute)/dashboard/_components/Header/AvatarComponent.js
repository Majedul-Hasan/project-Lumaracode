'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AvatarComponent = () => {
  const router = useRouter();
  const logOut = () => {
    signOut();
    router.push('/login');
  };
  return (
    <div>
      <Link
        href='#'
        onClick={logOut}>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default AvatarComponent;
