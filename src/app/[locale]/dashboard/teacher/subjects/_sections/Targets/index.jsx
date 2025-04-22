"use client";
import Card from '@/components/Card';
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeacherCategories from '@/tanstack-query/Teacher/Subjects/useShowCategories';
import Link from 'next/link';
import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function TargetsSection({id}) {
    const {data,isLoading,isError,isSuccess,error} = useShowTeacherCategories({id})
    const response = data?.data?.data;
    
  return (
    <div >
        <div className='flex sm:justify-between sm:flex-row flex-col  px-2 sm:items-center mb-10 gap-4'>
            <div className='flex items-center gap-4  capitalize font-bold text-lg'>
                <span>{response?.title}</span>
                <span><FaAngleDoubleRight /></span>
                <span>Available Targets</span>
            </div>
            <div className='flex gap-1 items-center font-bold text-primaryA1'>
            <a
                href={response?.file_path}
                download // This hints the browser to download instead of opening
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-primaryA1 text-white rounded hover:bg-primaryA2"
                >
                    <IoMdDownload size={24} title='Download PDF' className='hover:cursor-pointer'/>
                </a>
                
            </div>
        </div>

        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
            response?.targets?.map((r)=>{
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
