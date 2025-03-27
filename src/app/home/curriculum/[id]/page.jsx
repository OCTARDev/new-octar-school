import React from 'react'
import CurriculumSection from '../_sections/Curriculum';

export default async function Curicuilum({params}) {
  const {id} = await params;
  
  return (
    <div>
        <CurriculumSection  id={id}/>
    </div>
  )
}
