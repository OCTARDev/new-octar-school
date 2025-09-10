"use client";
import React, { useState } from 'react'
import ResourcesHeroSection from './_sections/Hero'
import useIndexTeacherPortalResources from '@/tanstack-query/Home/Teacher-Portal/Resouces/useIndex'
import ErrorBoundary from '@/components/ErrorBoundary';
import { AnimatePresence } from 'framer-motion';
import ToggleSelector from './_sections/ToggleSelector';
import Pagination from '@/components/Pagination';
import ResourcesImagesSection from './_sections/Images';
import ResourcesVideosSection from './_sections/Videos';
import ResourcesReadySection from './_sections/Resources';

export default function ResourcesPage() {
    const [page,setPage] = useState(1);
    const [type,setType] = useState("image")
    const {data,...methods} = useIndexTeacherPortalResources({page,type});
    const response = data?.data?.data;
    console.log(response);
    
    return (
    <div className='my-10'>
      <ResourcesHeroSection />
        <ErrorBoundary {...methods}>
          <AnimatePresence>
            <>
                <ToggleSelector 
                setType={setType}
                type={type}
                />
                {
                    type === "image" ? (
                        <ResourcesImagesSection data={response?.posts?.data}/>
                    ): (
                        <ResourcesVideosSection data={response?.posts?.data}/>
                    )
                }
                <Pagination currentPage={page} onPageChange={setPage} totalPages={response?.posts?.total_pages}/>
            </>
          </AnimatePresence>
          <ResourcesReadySection data={response?.resources}/>
        </ErrorBoundary>  
    </div>
    )
}
