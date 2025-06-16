"use client";
import React from 'react'
import Card from './_components/Card';
import useIndexBlogs from '@/tanstack-query/Home/Blogs/useIndex';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useTranslations } from 'use-intl';


export default function Blog() {
  const {data,isLoading,isSuccess,isError,error} = useIndexBlogs();
  const blogs = data?.data?.data;
  const t = useTranslations("blog");

  return (
    <div>
        <div className='max-w-screen-2xl mx-auto md:px-10 px-4 py-10'>
            <h1 className='text-4xl font-bold mb-10'>{t("header")}</h1>
            <ErrorBoundary isLoading={isLoading} isSuccess={isSuccess} isError={isError} error={error}>
              <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                  {
                      blogs?.data?.map((c)=>{
                          return(
                              <Card c={c} key={c.id}/>
                          )
                      })
                  }
              </section>
            </ErrorBoundary>
        </div>
    </div>
  )
}
