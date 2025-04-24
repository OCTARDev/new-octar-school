"use client";
import useFetchDashboard from '@/tanstack-query/School/Dashboard/useFetchDashboard';
import React, { useState } from 'react'
import HomeHeroSection from './_sections/Hero';
import ErrorBoundary from '@/components/ErrorBoundary';
import HomeSubsSection from './_sections/Subscription';
import HomeTableSection from './_sections/Table';

export default function School() {
  const [page,setPage] = useState(1);
  const {data,isError,isLoading,isSuccess,error} = useFetchDashboard({page});
  const dashboard = data?.data?.data;
  
  return (
    <div className='flex flex-col gap-6'>
      <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
        <HomeHeroSection dashboard={dashboard}/>
        <HomeSubsSection dashboard={dashboard}/>
        <HomeTableSection dashboard={dashboard} setPage={setPage} page={page}/>
      </ErrorBoundary>
    </div>
  )
}
