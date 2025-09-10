"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeacherPortalPlan from '@/tanstack-query/Home/Teacher-Portal/Plan/useShow';
import { useParams } from 'next/navigation';
import React from 'react'
import PlanResourceHeroSection from './_sections/Hero';
import TitleSection from './_sections/Title';
import BodySection from './_sections/Body';
import NotesSection from './_sections/Notes';
import PlanTeachersSection from './_sections/Teachers';
import PlanUpdatesSection from './_sections/Updates';
import BackSection from '@/components/BackSection';

export default function PlanResource() {
    const {id} = useParams();
    const {data,...methods} = useShowTeacherPortalPlan(id);
    const response = data?.data?.data;
    /* console.log(response); */
    
  return (
    <div className='my-10'>
        <BackSection className='max-w-6xl mx-auto '/>
        <ErrorBoundary {...methods}>
            <PlanResourceHeroSection />
            <TitleSection data={response?.title}/>
            <BodySection 
            body={response?.description}
            image={response?.post_url}
            download={response?.file_url}
            />
            <NotesSection 
            id={id}
            author={response?.author}
            email={response?.email}
            />
            <PlanTeachersSection data={response?.plan_lesson_teachers}/>
            <hr className='border-[20px] border-primaryA1'/>
            <PlanUpdatesSection />
        </ErrorBoundary>
    </div>
  )
}
