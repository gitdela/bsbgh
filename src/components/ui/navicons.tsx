'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';

const NavIcons = () => {
  const router = useRouter();
  // Temporary
  const isLoggedIn = true;
  const cartItems = true;

  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push('/profile');
    } else router.push('/');
  };

  return (
    <div className='flex items-center gap-4 xl:gap-6'>
      {isLoggedIn ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src={'/profile.png'}
              alt='profile'
              width={22}
              height={22}
              className='cursor-pointer'
            />
          </PopoverTrigger>
          <PopoverContent className='w-[150px]'>
            <Link href={'/profile'}>Profile</Link>
            <div className='mt-2 cursor-pointer'>Logout</div>
          </PopoverContent>
        </Popover>
      ) : (
        <Image
          src={'/profile.png'}
          alt='profile'
          width={22}
          height={22}
          className='cursor-pointer'
          onClick={handleProfileClick}
        />
      )}

      <Popover>
        <PopoverTrigger>
          <Image
            src={'/notification.png'}
            alt='notification'
            width={22}
            height={22}
            className='cursor-pointer'
          />
        </PopoverTrigger>
        <PopoverContent></PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger className='relative cursor-pointer'>
          <Image src={'/cart.png'} alt='cart' width={22} height={22} />
          <div className='absolute -top-4 -right-4 w-6 h-6 bg-BSBGHRED text-white text-sm rounded-full flex justify-center items-center'>
            2
          </div>
        </PopoverTrigger>
        <PopoverContent className=''>
          {!cartItems ? (
            <div>cart is empty</div>
          ) : (
            <>
              <h2 className='text-xl'>Shopping Cart</h2>
              {/* LIST */}
              <div className='flex flex-col gap-8'>
                {/* ITEM */}
                <div className='flex gap-4'>
                  <Image
                    src={'https://picsum.photos/400/400'}
                    alt=''
                    width={72}
                    height={96}
                    className='object-cover rounded-md'
                  />
                  <div className='flex flex-col justify-between w-full'>
                    {/* TOP */}
                    <div>
                      {/* TITLE */}
                      <div className='flex items-center justify-between gap-8'>
                        <h3 className='font-semibold text-sm whitespace-nowrap'>
                          Product Name
                        </h3>
                        <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                      </div>
                      {/* DESCRIPTION */}
                      <div className='text-sm text-gray-500'>available</div>
                    </div>
                    {/* BOTTOM */}
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-500'>Quantity: 2</span>
                      <span className='text-blue-500'>Remove</span>
                    </div>
                  </div>
                </div>
                {/* ITEM */}
                <div className='flex gap-4'>
                  <Image
                    src={'https://picsum.photos/400/400'}
                    alt=''
                    width={72}
                    height={96}
                    className='object-cover rounded-md'
                  />
                  <div className='flex flex-col justify-between w-full'>
                    {/* TOP */}
                    <div>
                      {/* TITLE */}
                      <div className='flex items-center justify-between gap-8'>
                        <h3 className='font-semibold text-sm whitespace-nowrap'>
                          Product Name
                        </h3>
                        <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                      </div>
                      {/* DESCRIPTION */}
                      <div className='text-sm text-gray-500'>available</div>
                    </div>
                    {/* BOTTOM */}
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-500'>Quantity: 2</span>
                      <span className='text-blue-500'>Remove</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* BOTTOM */}
              <div>
                <div className='flex items-center justify-between font-semibold'>
                  <span>Subtotal</span>
                  <span>$49</span>
                </div>
                <p className='text-gray-500 text-sm mt-2 mb-4'>
                  Shipping and taxes are calculated at checkout
                </p>
                <div className='flex justify-between text-sm'>
                  <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                    View Cart
                  </button>
                  <button className='rounded-md py-3 px-4 bg-black text-white'>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavIcons;
