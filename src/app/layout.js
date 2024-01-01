/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import Navbar from '@/components/Navbar/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alzaf Ltd',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
