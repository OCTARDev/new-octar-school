import Image from 'next/image'
import React from 'react'
import district from "@/assets/home/district.png";
import institue from "@/assets/home/institue.png";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslations } from 'next-intl';

export default function CaseStudiesSection() {
    const t = useTranslations("home.case");
  return (
    <section className='px-4 py-6 my-10'>
        <div className='text-center flex flex-col gap-3 items-center'>
            <h5 className='font-bold text-3xl'>{t("header")}</h5>
            <p>{t("description")}</p>
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
                    <h6 className='font-bold text-2xl'>{t("b1")}</h6>
                    <p className=''>{t("b2")}</p>
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
                    <span className='text-xs'>{t("h1")}</span>
                    <h6 className='font-bold text-xl'>{t("h2")}</h6>
                    <div className='text-sm underline text-statusSuccess flex items-center gap-1'>
                        <span>{t("h3")}</span>
                        <span><LuArrowUpRight size={20}/></span>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4 max-w-screen-xl mx-auto my-10'>
            <button className='btn btn-primary flex gap-2 items-center'>
                <span>{t("button")}</span>
                <span><LuArrowUpRight size={24}/></span>
            </button>
        </div>
    </section>
  )
}
