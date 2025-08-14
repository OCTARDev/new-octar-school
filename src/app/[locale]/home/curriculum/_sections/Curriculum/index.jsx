"use client";
import Card from '@/components/Card';
import ErrorBoundary from '@/components/ErrorBoundary';
import useFetchCurriculum from '@/tanstack-query/Home/useFetchCurriculum';
import Link from 'next/link';
import React, { useState } from 'react'
import { useTranslations } from 'use-intl';

export default function CurriculumSection({id}) {
    const [lang,setLang] = useState("all");
    const {data,isLoading,isError,isSuccess,error} = useFetchCurriculum({id,lang});
    const curriculum = data?.data?.data;
    const t = useTranslations("curriculum");
    return (
        <section className='px-4'>
            <div className='max-w-screen-xl mx-auto flex flex-col gap-2 py-4'>
                <div className='flex justify-between flex-wrap gap-3 items-center px-5'>
                    <h3 className='text-4xl font-bold mb-8'>{t("header")}</h3>
                    <div className='flex gap-2 items-center flex-col '>
                        <label className='font-semibold'>Language Filter</label>
                        <select 
                        onChange={(e)=>setLang(e.target.value)}
                        className='px-5 py-1 border-2 capitalize rounded-lg'>
                            <option value={"all"}>all</option>
                            <option value={"en"}>english</option>
                            <option value={"ar"}>arabic</option>
                        </select>
                    </div>
                    
                </div>
                
                <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    {curriculum?.map((c,i)=>{
                        return(
                        <div className='flex flex-col items-center gap-2' key={c.id}> 
                            <Card c={c} isFullWidth={true} />
                            <div>
                                <Link href={`/home/categories/${c.id}`} className='btn btn-primary'>{t("button")}</Link>
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
