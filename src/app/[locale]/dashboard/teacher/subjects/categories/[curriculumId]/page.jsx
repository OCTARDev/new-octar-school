import React from 'react'
import { FaPalette } from 'react-icons/fa'
import CategoriesSection from '../../_sections/Categories';
import { getTranslations } from 'next-intl/server';

export default async function Categories({params}) {
    const {curriculumId} = await params;
    const t = await getTranslations("dashboard.teacher.subjects");
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-3 items-center mb-6'>
            <span className='rounded-full p-1 bg-primaryA3'><FaPalette size={20}/></span>
            <h1 className='text-lg font-bold'>{t("header")}</h1>
        </div>
        <CategoriesSection id={curriculumId}/>
    </div>
  )
}
