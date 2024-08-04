import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/200/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/201/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/202/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/203/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/204/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/211/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/206/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/212/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/208/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
        <Link
          href={'/list?cat=test'}
          className='flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6'
        >
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src={'https://picsum.photos/id/209/300/200'}
              alt='test'
              fill
              sizes='20vw'
              className='object-cover rounded-md'
            />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
