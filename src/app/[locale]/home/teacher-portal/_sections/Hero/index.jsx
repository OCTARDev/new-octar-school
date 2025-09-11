"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import hero from "@/assets/home/teacher-portal/home/hero.png";

export default function HeroSection() {
    const t = useTranslations("home.teacher-portal.home.hero");
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center   '>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    {t("welcome")}
                    <span className='mx-1 text-primaryA1 uppercase'> {t("octar")}</span> 
                    {t("where")} <br/>{t("learning")}
                </p>
                <p>
                    {t("transforming")}
                </p>
            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image 
                src={hero} 
                className={"h-full object-cover w-full"} 
                alt={"hero image"}
                height={400}
                width={600}
                quality={100}
                />
            </div>
        </div>

    )
}
