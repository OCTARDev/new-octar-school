"use client";
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import React from 'react'
import TargetHeroSection from '../Hero';
import Card from '@/components/Card';
import useFetchTarget from '@/tanstack-query/Home/useFetchTarget';

export default function TargetSection({targetId}) {
    const {data,isError,isLoading,isSuccess,error} = useFetchTarget({targetId});
    const targets = data?.data?.data.targets;
    
  return (
    <>
    <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
        <TargetHeroSection data={data?.data?.data}/>
    </ErrorBoundary>
    <section className='px-4'>
        <div className='max-w-screen-xl mx-auto flex flex-col gap-2 py-4'>
            <h3 className='text-4xl font-bold mb-8'>Available Targets</h3>
            <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {targets?.map((c,i)=>{
                    return(
                    <Card c={c} key={c.id}/>
                    )
                })}
            </div>
            </ErrorBoundary>
        </div>
    </section>
    </>

  )
}
