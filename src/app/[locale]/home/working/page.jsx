import React from 'react'
import WorkingHeroSection from './_sections/Hero'
import WorkingForSchoolsSection from './_sections/ForSchools'
import WorkingHowItWorksSection from './_sections/HowitWorks'

export default function HowitWorks() {
  return (
    <div className='capitalize'>
        <WorkingHeroSection />
        <WorkingForSchoolsSection />
        <WorkingHowItWorksSection />
    </div>
  )
}
