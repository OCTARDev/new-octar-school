"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowNew from '@/tanstack-query/Home/News/useShow'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';

export default function SingleNewsSection({id}) {
    const {data,isLoading,isError,isSuccess,error} = useShowNew({id});
    const news = data?.data?.data;
  return (
    <section className='max-w-screen-xl mx-auto px-4'>
        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <div className='flex flex-col gap-2 py-10 capitalize'>
            {/* Image */}
            <div>
                <img 
                src={news?.media[0]}
                className='w-full rounded-lg'
                />
                <div className='flex gap-2 items-center text-sm font-semibold mt-3'>
                    <span><FaCalendarAlt className='text-primaryA1'/></span>
                    <span className='text-[#414141]'>{news.updated_at}</span>
                </div>
            </div>
            {/* Body */}
            <div className='mt-8 flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>{news?.title}</h1>
                <h2 className=''>{news?.sub_title}</h2>
                <p className='text-[#171717] font-semibold'>{news?.description}</p>
            </div>
        </div>
        </ErrorBoundary>
    </section>
  )
}
