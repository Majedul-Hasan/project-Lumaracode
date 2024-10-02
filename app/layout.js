import localFont from 'next/font/local';
import './globals.css';
import { dbConnect } from '@/service/mongo';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Lumaracode',
  description: 'Lumaracode',
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F4F6FC]`}>
        {children}
      </body>
    </html>
  );
}
