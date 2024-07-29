import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SearchBar from '../../ui/searchbar';
import NavIcons from '../../ui/navicons';
import HamburgerMenu from '../../ui/hamburgermenu';

const Navbar = () => {
  return (
    <div className='relative h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* MOBILE */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/logo.png'
            alt='logo'
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <div className='text-md tracking-wider'>BSBGH</div>
        </Link>
        <HamburgerMenu />
      </div>
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* LEFT */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/logo.png'
              alt='logo'
              width={24}
              height={24}
              className='cursor-pointer'
            />
            <div className='text-xl tracking-wider'>BSBGH</div>
          </Link>
          <div className='hidden xl:flex gap-4'>
            <Link href='/'>Homepage</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
