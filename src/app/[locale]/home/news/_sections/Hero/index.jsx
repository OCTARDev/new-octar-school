import React from 'react';
import comingSoon from "@/assets/news/coming-soon.png";
import Image from 'next/image';

export default function NewsHeroSection() {
  return (
    <section className='py-6 my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* Left */}
            <div>
                <h4 className='font-bold text-3xl'>Latest News</h4>
                <p className='mt-4'>Stay updated on the latest feature releases, partnerships, and events happening at OCTAR.</p>
            </div>
            {/* Right */}
            <div className='flex justify-center'>
                <Image 
                src={comingSoon}
                alt='Coming soon'
                className='max-w-full object-cover'
                />
            </div>
        </div>
    </section>
  )
}
