import Image from 'next/image';
import React from 'react';
import teacher from "@/assets/home/teacher.png";
import { getTranslations } from 'next-intl/server';

export default async function Features4TeachersSection() {
    const t = await getTranslations("features.features4teachers");

    return (
        <section className='py-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
                {/* left */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-bold text-3xl'>{t('title')}</h4> {/* Dynamic title */}
                    <p>{t('description')}</p> {/* Dynamic description */}
                    <div>
                        <button className='btn btn-primary'>{t('button')}</button> {/* Dynamic button text */}
                    </div>
                </div>
                {/* right */}
                <div className='flex md:justify-end'>
                    <Image 
                        src={teacher}
                        className='max-w-full'
                        alt={t('imageAlt')} // Dynamic alt text
                    />
                </div>
            </div>
        </section>
    );
}
