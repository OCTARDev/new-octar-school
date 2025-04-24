import React from 'react'
import { FaPalette } from "react-icons/fa";
import SubjectsSection from './_sections/Subjects';
import { getTranslations } from 'next-intl/server';
export default async function page() {
  const t = await getTranslations('dashboard.school.subjects');
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex gap-3 items-center mb-6'>
            <span className='rounded-full p-1 bg-primaryA3'><FaPalette size={20}/></span>
            <h1 className='text-lg font-bold'>{t("header")}</h1>
        </div>
        <SubjectsSection />
    </div>
  )
}
