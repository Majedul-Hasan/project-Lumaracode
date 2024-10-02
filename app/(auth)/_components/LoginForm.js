'use client';
import { credentialLogin } from '@/app/actions/login';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error);
      } else {
        router.push('/dashboard');
      }
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='m@example.com'
            required
          />
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='password'>Password</Label>
          </div>
          <Input
            id='password'
            name='password'
            type='password'
            required
          />
        </div>
        <Button
          type='submit'
          className='w-full bg-lime-700 py-4 
          '>
          Continue with email
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
