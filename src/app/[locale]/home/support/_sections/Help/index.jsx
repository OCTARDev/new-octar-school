"use client";
import Card from '@/components/Card';
import useFetchFAQs from '@/tanstack-query/Home/useFetchFAQs';
import React from 'react'

export default function SupportHelpSection() {
    const {data,isLoading,isError,error,isSuccess} = useFetchFAQs();
    const faqs = data?.data?.data;
    console.log(faqs);
    
  return (
    <section className='py-10'>
        <div className='max-w-screen-xl mx-auto px-4 '>
            <h2 className='text-center my-6 text-3xl font-bold'>How Can We Help You?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {
                    faqs && faqs?.map((f,i)=>{
                        return(
                            <Card c={f} key={f.id}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
