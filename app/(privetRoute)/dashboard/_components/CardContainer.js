import React from 'react';
import DashboardCard from './DashboardCard';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const CardContainer = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 mr-10 w-11/12 my-10'>
      <DashboardCard
        src='/orders.png'
        count={75}
        cardTitle='Total Orders'>
        {' '}
        <div className='h-8 w-8 bg-emerald-100 rounded-full flex justify-end items-center p-2'>
          <FaArrowUp />{' '}
        </div>{' '}
        <span className='text-xs'>4% (30 days)</span>{' '}
      </DashboardCard>
      <DashboardCard
        src='/delivered.png'
        count={357}
        cardTitle='Total Delivered'>
        {' '}
        <div className='h-8 w-8 bg-emerald-100 rounded-full flex justify-end items-center p-2'>
          <FaArrowUp />{' '}
        </div>{' '}
        <span className='text-xs'>4% (30 days)</span>{' '}
      </DashboardCard>
      <DashboardCard
        src='/canceled.png'
        count={65}
        cardTitle='Total Canceled'>
        {' '}
        <div className='h-8 w-8 bg-red-100 rounded-full flex justify-end items-center p-2'>
          <FaArrowDown />{' '}
        </div>{' '}
        <span className='text-xs'>4% (30 days)</span>{' '}
      </DashboardCard>
      <DashboardCard
        src='/revrnue.png'
        count={'$128'}
        cardTitle='Total Revenue'>
        {' '}
        <div className='h-8 w-8 bg-red-100 rounded-full flex justify-end items-center p-2'>
          <FaArrowDown />{' '}
        </div>{' '}
        <span className='text-xs'>4% (30 days)</span>{' '}
      </DashboardCard>
    </div>
  );
};

export default CardContainer;
