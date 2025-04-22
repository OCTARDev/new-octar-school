import BackSection from '@/components/BackSection'
import React from 'react'
import NotesSection from '../../_sections/Notes';

export default async function NotesPage({params}) {
  const {studentId} = await params;
  return (
    <div className='flex flex-col gap-4'>
      {/* top Header */}
      <BackSection />
      <NotesSection id={studentId}/>
    </div>
  )
}
