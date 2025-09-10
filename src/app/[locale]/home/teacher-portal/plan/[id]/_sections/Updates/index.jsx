import Image from 'next/image'
import React from 'react'
import img from "@/assets/home/teacher-portal/plan/plan-updates.png";


export default function PlanUpdatesSection() {
  return (
    <section className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-10 items-center'>
        <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-bold mb-3'>Sign Up To Receive Updates</h2>
            <p>You won`t want to miss out on any of our exciting new products.</p>
            <button className='btn btn-primary '>Sign Up To OCTAR Newsletter</button>
        </div>
        <div>
            <Image 
            width={400}
            height={600}
            alt='Updates Image'
            src={img}
            className='w-full max-h-full object-cover'
            />
        </div>
    </section>
  )
}
