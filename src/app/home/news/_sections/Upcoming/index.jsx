import React from 'react';
import timeMangement from "@/assets/news/time-mangement.png";
import Image from 'next/image';

export default function NewsUpcomingSection() {
  return (
    <section className='py-6 my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* Left */}
            <div className='flex justify-center'>
                <Image 
                src={timeMangement}
                alt='Business planning and time management'
                className='max-w-full object-cover'
                />
            </div>
            {/* Right */}
            <div className='flex flex-col gap-3 justify-center'>
                <h4 className='font-bold text-3xl'>Upcoming Events</h4>
                <p className='mt-4'>
                    Join us for our next webinar or workshop,
                    where we explore the intersection of AR and education, 
                    showcasing how OCTAR transforms classrooms worldwide.
                </p>
                <div>
                    <button className='btn btn-primary'>Join Our Next Webinar</button>
                </div>
            </div>
        </div>
    </section>
  )
}
