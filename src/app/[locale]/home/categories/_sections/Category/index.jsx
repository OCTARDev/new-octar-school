"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react'
import TargetHeroSection from '../Hero';
import Card from '@/components/Card';
import useFetchCategories from '@/tanstack-query/Home/useFetchCategories';
import Link from 'next/link';

export default function CategorySection({categoryId}) {
    const {data,isError,isLoading,isSuccess,error} = useFetchCategories({id:categoryId});
    const targets = data?.data?.data;
    
  return (
    <>
    <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
        <TargetHeroSection data={data?.data?.data}/>
    </ErrorBoundary>
    <section className='px-4'>
        <div className='max-w-screen-xl mx-auto flex flex-col gap-2 py-4'>
            <h3 className='text-4xl font-bold mb-8'>Available Categories</h3>
            <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {targets?.map((c,i)=>{
                    return(
                    <div className='flex flex-col items-center gap-2' key={c.id}>
                        <Card c={c} key={c.id}/>
                        <div>
                            <Link href={`/home/targets/${c.id}`} className='btn btn-primary'>Show Targets</Link>
                        </div>
                    </div>
                    )
                })}
            </div>
            </ErrorBoundary>
        </div>
    </section>
    </>

  )
}
