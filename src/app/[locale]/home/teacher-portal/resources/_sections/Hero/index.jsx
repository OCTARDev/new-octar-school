import Image from 'next/image'
import React from 'react'
import img from "@/assets/home/teacher-portal/resources/resources-hero.png";


export default function ResourcesHeroSection() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto'>
      <div>
        <h2 className='font-bold text-3xl mb-2'>
            <span className='text-primaryA1'>OCTAR </span>
            Rewards & Resources
        </h2>
        <p>Engage, compete, and access exclusive teaching materials designed just for you.</p>
      </div>
      <div>
        <Image
            width={800}
            height={800}
            className='w-full h-full object-cover'
            src={img}
            alt='Resources & Rewards Hero Image'
        />
      </div>
    </section>
  )
}
