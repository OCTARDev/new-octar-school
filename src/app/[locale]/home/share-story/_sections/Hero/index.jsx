import Image from 'next/image'
import React from 'react'
import hero from "@/assets/home/hero.png";


export default function StoryHeroSection() {
  return (
    <section>
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 items-center py-6 px-3 text-center md:text-start '>
            {/* Left */}
            <div className='md:col-span-2'>
                <h1 className='text-4xl font-bold'>Share Your Story With OCTAR</h1>
            </div>
            {/* Right */}
            <div className='flex justify-center'>
                <Image 
                    src={hero}
                    alt='hero image'
                    className='max-w-full sm:w-4/6'
                />
            </div>
        </div>
    </section>
  )
}
