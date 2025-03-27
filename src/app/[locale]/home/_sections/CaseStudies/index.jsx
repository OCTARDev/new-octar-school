import Image from 'next/image'
import React from 'react'
import district from "@/assets/home/district.png";
import institue from "@/assets/home/institue.png";
import { LuArrowUpRight } from "react-icons/lu";

export default function CaseStudiesSection() {
  return (
    <section className='px-4 py-6 my-10'>
        <div className='text-center flex flex-col gap-3 items-center'>
            <h5 className='font-bold text-3xl'>Case Studies & Testimonials</h5>
            <p>OCTAR has already been adopted by schools with great success. Here are some case studies</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto my-10'>
            {/* Left */}
            <div className='border rounded-xl shadow-md p-6'>
                <div className='flex justify-center'>
                    <Image 
                    src={district}
                    alt='school district x'
                    className='max-w-full'

                    />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h6 className='font-bold text-2xl'>School District X</h6>
                    <p className=''>Increased student engagement and retention rates by 40% with AR-enhanced history lessons.</p>
                </div>
            </div>
            {/* Right */}
            <div className='border rounded-xl shadow-md p-6'>
                <div className='flex flex-col justify-center'>
                    <Image 
                    src={institue}
                    alt='school district x'
                    className='max-w-full'

                    />
                </div>
                <div className='flex flex-col  gap-2'>
                    <span className='text-xs'>Web development</span>
                    <h6 className='font-bold text-xl'>Imam Alkisai Institute of America</h6>
                    <div className='text-sm underline text-statusSuccess flex items-center gap-1'>
                        <span>Explore All Services</span>
                        <span><LuArrowUpRight size={20}/></span>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4 max-w-screen-xl mx-auto my-10'>
            <button className='btn btn-primary flex gap-2 items-center'>
                <span>Read More Case Studies</span>
                <span><LuArrowUpRight size={24}/></span>
            </button>
        </div>
    </section>
  )
}
