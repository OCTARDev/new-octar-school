import React from 'react'

import EditTeacherSection from '../../_sections/Edit';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';
import BackSection from '@/components/BackSection';

export default async function index({params}) {
    const {classId} = await params;
  return (
    <div className='flex flex-col gap-6'>
        <BackSection />
        <EditTeacherSection id={classId}/>
    </div>
  )
}
