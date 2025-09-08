"use client";
import React, { useState } from 'react'
import HeroSection from './_sections/Hero'
import UploadSection from './_sections/Upload'
import ShareSection from './_sections/Share'
import useIndexTeacherPortalClassShare from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useIndex';
import ErrorBoundary from '@/components/ErrorBoundary';
import HightlightSection from './_sections/Highlight';

export default function ClassSharingPage() {
  const [page,setPage] = useState(1);
  const {data,...methods} = useIndexTeacherPortalClassShare(page);
  const response = data?.data?.data;
  

  return (
    <div className='my-10 px-4 flex flex-col gap-8 md:gap-24 max-w-6xl mx-auto'>
      <HeroSection />
      <UploadSection />
      <ErrorBoundary {...methods}>
        <ShareSection data={response?.share_classrooms} page={page} setPage={setPage}/>
        <HightlightSection data={response?.highlight}/>
      </ErrorBoundary>
    </div>
  )
}
