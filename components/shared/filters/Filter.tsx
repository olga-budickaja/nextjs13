"use client"

import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface Props {
  filters: {
    name: string,
    value: string,
  }[];
  otherClasses?: string;
  containerClasses?: string;
  placeholder: string
}

const Filter= ({ filters, otherClasses, containerClasses, placeholder }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      {/* {filters.map((filter) => (
          <div key={filter.value} className='flex gap-4'>
            <Badge className='subtle-medium background-light800_dark300 rounded-md border-none px-4 py-2 !text-[14px] text-light-500'>
                {filter.name}
            </Badge>
          </div>
      ))} */}

      
      <Select>
        <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder={placeholder} />
          </div>
          
        </SelectTrigger>
        <SelectContent>       
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem
                key={filter.value} 
                value={filter.value}
              >
                {filter.name} 
              </SelectItem>
            ))}
          </SelectGroup>    
        </SelectContent>
      </Select>

    </div>
  )
}

export default Filter
