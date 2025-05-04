import React from 'react'
import SingleNewsSection from '../../_sections/Single';

export default async function SingleNews({params}) {
  const {id} = await params;
  
  return (
    <SingleNewsSection id={id}/>
  )
}
