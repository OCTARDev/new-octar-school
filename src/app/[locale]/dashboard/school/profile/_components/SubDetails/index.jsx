import { useTranslations } from 'next-intl'
import React from 'react'

export default function SubDetailsSection({subs}) {
    const t = useTranslations("dashboard.school.profile.subs");    
  return (
    <section className='rounded-lg border p-3 '>
        <h1 className='mb-4 text-center text-lg font-bold'>{t("header")}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("title")}</h2>
                <span className='text-primaryA1 font-bold'>{subs?.title}</span>
            </div>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("status")}</h2>
                <span className='text-primaryA1 font-bold'>{subs?.status}</span>
            </div>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("price")}</h2>
                <p className='text-primaryA1 font-bold'>
                    <span>{subs?.price}</span>
                    <span>{subs?.currency}</span>
                </p>
            </div>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("period")}</h2>
                <span className='text-primaryA1 font-bold'>{subs?.period}</span>
            </div>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("type")}</h2>
                <span className='text-primaryA1 font-bold'>{subs?.type}</span>
            </div>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("num_seats")}</h2>
                <span className='text-primaryA1 font-bold'>{subs?.num_seats}</span>
            </div>
            <div className='flex gap-2 border p-2 rounded-lg justify-between px-4'>
                <h2>{t("renew")}</h2>
                <span className='text-primaryA1 font-bold'>{subs?.renew_subscription_date}</span>
            </div>
        </div>
        
    </section>
  )
}
