import React from 'react'
import howitworks from "@/assets/home/howitworks.png";
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';


export default async function HowItWorksSection() {
    const t = await getTranslations("home.howitworks")
  return (
    <section className='py-6 md:py-0'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left image */}
            <div className='flex justify-center col-span-1 md:col-span-2'>
                <Image 
                src={howitworks}
                alt='man picking color on the color wheel' 
                className='max-w-full object-contain'
                />
            </div>
            {/* right content */}
            <div className='flex flex-col gap-4 col-span-1 md:col-span-3'>
                <h3 className='text-4xl font-bold'>{t("title")}</h3>
                <p>
                    {t("body")}
                </p>
                <div>
                    <button className='btn btn-primary'>
                        {t("button")}
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
