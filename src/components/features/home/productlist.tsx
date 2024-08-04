import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div className='mt-12 flex flex-wrap gap-x-8 gap-y-16 justify-between'>
      <Link
        href={'/'}
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src={'https://picsum.photos/id/280/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
          />
          <Image
            src={'https://picsum.photos/id/281/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>GHS 200</span>
        </div>
        <div className='text-s text-gray-500'>My Description</div>
        <Button
          variant={'outline'}
          className='w-max rounded-2xl ring-1 ring-BSBGHRED text-BSBGHRED py-2 px-4 text-xs hover:bg-BSBGHRED hover:text-white'
        >
          Add to Cart
        </Button>
      </Link>
      <Link
        href={'/'}
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src={'https://picsum.photos/id/250/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
          />
          <Image
            src={'https://picsum.photos/id/251/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>GHS 200</span>
        </div>
        <div className='text-s text-gray-500'>My Description</div>
        <Button
          variant={'outline'}
          className='w-max rounded-2xl ring-1 ring-BSBGHRED text-BSBGHRED py-2 px-4 text-xs hover:bg-BSBGHRED hover:text-white'
        >
          Add to Cart
        </Button>
      </Link>
      <Link
        href={'/'}
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src={'https://picsum.photos/id/252/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
          />
          <Image
            src={'https://picsum.photos/id/238/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>GHS 200</span>
        </div>
        <div className='text-s text-gray-500'>My Description</div>
        <Button
          variant={'outline'}
          className='w-max rounded-2xl ring-1 ring-BSBGHRED text-BSBGHRED py-2 px-4 text-xs hover:bg-BSBGHRED hover:text-white'
        >
          Add to Cart
        </Button>
      </Link>
      <Link
        href={'/'}
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src={'https://picsum.photos/id/253/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
          />
          <Image
            src={'https://picsum.photos/id/254/300/200'}
            alt='product'
            fill
            sizes='25vh'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>GHS 200</span>
        </div>
        <div className='text-s text-gray-500'>My Description</div>
        <Button
          variant={'outline'}
          className='w-max rounded-2xl ring-1 ring-BSBGHRED text-BSBGHRED py-2 px-4 text-xs hover:bg-BSBGHRED hover:text-white'
        >
          Add to Cart
        </Button>
      </Link>
    </div>
  );
};

export default ProductList;
