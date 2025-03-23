import Image from 'next/image'
import React from 'react'
import hero from "@/assets/home/hero.png";


export default function HeroSection() {
  return (
    <section className='px-4 mt-24 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    What Is 
                    <span className='mx-1 text-primaryA1'>OCTAR</span>
                    ?
                </p>
                <p>
                OCTAR is an immersive, AR-powered learning tool that enhances early education through interactive, 3D experiences. 
                Tailored for kindergarten and primary school curricula, 
                it transforms traditional lessons into hands-on adventures, 
                where students engage with educational content dynamically
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
