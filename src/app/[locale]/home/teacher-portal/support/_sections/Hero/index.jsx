import Image from 'next/image'
import React from 'react'
import img from "@/assets/home/teacher-portal/support/support-hero.png";


export default function SupportHeroSection() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto'>
      <div>
        <h2 className='font-bold text-3xl mb-2'>
            <span className='text-primaryA1'>OCTAR </span>
            Support & Help
        </h2>
        <p>All the help and guidance you need in one place</p>
      </div>
      <div>
        <Image
            width={400}
            height={800}
            className='w-full h-full object-cover'
            src={img}
            alt='Support Hero Image'
        />
      </div>
    </section>
  )
}
