"use client";
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import useFetchCurriculum from '@/tanstack-query/Home/useFetchCurriculum';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function CurriculumSection({id}) {

    const {data,isLoading,isError,isSuccess,error} = useFetchCurriculum({id});
    const curriculum = data?.data?.data;
    
  return (
    <section className='px-4'>
        <div className='max-w-screen-xl mx-auto flex flex-col gap-2 py-4'>
            <h3 className='text-4xl font-bold mb-8'>Curriculum</h3>
            <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {curriculum?.map((c,i)=>{
                    return(
                    <div className='flex flex-col items-center gap-2' key={c.id}> 
                        <div className='w-full px-2 py-3 flex flex-col gap-2 items-center border-2 rounded-lg'>
                            <img 
                            src={c.media_path} 
                            className='max-w-full'
                            />
                            <p className='font-bold text-xl'> {c.title}</p>
                        </div>
                        <div>
                            <Link href={`/home/curriculum/${id}/target/${c.id}`} className='btn btn-primary'>Explore Content</Link>
                        </div>
                    </div>
                    )
                })}
            </div>
            </ErrorBoundary>
        </div>
    </section>
  )
}
