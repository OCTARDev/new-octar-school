import React from 'react'
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import TeacherSection from './_sections/Teachers';
import Link from 'next/link';
export default function Teachers() {
  return (
    <div className='flex flex-col gap-4'>
      {/* top Header */}
      <div className='flex gap-3 items-center justify-between mb-6'>
          <div className='flex gap-3 items-center'>
            <span className='rounded-full p-1 bg-primaryA3'><FaPersonChalkboard size={20}/></span>
            <h1 className='text-lg font-bold'>Teachers</h1>
          </div>
          <div>
            <Link className='btn btn-primary flex items-center gap-2' href={"teachers/add"}>
              <FaPlus /> 
              <span>Add Teacher</span>
            </Link>
          </div>
      </div>
      {/* Teachers Section */}
      <TeacherSection />
    </div>
  )
}
