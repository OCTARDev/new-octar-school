import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import StudentsTableSection from '../_sections/IndexTable';

export default async function Students({params}) {
  const {classId} = await params;
  return (
    <div className='flex flex-col gap-4'>
      {/* top Header */}
      <div className='flex gap-3 items-center justify-between mb-6'>
          <div className='flex gap-3 items-center'>
            <span className='rounded-full p-1 bg-primaryA3'><PiStudentBold size={20}/></span>
            <h1 className='text-lg font-bold'>Students</h1>
          </div>
          <div>
            <Link className='btn btn-primary flex items-center gap-2' href={`${classId}/add`}>
              <FaPlus /> 
              <span>Add Student</span>
            </Link>
          </div>
      </div>
      {/* Teachers Section */}
      <StudentsTableSection id={classId}/>
    </div>
  )
}
