import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchComponent = () => {
  return (
    <div className='flex-1 mx-3'>
      <from className='flex '>
        <Input
          className={cn('bg-transparent')}
          type='text'
          name='search'
        />
        <button className='-ml-8 text-xl'>
          <CiSearch />{' '}
        </button>
      </from>
    </div>
  );
};

export default SearchComponent;
