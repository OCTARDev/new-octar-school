import Image from 'next/image';
import React from 'react';
import parents from "@/assets/home/parents.png";
import { getTranslations } from 'next-intl/server';

export default async function Features4ParentsSection() {
    const t = await getTranslations("features.features4parents");

    return (
        <section className='py-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
                {/* left */}
                <div className='flex md:justify-start'>
                    <Image 
                        src={parents}
                        className='max-w-full'
                        alt={t('imageAlt')} // Dynamic alt text
                    />
                </div>
                {/* right */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-bold text-3xl'>{t('title')}</h4> {/* Dynamic title */}
                    <p>{t('description')}</p> {/* Dynamic description */}
                    <div>
                        <button className='btn btn-primary'>{t('button')}</button> {/* Dynamic button text */}
                    </div>
                </div>
            </div>
        </section>
    );
}
