import React from 'react'
import ShowTeacherSection from '../../_sections/Show';
import BackSection from '@/components/BackSection';

export default async function page({params}) {
    const {teacherId} = await params;

  return (
    <div className='flex flex-col gap-6'>
        <BackSection />
        <ShowTeacherSection id={teacherId}/>
    </div>
  )
}
