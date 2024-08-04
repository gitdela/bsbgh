'use client';

import Image from 'next/image';
import React from 'react';

const productImages = [
  {
    id: 1,
    url: 'https://picsum.photos/id/50/400/400',
    alt: 'image',
  },
  {
    id: 2,
    url: 'https://picsum.photos/id/51/400/400',
    alt: 'image',
  },
  {
    id: 3,
    url: 'https://picsum.photos/id/52/400/400',
    alt: 'image',
  },
  {
    id: 4,
    url: 'https://picsum.photos/id/53/400/400',
    alt: 'image',
  },
];

const ProductImages = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image
          src={productImages[index].url}
          alt='product'
          sizes='50vw'
          fill
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex relative gap-4 mt-4'>
        {productImages.map((image, index) => (
          <div
            key={image.id}
            className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer rounded-md'
            onClick={() => setIndex(index)}
          >
            <Image
              src={image.url}
              alt='product'
              sizes='30vw'
              fill
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductImages;
