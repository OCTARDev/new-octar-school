"use client";
import Card from '@/components/Card';
import useFetchFAQs from '@/tanstack-query/Home/useFetchFAQs';
import Link from 'next/link';
import React from 'react'
import { useTranslations } from 'use-intl';

export default function SupportHelpSection() {
    const {data,isLoading,isError,error,isSuccess} = useFetchFAQs();
    const faqs = data?.data?.data;
    const t = useTranslations("support.help");
    
  return (
    <section className='py-10'>
        <div className='max-w-screen-xl mx-auto px-4 '>
            <h2 className='text-center my-6 text-3xl font-bold'>{t("header")}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {
                    faqs && faqs?.map((f,i)=>{
                        return(
                            <Link key={f.id} href={`support/${f.id}`} className='w-full'>
                                <Card c={f} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
