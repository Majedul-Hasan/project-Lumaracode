import { Badge } from '@/components/ui/badge';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { CiBellOn } from 'react-icons/ci';
import SearchComponent from './SearchComponent';
import AvatarComponent from './AvatarComponent';
const Header = () => {
  return (
    <div className='flex container items-center'>
      <SearchComponent />
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-3'>
          <div>
            <Badge
              variant='outline'
              className={cn(
                'text-2xl h-14 w-14 flex justify-center bg-emerald-100'
              )}>
              <IoChatboxEllipsesOutline />
            </Badge>
          </div>
          <div>
            <Badge
              className={cn(
                'text-2xl h-14 w-14 flex justify-center bg-emerald-100'
              )}
              variant='outline'>
              <CiBellOn />
            </Badge>
          </div>
        </div>
        <AvatarComponent />
      </div>
    </div>
  );
};

export default Header;
