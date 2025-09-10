"use client";
import React, { useState } from 'react'
import SupportHeroSection from './_sections/Hero'
import useIndexTeacherPortalSupport from '@/tanstack-query/Home/Teacher-Portal/Support/useIndex';
import ToggleSelector from './_sections/ToggleSelector';
import SupportVideosSection from './_sections/Videos';
import Pagination from '@/components/Pagination';
import { AnimatePresence } from 'framer-motion';
import SupportPDFSection from './_sections/PDF';
import ErrorBoundary from '@/components/ErrorBoundary';
import ZoomMeetingSection from './_sections/Zoom';
import SupportFAQSection from './_sections/FAQ';
import SupportContactUsSection from './_sections/Contact';

export default function TeacherPortalSupportPage() {
    const [type,setType] = useState("video");
    const [page,setPage] = useState(1);

    const {data,...methods} = useIndexTeacherPortalSupport({type,page});
    const response = data?.data?.data;
    
    return (
        <div className='my-10'>
            <SupportHeroSection />
            <ErrorBoundary {...methods}>
            <AnimatePresence>
                <>
                    <ToggleSelector 
                    setType={setType}
                    type={type}
                    />
                    {
                        type === "video" ? (
                            <SupportVideosSection data={response?.material?.data}/>
                        ): (
                            <SupportPDFSection data={response?.material?.data}/>
                        )
                    }
                    <Pagination currentPage={page} onPageChange={setPage} totalPages={response?.material?.total_pages}/>
                </>
            </AnimatePresence>
            <ZoomMeetingSection data={response?.meeting}/>
            <SupportFAQSection data={response?.faqs}/>
            <SupportContactUsSection />
            </ErrorBoundary>
        </div>
    )
}
