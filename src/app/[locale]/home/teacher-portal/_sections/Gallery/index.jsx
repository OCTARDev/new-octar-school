"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import GalleryComponent from '@/components/TeacherGallery'
import useIndexTeacherPortalHome from '@/tanstack-query/Home/Teacher-Portal/Home/useIndex';
import React from 'react'

export default function GallerySection() {
    const {data,...methods} = useIndexTeacherPortalHome();
    const response = data?.data?.data?.features;
    
    return (
        <div className='max-w-6xl mx-auto'>
            <ErrorBoundary  {...methods}>
                <GalleryComponent data={response} />
            </ErrorBoundary>
        </div>
    )
};