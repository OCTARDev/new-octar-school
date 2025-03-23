import React from 'react'
import HeroSection from './_sections/Hero'
import Features4SchoolsSection from './_sections/Features4Schools'
import Features4StudentsSection from './_sections/Features4Students'
import Features4ParentsSection from './_sections/Features4Parents'
import Features4TeachersSection from './_sections/Features4Teachers'

export default function page() {
  return (
    <div>
      <HeroSection />
      <Features4SchoolsSection />
      <Features4StudentsSection />
      <Features4ParentsSection />
      <Features4TeachersSection />
    </div>
  )
}
