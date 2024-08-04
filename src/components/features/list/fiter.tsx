import { CustomSelect } from '@/components/ui/customselect';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
      <div className='flex flex-wrap gap-6'>
        <CustomSelect
          palceholder='Type'
          label='Type'
          selectOptions={['physical', 'digital']}
        />
        <Input
          type='text'
          placeholder='Min Price'
          className='text-xs rounded-2xl pl-2 w-24'
        />
        <Input
          type='text'
          placeholder='Max Price'
          className='text-xs rounded-2xl pl-2 w-24'
        />
        <CustomSelect
          palceholder='Size'
          label='Size'
          selectOptions={['S', 'M', 'L']}
        />
        <CustomSelect
          palceholder='Color'
          label='Color'
          selectOptions={['White', 'Yellow']}
        />
        <CustomSelect
          palceholder='Category'
          label='Category'
          selectOptions={['New Arrivals', 'Popular']}
        />
        {/* <CustomSelect palceholder='Size' label='Size' selectOptions={['']} /> */}
      </div>
      <div>
        <CustomSelect
          palceholder='Sort By'
          label='Sort By'
          selectOptions={[
            'Price: Low to High',
            'Price: High to Low',
            'Newest',
            'Oldest',
          ]}
        />
      </div>
    </div>
  );
};

export default Filter;
