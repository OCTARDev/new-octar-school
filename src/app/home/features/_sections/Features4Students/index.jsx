import Image from 'next/image'
import React from 'react'
import student from "@/assets/home/student.png";



export default function Features4StudentsSection() {
  return (
    <section className='py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* left */}
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold text-3xl'>For Students</h4>
                <p>
                    OCTAR turns learning into fun, interactive adventures that boost 
                    retention and encourage cognitive, emotional, and physical growth.
                </p>
                <div>
                    <button className='btn btn-primary'>See How Students Benefit from OCTAR</button>
                </div>
            </div>
            {/* right */}
            <div className='flex md:justify-end'>
                <Image 
                src={student}
                className='max-w-full'
                alt='Web design, color picker and palette'/>
            </div>
        </div>
    </section>
  )
}
