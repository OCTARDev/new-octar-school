"use client";
import Card from '@/components/Card';
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
                        <Card c={c}/>
                        <div>
                            <Link href={`/home/categories/${c.id}`} className='btn btn-primary'>Explore Content</Link>
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
