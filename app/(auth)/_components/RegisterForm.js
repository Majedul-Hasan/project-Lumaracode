'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');

      const userRole = 'user';

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,

          email,
          password,
          userRole,
        }),
      });

      response.status === 201 && router.push('/login');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>name</Label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='m@example.com'
            required
          />
        </div>
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

export default RegisterForm;
