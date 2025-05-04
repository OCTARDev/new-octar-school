import React from 'react';
import hero from "@/assets/home/hero.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default  function WorkingHeroSection() {
    const t = useTranslations("home.working.hero");
  return (
    <section className='px-4 mt-24 py-6 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <h1 className='text-4xl font-bold leading-relaxed'>
                    <span className='text-primaryA1'>{t("octar")}</span>
                    <span>:{t("header")}</span>
                </h1>
                <p className='font-semibold text-sm'>
                {t("p")}
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
