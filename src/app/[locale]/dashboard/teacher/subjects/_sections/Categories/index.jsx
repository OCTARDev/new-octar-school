"use client";
import Card from '@/components/Card';
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeacherCurriculum from '@/tanstack-query/Teacher/Subjects/useShowCurriculum';
import Link from 'next/link';
import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { useTranslations } from 'use-intl';
export default function CategoriesSection({id}) {
    const {data,isLoading,isError,isSuccess,error} = useShowTeacherCurriculum({id})
    const response = data?.data?.data;
    const t = useTranslations("dashboard.teacher.subjects.categories");
  return (
    <div >
        <div className='flex items-center gap-4 mb-10 capitalize font-bold text-lg'>
            <span>{response?.title}</span>
            <span><FaAngleDoubleRight /></span>
            <span>{t("availableCategories")}</span>
        </div>
        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
            response?.categories?.map((r)=>{
                return(
                    <Link key={r.id} href={`targets/${r.id}`}>
                        <Card c={r}/>
                    </Link>
                )
            })
        }
        
        </div>
        </ErrorBoundary>
    </div>
  )
}
