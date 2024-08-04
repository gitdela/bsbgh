import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-100 mt-24 py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-sm'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href={'/'} className='flex items-center gap-1'>
            <Image
              src='/logo.png'
              alt='logo'
              width={20}
              height={20}
              className='cursor-pointer'
            />
            <div className='text-md tracking-wider'>BSBGH</div>
          </Link>
          <p>East Legon, Accra, Ghana</p>
          <span className='font-semibold'>interactwdela@gmail.com</span>
          <span className='font-semibold'>+233 24 920 3351</span>
          <div className='flex gap-6'>
            <Image
              src='/facebook.png'
              alt='facebook'
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <Image
              src='/instagram.png'
              alt='instagram'
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <Image
              src='/youtube.png'
              alt='twitter'
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <Image
              src='/pinterest.png'
              alt='twitter'
              width={16}
              height={16}
              className='cursor-pointer'
            />
          </div>
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href={'/'}>About Us</Link>
              <Link href={'/'}>Careers</Link>
              <Link href={'/'}>Affiliates</Link>
              <Link href={'/'}>Blogs</Link>
              <Link href={'/'}>Contact Us</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href={'/'}>New Arrivals</Link>
              <Link href={'/'}>Accessories</Link>
              <Link href={'/'}>Men</Link>
              <Link href={'/'}>Women</Link>
              <Link href={'/'}>All Products</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href={'/'}>Customer Service</Link>
              <Link href={'/'}>My Account</Link>
              <Link href={'/'}>Legal & Privacy</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get the latest news about our products</p>
          <div className='flex'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='px-2 md:p-4 w-3/4 rounded-e-none focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0 max-md:placeholder:text-xs'
            />
            <Button className='w-1/4 bg-BSBGHRED text-white rounded-s-none'>
              Join
            </Button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className='flex justify-between'>
            <Image src={'/visa.png'} alt='visa' width={40} height={20} />
            <Image src={'/skrill.png'} alt='visa' width={40} height={20} />
            <Image src={'/paypal.png'} alt='visa' width={40} height={20} />
            <Image src={'/mastercard.png'} alt='visa' width={40} height={20} />
            <Image src={'/discover.png'} alt='visa' width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center items-center mt-16'>
        <p>&copy; {new Date().getFullYear()} BSBGH Shop</p>
      </div>
    </div>
  );
};

export default Footer;
