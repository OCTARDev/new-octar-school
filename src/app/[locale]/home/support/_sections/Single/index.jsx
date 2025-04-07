"use client";
import React, { useEffect, useState } from 'react'
import useFetchFAQs from '@/tanstack-query/Home/useFetchFAQs';
import { IoArrowBack } from "react-icons/io5";
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import Link from 'next/link';
import Dropdown from '@/components/Dropdown/Dropdown';
import DropContainer from '@/components/DropContainer';

export default function SingleFAQ({id}) {
    const [faq,setFAQ] = useState(null);
    const {data,isLoading,isError,error,isSuccess} = useFetchFAQs();
    const faqs = data?.data?.data;
    useEffect(()=>{
        if(faqs){
            setFAQ(faqs?.find((f)=>f.id == id))
        }
    },[faqs])
    console.log(faq)
  return (
    <div className='p-10'>
        <section className='flex items-center px-4 py-6 gap-4'>
            <Link href={"/home/support"} className='flex items-center gap-2 text-primaryA1 hover:text-gray-800'>
                <span><IoArrowBack /></span>
                <span>Back</span>
            </Link>
        </section>
        <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
        <section className='capitalize'>
            <div className='max-w-screen-lg px-10 mx-auto py-10 flex flex-col gap-8'>
                <h1 className='text-center text-2xl font-bold'>{faq?.title}</h1>
                <div className='flex flex-col gap-4'>
                    {
                        faq?.fa_questions?.map((f,i)=>{
                            return(
                                <div key={i} className='py-6 px-4 border rounded-lg bg-primaryA1/20 text-primaryA1'>
                                    <DropContainer title={f?.question}>
                                        <div className='text-neutral1'>
                                            {f?.answer}
                                        </div>
                                    </DropContainer>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </section>
        </ErrorBoundary>
    </div>
  )
}
