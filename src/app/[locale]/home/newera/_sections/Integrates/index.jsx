import Image from 'next/image'
import React from 'react'
import workspallete from "@/assets/home/integrates.png";
import { useTranslations } from 'next-intl';
import CheckSVG from '@/components/CheckSvg';



export default  function EraIntegratesSection() {
    const t =  useTranslations("home.newera.integrates");
  return (
    <section className='py-6 my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* left */}
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold text-3xl'>{t("header")}</h4>
                <p>{t("body")}</p>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <CheckSVG />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>{t("h1")}</h6>
                        <p className=''>{t("p1")}</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <CheckSVG />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>{t("h2")}</h6>
                        <p className=''>{t("p2")}</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <CheckSVG />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>{t("h3")}</h6>
                        <p className=''>{t("p3")}</p>
                    </div>
                </div>
            </div>
            {/* right */}
            <div>
                <Image 
                src={workspallete}
                className='max-w-full'
                alt='Web design, color picker and palette'/>
            </div>
        </div>
    </section>
  )
}
