import ProductList from '@/components/features/home/productlist';
import Filter from '@/components/features/list/fiter';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const List = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* CAMPAIGN */}
      <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>
            Grab up to 50% off on <br /> selected products
          </h1>
          <Button className='rounded-3xl bg-BSBGHRED text-white w-max py-3 px-5 text-sm'>
            Buy Now
          </Button>
        </div>
        <div className='w-1/3 relative'>
          <Image
            src={'/woman.png'}
            alt='woman'
            fill
            className='object-contain'
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className='mt-12 text-lg font-semibold'>Shoes For You!</h1>
      <ProductList />
    </div>
  );
};

export default List;
