"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import hero from "@/assets/home/teacher-portal/plan/plan-hero.png";

export default function PlanHeroSection() {
    const t = useTranslations("home.teacher-portal.home.hero");
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center   '>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    Plan your lessons smartly with 
                    <span className='mx-1 text-primaryA1 uppercase'> OCTAR</span> 
                </p>
                <p>
                    Take advantage of tools to organize your lessons, 
                    and get innovative ideas and activities for every grade and subject.
                </p>
            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image 
                src={hero} 
                className={"h-full w-full"} 
                alt={"hero image"}
                width={400}
                height={600}
                quality={100}
                />
            </div>
        </div>

    )
}
