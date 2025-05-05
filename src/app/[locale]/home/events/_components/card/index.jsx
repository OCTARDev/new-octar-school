import { useTranslations } from 'next-intl';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa'
import { MdOutlineMessage } from 'react-icons/md';

export default function EventCard({card}) {
    const pathname = usePathname();
    const lastPathName = pathname.split("/");
    const firstLink = lastPathName[1];
    const t = useTranslations("events");
  return (
    <div className='rounded-lg overflow-hidden shadow-lg'>
        <div>
            <img 
                src={card?.media}
                className='w-full h-60 object-cover'
                alt={card?.title}
            />
        </div>
        <div className='mt-4 flex flex-col gap-2 p-4 capitalize'>
            <div className='flex justify-between items-center gap-1'>
                <div className='flex items-center gap-1'>
                    <FaCalendarAlt  className='text-primaryA1'/>
                    <span>{card?.event_date}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <MdOutlineMessage  className='text-primaryA1'/>
                    <span>{card?.attended} {t("attend")}</span>
                </div>

            </div>
            <div>
                <h3 className='font-bold text-lg'>{card?.title}</h3>
                <h6>{card?.sub_title}</h6>
            </div>
            <Link 
            href={`/${firstLink}/home/events/single/${card?.id}`}
            className='flex justify-end items-center gap-1 text-primaryA1 hover:text-primaryA2'>
                <span>{t("read")}</span>
                <span><FaArrowRight className={`${firstLink === "ar" ? "rotate-180":""}`}/></span>
            </Link>
        </div>
    </div>
  )
}
