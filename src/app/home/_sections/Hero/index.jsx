import React from 'react';
import hero from "@/assets/home/hero.png";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='px-4 mt-24 py-6 border-b-2 border-black'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    Welcome to 
                    <span className='mx-1 text-primaryA1'>OCTAR</span> 
                    — Where <br/>Learning Comes to Life
                </p>
                <p>
                The first real app to combine coloring with augmented reality,<br/> transforming education into an engaging, interactive adventure.
                </p>
                <div className=''>
                    <button className='btn btn-primary'>
                        Start Your Free Trial
                    </button>
                </div>

            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image src={hero} className={"max-w-full"} alt={"hero image"}/>
            </div>
        </div>
    </section>
  )
}
