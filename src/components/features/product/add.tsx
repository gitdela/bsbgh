'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AddProduct = () => {
  const [quantity, setQuantity] = useState(1);

  // temporary
  const stock = 4;

  const handleQuantityChange = (type: 'd' | 'i') => {
    if (type === 'd' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'i' && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-100 px-2 rounded-full flex items-center justify-center'>
            <Button
              className='cursor-pointer text-xl border-none bg-inherit'
              variant={'outline'}
              onClick={() => handleQuantityChange('d')}
            >
              -
            </Button>
            {quantity}
            <Button
              className='cursor-pointer text-xl border-none bg-inherit'
              variant={'outline'}
              onClick={() => handleQuantityChange('i')}
            >
              +
            </Button>
          </div>
          <div className='text-xs'>
            Only <span className='text-orange-400'>4 items </span>left!
            <br></br>
            Don&apos;t miss it
          </div>
        </div>
        <Button
          variant={'outline'}
          className='w-36 text-sm rounded-3xl ring-1 ring-BSBGHRED text-BSBGHRED py-2 px-4 hover:bg-BSBGHRED hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0'
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
