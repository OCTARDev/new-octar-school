"use client";
import React, { useState } from 'react'
import HomeHeroSection from './_sections/Hero';
import ErrorBoundary from '@/components/ErrorBoundary';
import HomeTableSection from './_sections/Table';
import useFetchTeacherDashboard from '@/tanstack-query/Teacher/Dashboard/useFetchDashboard';

export default function School() {
  const [page,setPage] = useState(1);
  const {data,isError,isLoading,isSuccess,error} = useFetchTeacherDashboard({page});
  const dashboard = data?.data?.data;
  
  return (
    <div className='flex flex-col gap-6'>
      <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
        <HomeHeroSection dashboard={dashboard}/>
        <HomeTableSection dashboard={dashboard} setPage={setPage} page={page}/>
      </ErrorBoundary>
    </div>
  )
}
