import React from 'react'
import CurriculumSection from '../_sections/Curriculum';
import CurriculumHeroSection from '../_sections/Hero';

export default async function Curicuilum({params}) {
  const {id} = await params;
  
  return (
    <div>
        <CurriculumHeroSection />
        <CurriculumSection  id={id}/>
    </div>
  )
}
