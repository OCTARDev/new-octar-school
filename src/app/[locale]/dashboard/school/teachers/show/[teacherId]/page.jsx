import Link from 'next/link';
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import ShowTeacherSection from '../../_sections/Show';

export default async function page({params}) {
    const {teacherId} = await params;

  return (
    <div className='flex flex-col gap-6'>
        <section className='flex gap-1 items-center'>
            <FaAngleLeft />
            <Link className='text-primaryDarkest' href={"/dashboard/school/teachers"}>Back</Link>
        </section>
        <ShowTeacherSection id={teacherId}/>
    </div>
  )
}
