import AddProduct from '@/components/features/product/add';
import ProductImages from '@/components/features/product/images';
import ProductPreferences from '@/components/features/product/preferences';
import React from 'react';

const SingleProduct = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam illo
          voluptates eligendi quis culpa nam tempora non! Assumenda doloremque
          temporibus fugiat distinctio libero dignissimos, consequatur soluta
          accusamus, in quo sequi.
        </p>
        <hr />
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>GHS 300</h3>
          <h2 className='font-medium text-2xl'>GHS 200</h2>
        </div>
        <hr />
        <ProductPreferences />
        <AddProduct />
        <hr />
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            molestiae cumque. Earum suscipit itaque numquam mollitia possimus ea
            iure sapiente est, sequi, dolorum eius maiores cumque sed blanditiis
            illo error magni veritatis? Quaerat sequi, aut expedita et maiores
            consectetur! Pariatur eveniet nam quam deleniti maiores. Consequatur
            placeat omnis temporibus saepe.
          </p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            molestiae cumque. Earum suscipit itaque numquam mollitia possimus ea
            iure sapiente est, sequi, dolorum eius maiores cumque sed blanditiis
            illo error magni veritatis? Quaerat sequi, aut expedita et maiores
            consectetur! Pariatur eveniet nam quam deleniti maiores. Consequatur
            placeat omnis temporibus saepe.
          </p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            molestiae cumque. Earum suscipit itaque numquam mollitia possimus ea
            iure sapiente est, sequi, dolorum eius maiores cumque sed blanditiis
            illo error magni veritatis? Quaerat sequi, aut expedita et maiores
            consectetur! Pariatur eveniet nam quam deleniti maiores. Consequatur
            placeat omnis temporibus saepe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
