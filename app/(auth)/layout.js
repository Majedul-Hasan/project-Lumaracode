import Image from 'next/image';
import SocialLogins from './_components/social-logins';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen bg-[#fff]'>
      <div className='w-2/5'>
        <div className='w-full flex justify-center items-center flex-col h-screen overflow-hidden '>
          <h3 className='text-3xl fw-bold p-3 text-left w-8/12'>
            Join the green movement
          </h3>
          <p className='text-gray-300 text-lg p-2 text-left w-8/12'>
            Sign up for free
          </p>
          <SocialLogins />
          {children}
        </div>
      </div>
      <div className='w-3/5 h-screen overflow-hidden bg-[#FFF1E8]'>
        {/* <div className='w-full   '></div> */}
        <Image
          className='h-full w-full '
          style={{ objectFit: 'cover', objectPosition: '0% 60%' }}
          src='/assets/DrawKitIllustrationEcology.png'
          width={500}
          height={800}
          alt='Draw Kit Illustration Ecology'
        />
      </div>
    </div>
  );
};
export default AuthLayout;
