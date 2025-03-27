"use client";
import React from 'react'
import { useTranslations } from 'next-intl'
import HeroSection from './_sections/Hero';
import HowItWorksSection from './_sections/HowitWorks';
import TestimonialsSection from './_sections/Testimonials';
import ForSchoolsSection from './_sections/ForSchools';
import ForTeacherSection from './_sections/ForTeacher';
import ForParentsSection from './_sections/ForParents';
import ForStudentsSection from './_sections/ForStudents';
import CaseStudiesSection from './_sections/CaseStudies';

export default function Home() {
  const t = useTranslations();
  return (
    <div className=''>
      <HeroSection />
      <HowItWorksSection />
      <ForSchoolsSection />
      <ForTeacherSection />
      <ForParentsSection />
      <ForStudentsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
    </div>
  )
}
