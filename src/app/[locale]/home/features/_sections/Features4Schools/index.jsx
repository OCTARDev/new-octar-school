import Image from 'next/image'
import React from 'react'
import parents from "@/assets/home/parents.png";



export default function Features4SchoolsSection() {
  return (
    <section className='py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* left */}
            <div className='flex md:justify-start'>
                <Image 
                src={parents}
                className='max-w-full'
                alt='Web design, color picker and palette'/>
            </div>
            {/* right */}
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold text-3xl'>For School</h4>
                <p>
                    OCTAR supports schools by enhancing curriculum delivery, 
                    improving learning outcomes, 
                    and providing a competitive edge through the use of innovative AR technology
                </p>
                <div>
                    <button className='btn btn-primary'>Learn More for Schools</button>
                </div>
            </div>
        </div>
    </section>
  )
}
