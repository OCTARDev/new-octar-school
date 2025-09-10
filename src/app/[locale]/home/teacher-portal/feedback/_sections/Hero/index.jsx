import React from 'react'
import img from "@/assets/home/teacher-portal/feedback/feedback-hero.png";
import Image from 'next/image';


export default function FeedBackHeroSection() {
  return (
    <section className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* Left */}
        <div>
            <h2 className='font-bold text-3xl mb-3'>Share Your Feedback with <span className='text-primaryA1'>OCTAR</span></h2>
            <p>All the help and guidance you need in one place</p>
        </div>
        {/* Right */}
        <div>
            <Image 
            width={400}
            height={600}
            alt='Feedback Hero Image'
            src={img}
            className='w-full h-full object-cover'
            />
        </div>
    </section>
  )
}
