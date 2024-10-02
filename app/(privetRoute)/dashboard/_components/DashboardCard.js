import Image from 'next/image';
import React from 'react';

const DashboardCard = ({ src, count, children, cardTitle }) => {
  return (
    <div className='rounded-xl border bg-card text-card-foreground shadow flex p-3 '>
      <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2 w-1/2'>
        <div className='bg-green-200 p-3 rounded-full h-20 w-20 flex mx-auto justify-center items-center '>
          <Image
            src={src}
            height={64}
            width={64}
            alt=''
          />
        </div>
      </div>
      <div className='p-3 pt- w-1/2'>
        <div className='text-5xl font-bold'>{count}</div>
        <p className='text-xl text-muted-foreground'>{cardTitle}</p>
        <p className='flex py-3 items-center gap-1'>{children}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
