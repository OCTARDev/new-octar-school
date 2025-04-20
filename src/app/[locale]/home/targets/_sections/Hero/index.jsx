import React from 'react'
import hero from "@/assets/home/hero.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function TargetHeroSection({data}) {
    const t = useTranslations("target");
  return (
    <section className='px-4 mt-24 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-2 md:col-span-2'>
                <h1 className='text-4xl font-extrabold leading-relaxed'>
                    {data?.title}
                </h1>
                <p>
                    {data?.description}
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
