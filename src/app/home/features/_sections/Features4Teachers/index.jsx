import Image from 'next/image'
import React from 'react'
import teacher from "@/assets/home/teacher.png";



export default function Features4TeachersSection() {
  return (
    <section className='py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* left */}
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold text-3xl'>For Teachers</h4>
                <p>
                    OCTAR simplifies teaching, 
                    saves time with ready-made AR lessons, 
                    and keeps students engaged with interactive, 
                    immersive content
                </p>
                <div>
                    <button className='btn btn-primary'>Explore How OCTAR Supports Teachers</button>
                </div>
            </div>
            {/* right */}

            <div className='flex md:justify-end'>
                <Image 
                src={teacher}
                className='max-w-full'
                alt='Web design, color picker and palette'/>
            </div>
        </div>
    </section>
  )
}
