import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className='bg-transparent h-16 px-4 flex justify-between items-center border-b  border-gray-200'>
      <div>Hello Shubham,</div> 
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
        <input type="text " placeholder='search' className='text-sm focus:outline-none active:outline-none h-10 w-[15rem]  rounded-lg pl-11 px-4'/></div>
      </div>
  )
}
