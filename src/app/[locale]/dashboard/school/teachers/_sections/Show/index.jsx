"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeachers from '@/tanstack-query/School/Teachers/useShow'
import Image from 'next/image';
import React from 'react'
import ShowTableSection from '../ShowTable';

export default function ShowTeacherSection({id}) {
    const {data,isLoading,isSuccess,isError,error} = useShowTeachers({id});
    const teacher = data?.data?.data;
    console.log(teacher);
    
  return (
    <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
    <div className='flex flex-col gap-8  capitalize'>
        <div className='flex gap-4 items-center font-bold text-xl '>
            <span className=''>
                <img 
                src={teacher?.media_path}
                width={56}
                height={56}
                alt={teacher?.name}
                className='object-contain w-14 h-14 rounded-full'
                />
            </span>
            <span>{teacher?.name}</span>
        </div>
        <div className='flex flex-col gap-4 font-semibold md:w-3/6'>
            <p className='grid grid-cols-2'>
                <span>ID</span>
                <span>{teacher?.id}</span>
            </p>
            <p className='grid grid-cols-2'>
                <span>Name</span>
                <span>{teacher?.name}</span>
            </p>
            <p className='grid grid-cols-2 '>
                <span>Email</span>
                <span className='lowercase'>{teacher?.email}</span>
            </p>
            <p className='grid grid-cols-2'>
                <span>status</span>
                <span>{teacher?.status}</span>
            </p>
            <p className='grid grid-cols-2'>
                <span>classes count</span>
                <span>{teacher?.classes_count}</span>
            </p>

        </div>
        <ShowTableSection dashboard={teacher?.classes}/>
    </div>
    </ErrorBoundary>

  )
}
