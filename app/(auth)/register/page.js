import Link from 'next/link';
import React from 'react';
import RegisterForm from '../_components/RegisterForm';

const page = () => {
  return (
    <div className='w-8/12'>
      {' '}
      <RegisterForm />
      <div className='mt-4 text-left text-sm'>
        Already have an account?{' '}
        <Link
          href='/login'
          className='underline'>
          login
        </Link>
      </div>
      <div className='mt-4 text-left text-gray-500 text-sm'>
        By clicking “Continue with Google / email” you agree to our User Terms
        of Services and Privacy Policy
      </div>
    </div>
  );
};

export default page;
