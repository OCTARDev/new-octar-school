import Image from 'next/image'
import React from 'react'
import hero from "@/assets/home/hero.png";
import { useTranslations } from 'next-intl';


export default function HeroSection() {
    const t =  useTranslations("about.hero");
  return (
    <section className='px-4 mt-24 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    {t("h1")}
                    <span className='mx-1 text-primaryA1'>{t("h2")}</span>
                    {t("h3")}
                </p>
                <p>
                {t("p1")}
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
