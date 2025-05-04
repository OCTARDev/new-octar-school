import React from 'react';
import hero from "@/assets/home/hero.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default  function EraHeroSection() {
    const t = useTranslations("home.newera.hero");
  return (
    <section className='px-4 mt-24 py-6 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-start max-w-screen-xl mx-auto '>
            {/* left  */}
            <div className='flex flex-col gap-4 '>
             <h1 className='text-4xl font-bold'>
                <span className='text-primaryA1'>{t("octar")}</span>
                <span>:{t("header")}</span>
             </h1>
             <p className='font-semibold text-sm'>{t("p1")}</p>
             <p className='font-semibold text-sm'>{t("p2")}</p>
             <h2 className='text-2xl font-bold'>{t("h3")}</h2>
             <p className='font-semibold text-sm'>{t("p3")}</p>
            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image src={hero} className={"max-w-full"} alt={"hero image"}/>
            </div>
        </div>
    </section>
  )
}
