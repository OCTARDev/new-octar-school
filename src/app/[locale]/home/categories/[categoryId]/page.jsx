import React from 'react'
import CategorySection from '../_sections/Category';

export default async function page({params}) {
    const {categoryId} = await params;
  return (
    <div>
        <CategorySection categoryId={categoryId}/>
    </div>
  )
}
