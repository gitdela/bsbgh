import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CustomSelectProps {
  palceholder: string;
  label: string;
  selectOptions: string[];
  className?: string;
}
export function CustomSelect({
  palceholder,
  label,
  selectOptions,
}: CustomSelectProps) {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={palceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {selectOptions.map((option) => (
            <SelectItem key={option} value={option} className='capitalize'>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
