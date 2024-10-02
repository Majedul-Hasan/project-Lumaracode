import Link from 'next/link';
import React from 'react';
import LoginForm from '../_components/LoginForm';

const page = () => {
  return (
    <div className='w-8/12'>
      {' '}
      <LoginForm />
      <div className='mt-4 text-left text-sm'>
        Don&apos;t have an account?{' '}
        <Link
          href='/register'
          className='underline'>
          Register
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
