"use client";
import React, { useState } from 'react'
import HomeSubsSection from '../_sections/Subscription'
import usePaymentHistory from '@/tanstack-query/School/Subs/usePaymentHistory'
import ErrorBoundary from '@/components/ErrorBoundary';
import HistoryTableSection from './_sections/HistoryTable';
import SubHeroSection from './_sections/Hero';

export default function SubDetails() {
    const [page,setPage] = useState(1);
    const {data,isLoading,isError,isSuccess,error} = usePaymentHistory({page});
    const dashboard = data?.data?.data;
  return (
    <div className='flex flex-col gap-6'>
        <SubHeroSection />
        <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
            <HomeSubsSection dashboard={dashboard} showTitle={false}/>
            <HistoryTableSection dashboard={dashboard} setPage={setPage}/>
        </ErrorBoundary>
    </div>
  )
}
