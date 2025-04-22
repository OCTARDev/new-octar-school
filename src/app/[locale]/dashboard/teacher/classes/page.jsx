import React from 'react'
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import ClassSection from './_sections/Classes';

export default function Classes() {
  return (
    <div className='flex flex-col gap-4'>
      {/* top Header */}
      <div className='flex gap-3 items-center justify-between mb-6'>
          <div className='flex gap-3 items-center'>
            <span className='rounded-full p-1 bg-primaryA3'><FaPersonChalkboard size={20}/></span>
            <h1 className='text-lg font-bold'>Classes</h1>
          </div>
          
      </div>
      {/* Teachers Section */}
      <ClassSection />
    </div>
  )
}
