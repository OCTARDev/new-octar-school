import React from 'react'
import { FaPalette } from 'react-icons/fa'
import CategoriesSection from '../../_sections/Categories';

export default async function Categories({params}) {
    const {curriculumId} = await params;
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-3 items-center mb-6'>
            <span className='rounded-full p-1 bg-primaryA3'><FaPalette size={20}/></span>
            <h1 className='text-lg font-bold'>Subjects</h1>
        </div>
        <CategoriesSection id={curriculumId}/>
    </div>
  )
}
