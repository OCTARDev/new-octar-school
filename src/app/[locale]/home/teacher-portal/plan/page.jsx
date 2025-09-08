import React from 'react'
import PlanHeroSection from './_sections/Hero'
import PlanLessonsSection from './_sections/Lessons'

export default function LessonPlanningPage() {
  return (
    <div className='my-10 px-4 flex flex-col gap-8 md:gap-24 max-w-6xl mx-auto'>
      <PlanHeroSection />
      <PlanLessonsSection />
    </div>
  )
}
