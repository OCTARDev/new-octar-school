"use client";
import React from 'react'
import { FaPlay } from 'react-icons/fa';

export default function UsePortalSection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center max-w-6xl mx-auto'>
        {/* Left */}
        <div className='bg-gradient-primary p-3 w-full h-full rounded-lg  aspect-video flex items-center justify-center'>
            <FaPlay  className='text-white text-[80px]'/>
        </div>
        {/* Right */}
        <div>
            <h2 className='text-3xl font-bold mb-4'>How To Use The Portal</h2>
            <p>
                The OCTAR Teacher Portal is your space to share your experiences, plan your lessons, 
                and rely on the support of your colleagues.
                Start browsing the different sections, share your thoughts and books from your class, 
                and learn about the latest educational news related to your favorites.
            </p>
        </div>
    </div>
  )
}
