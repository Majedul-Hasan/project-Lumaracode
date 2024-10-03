import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { doSocialLogin } from '@/app/actions/login';

// import { doSocialLogin } from "@/app/actions";

const SocialLogins = () => {
  return (
    <>
      <form action={doSocialLogin}>
        <div className='flex justify-center gap-2'>
          <Button
            className={cn(
              'mt-4 py-4 w-full border-gray-600/30 border rounded-md flex items-center gap-2 justify-center text-black bg-transparent'
            )}
            type='submit'
            name='action'
            size='lg'
            value='google'>
            <Image
              src='/assets/brands/g-icon.png'
              alt='google'
              width={32}
              height={32}
            />
            <span>Continue with Google</span>
          </Button>
        </div>
      </form>
      <div className='w-6/12  relative h-10 my-6 '>
        <div className='text-center absolute -top-5 z-10 left-[50%] -translate-x-[50%]   text-md p-4 mt-3 bg-white text-gray-500'>
          or
        </div>
        <Separator className='text-center absolute top-[20%] left-0 text-md mt-3 text-gray-500' />
      </div>
    </>
  );
};

export default SocialLogins;
