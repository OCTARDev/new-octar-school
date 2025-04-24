import React from 'react'
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import ClassSection from './_sections/Classes';
import { useTranslations } from 'next-intl';

export default function Classes() {
  const t = useTranslations("dashboard.school.classes");
  return (
    <div className='flex flex-col gap-4'>
      {/* top Header */}
      <div className='flex gap-3 items-center justify-between mb-6'>
          <div className='flex gap-3 items-center'>
            <span className='rounded-full p-1 bg-primaryA3'><FaPersonChalkboard size={20}/></span>
            <h1 className='text-lg font-bold'>{t("header")}</h1>
          </div>
          <div>
            <Link className='btn btn-primary flex items-center gap-2' href={"classes/add"}>
              <FaPlus /> 
              <span>{t("addBtn")}</span>
            </Link>
          </div>
      </div>
      {/* Teachers Section */}
      <ClassSection />
    </div>
  )
}
