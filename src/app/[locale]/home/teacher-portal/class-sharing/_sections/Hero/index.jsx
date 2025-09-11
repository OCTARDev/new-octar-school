"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import hero from "@/assets/home/teacher-portal/class-sharing/sharing-hero.png";

export default function HeroSection() {
    const t = useTranslations("home.teacher-portal.class-sharing.hero");
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center '>
            {/* left  */}
            <div className='flex flex-col gap-2 capitalize'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    {t("share")}
                    <span className='mx-1 text-primaryA1 uppercase'> {t("octar")}</span> 
                    {t("community")}
                </p>
                <p>
                    {t("p")}
                </p>
            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image 
                src={hero} 
                className={"w-full h-full"} 
                alt={"hero image"}
                width={600} 
                height={600} 
                quality={100}
                />
            </div>
        </div>

    )
}
