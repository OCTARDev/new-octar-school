"use client"
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowStudentNotes from '@/tanstack-query/School/Students/useShowNotes'
import Image from 'next/image';
import React from 'react'

export default function NotesSection({id}) {
    const {data,isLoading,isError,isSuccess,error} = useShowStudentNotes({id});
    const notes = data?.data?.data;
    console.log("notes",notes);
    
  return (
    <section className='flex flex-col gap-4'>
        {/* top Header */}
        <h1 className='text-4xl font-bold capitalize mt-6'>View Notes</h1>
        <ErrorBoundary isSuccess={isSuccess} isLoading={isLoading} isError={isError} error={error}>
        <div className='flex flex-col gap-4'>
            {notes?.map((note,index)=>(
                <div key={index} className='flex flex-col gap-6 px-4 shadow-lg py-6  border-b-2 '>
                    {/* Image and top Header */}
                    <div  className='flex gap-2 '>
                        <span className='rounded-full border-primaryA1 border-2' >
                            <img src={note?.media_path} className='w-12 h-12' alt='Note Image'/>
                        </span>
                        <div className='capitalize flex flex-col gap-1'>
                            <h2 className='font-bold text-lg'>{note?.teacher_name}</h2>
                            <span className='font-bold text-gray-500 text-xs uppercase'>{note?.last_update}</span>
                        </div>
                    </div>
                    {/* Note  */}
                    <p className='px-3 capitalize'>{note?.note}</p>
                </div>
            ))}
        </div>
        </ErrorBoundary>
    </section>
  )
}
