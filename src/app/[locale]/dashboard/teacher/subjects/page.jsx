import React from 'react'
import { FaPalette } from "react-icons/fa";
import SubjectsSection from './_sections/Subjects';
import { useTranslations } from 'next-intl';
export default function page() {
  const t = useTranslations('dashboard.teacher.subjects');
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
