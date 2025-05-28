"use client";
import React from 'react';
import hero from "@/assets/home/hero.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default  function HeroSection() {
    const t = useTranslations("home.hero");
  return (
    <motion.section 
    initial={{ opacity: 0 , y:"-100vh"}}
    animate={{ opacity: 1 , y:0}}
    transition={{ duration: 1.5 , type:"spring" ,ease:"easeInOut" }}
    className='px-4 mt-24 py-6 '>
        {/* <Loader /> */}
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
                <div className='w-fit'>
                    <Link className='btn btn-primary' href={`/dashboard/school`}>
                        {t("button")}
                    </Link>
                </div>

            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image src={hero} className={"max-w-full w-5/6"} alt={"hero image"}/>
            </div>
        </div>
    </motion.section>
  )
}
