"use client";
import React from 'react'
import FeedBackHeroSection from './_sections/Hero'
import FeedbackUpdatesSection from './_sections/Updates'
import useIndexTeacherPortalFeedback from '@/tanstack-query/Home/Teacher-Portal/Feedback/useIndex';
import ErrorBoundary from '@/components/ErrorBoundary';
import FeedbackFormSection from './_sections/FeedbackForm';
import FeedbackVoteSection from './_sections/Vote';

export default function FeedBackPage() {
  const {data,...methods} = useIndexTeacherPortalFeedback();
  const response = data?.data?.data;
/*   console.log(response); */
  
  return (
    <div className='my-10'>
      <FeedBackHeroSection />
      <ErrorBoundary {...methods}>
      <FeedbackUpdatesSection data={response?.features}/>
      </ErrorBoundary>
      <FeedbackFormSection />
      <ErrorBoundary {...methods}>
      <FeedbackVoteSection data={response?.vote}/>
      </ErrorBoundary>
    </div>
  )
}
