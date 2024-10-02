import './globals.css';
import { dbConnect } from '@/service/mongo';

export const metadata = {
  title: 'Lumaracode',
  description: 'Lumaracode',
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang='en'>
      <body className={` antialiased bg-[#F4F6FC]`}>{children}</body>
    </html>
  );
}
