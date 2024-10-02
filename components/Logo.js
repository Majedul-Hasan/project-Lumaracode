import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { cn } from '@/lib/utils';
export const Logo = ({ className = '' }) => {
  return (
    <Image
      className={cn('max-w-[80px]', className)}
      src={logo}
      alt='logo'
    />
  );
};
