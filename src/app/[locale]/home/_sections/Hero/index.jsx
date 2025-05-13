import React from 'react';
import hero from "@/assets/home/hero.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default  function HeroSection() {
    const t = useTranslations("home.hero");
  return (
    <section className='px-4 mt-24 py-6 border-b-2 border-black'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2'>
                <p className='text-4xl font-extrabold leading-relaxed'>
                    {t("welcome")}
                    <span className='mx-1 text-primaryA1 uppercase'> {t("octar")}</span> 
                    {t("where")} <br/>{t("learning")}
                </p>
                <p>
                {t("first")}<br/> {t("transforming")}
                </p>
                <div className=''>
                    <button className='btn btn-primary'>
                        {t("button")}
                    </button>
                </div>

            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image src={hero} className={"max-w-full w-5/6"} alt={"hero image"}/>
            </div>
        </div>
    </section>
  )
}
