import React from 'react'
import hero from "@/assets/home/hero.png";
import Image from 'next/image';


export default function ContactHeroSection() {
  return (
<section className='px-4 mt-24 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2 md:col-span-2'>
                <h1 className='text-4xl font-extrabold leading-relaxed'>
                    Getting Started with OCTAR
                </h1>
                <p>
                    Easily integrate OCTAR into your classroom with our 
                    step-by-step guide and teacher resources
                </p>

            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image src={hero} className={"max-w-full"} alt={"hero image"}/>
            </div>
        </div>
    </section>
  )
}
