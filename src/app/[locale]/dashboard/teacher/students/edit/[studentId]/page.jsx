import React from 'react'
import EditStudentSection from '../../_sections/Edit';
import BackSection from '@/components/BackSection';


export default async function EditStudent({params}) {
    const {studentId} = await params;

  return (
    <div className='flex flex-col gap-6'>
        <BackSection />
        <EditStudentSection id={studentId}/>
    </div>
  )
}
