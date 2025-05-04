import React from 'react'
import EraHeroSection from './_sections/Hero'
import EraForSchoolsSection from './_sections/ForSchools'
import EraIntegratesSection from './_sections/Integrates'
import EraInvestementSection from './_sections/Investment'

export default function NewEra() {
  return (
    <div className='capitalize'>
        <EraHeroSection />
        <EraForSchoolsSection />
        <EraIntegratesSection />
        <EraInvestementSection />
    </div>
  )
}
