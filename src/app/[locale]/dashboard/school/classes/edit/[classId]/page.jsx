import React from 'react'

import EditTeacherSection from '../../_sections/Edit';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

export default async function index({params}) {
    const {classId} = await params;
  return (
    <div className='flex flex-col gap-6'>
        <section className='flex gap-1 items-center'>
            <FaAngleLeft />
            <Link className='text-primaryDarkest' href={"/dashboard/school/classes"}>Back</Link>
        </section>
        <EditTeacherSection id={classId}/>
    </div>
  )
}
