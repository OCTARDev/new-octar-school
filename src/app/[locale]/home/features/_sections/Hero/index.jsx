import React from 'react';
import hero from "@/assets/home/hero.png";
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HeroSection() {
  const t = await getTranslations("features.hero");

  return (
    <section className='px-4 mt-24 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto'>
            {/* left  */}
            <div className='flex flex-col gap-4'>
                <div className='mb-4'>
                    <h1 className='text-3xl font-bold'>{t('title')}</h1> {/* Dynamic title */}
                    <p>{t('description')}</p> {/* Dynamic description */}
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.1667L16 19.1667L29.3333 5.83333M28 16.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V7.16667C4 6.45942 4.28095 5.78115 4.78105 5.28105C5.28115 4.78095 5.95942 4.5 6.66667 4.5H21.3333" 
                            stroke="#6E75E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>{t('feature1.title')}</h6> {/* Dynamic feature title */}
                        <p>{t('feature1.description')}</p> {/* Dynamic feature description */}
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.1667L16 19.1667L29.3333 5.83333M28 16.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V7.16667C4 6.45942 4.28095 5.78115 4.78105 5.28105C5.28115 4.78095 5.95942 4.5 6.66667 4.5H21.3333" 
                            stroke="#6E75E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>{t('feature2.title')}</h6> {/* Dynamic feature title */}
                        <p>{t('feature2.description')}</p> {/* Dynamic feature description */}
                    </div>
                </div>
                <div>
                    <Link className='btn btn-primary' href={`/dashboard`}>
                        {t('button')}
                    </Link> {/* Dynamic button text */}
                </div>
            </div>
            {/* right */}
            <div className='flex justify-center'>
                <Image src={hero} className={"max-w-full"} alt={t('imageAlt')} /> {/* Dynamic alt text */}
            </div>
        </div>
    </section>
  );
}
