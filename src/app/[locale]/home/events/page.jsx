"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useIndexEvents from '@/tanstack-query/Home/Events/useIndex'
import React from 'react'
import EventCard from './_components/card';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Events() {
    const {data,isLoading,isError,isSuccess,error} = useIndexEvents();
    const events = data?.data?.data;
    const upcoming = events?.upcoming;
    const past = events?.past;
    const t = useTranslations("events");
  return (
    <div className='py-10 capitalize'>
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className='flex items-center justify-between my-10'>
                <h1 className='font-bold text-2xl'>{t("upcoming")}</h1>
                <Link href={"events/all"} className='font-bold underline hover:text-gray-600'>
                {t("seeall")}
                </Link>
            </div>
            
            <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    upcoming?.map((card)=>{
                        return(
                            <EventCard key={card.id} card={card}/>
                        )
                    })
                }
            </section>
            <div className='flex items-center justify-between my-10'>
                <h1 className='font-bold text-2xl'>{t("past")}</h1>
                <Link href={"events/all"} className='font-bold underline hover:text-gray-600'>
                {t("seeall")}
                </Link>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    past?.map((card)=>{
                        return(
                            <EventCard key={card.id} card={card}/>
                        )
                    })
                }
            </section>
            </ErrorBoundary>
        </div>
    </div>
  )
}
