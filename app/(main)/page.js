import MainNav from '@/components/header';
import NavigationMenuDemo from '@/components/menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import BannerSection from '@/components/BannerSection';
import Brands from '@/components/brands';

export default function Home() {
  return (
    <>
      <BannerSection />
      <Brands />
      {/* Categories Section */}
    </>
  );
}
