import React from 'react'
import howitworks from "@/assets/home/howitworks.png";
import Image from 'next/image';

export default function DifferentOctarSection() {
  return (
    <section className='py-10 md:py-6'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left image */}
            <div className='flex justify-center col-span-1 md:col-span-2'>
                <Image 
                src={howitworks}
                alt='man picking color on the color wheel' 
                className='max-w-full object-contain'
                />
            </div>
            {/* right content */}
            <div className='flex flex-col gap-4 col-span-1 md:col-span-3'>
                <h3 className='text-4xl font-bold'>Why OCTAR is Different</h3>
                <p>
                Unlike other AR tools or VR systems, 
                OCTAR combines coloring with interactive 3D experiences to keep kids physically active and engaged. 
                This immersive, hands-on approach promotes deeper understanding and makes learning more memorable.
                </p>
            </div>
        </div>
    </section>
  )
}
