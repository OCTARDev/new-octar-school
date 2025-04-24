import Link from 'next/link';
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { useTranslations } from 'use-intl';

export default function HomeSubsSection({dashboard,showTitle=true}) {
    const t = useTranslations('dashboard.school.home.sub');
    
  return (
    <div>
        <div className='flex flex-col gap-3'>
            {
            showTitle &&
            <h2 className='text-4xl font-bold capitalize'>{t("header")}</h2>
            }
            
            <div className='w-full bg-primaryA3 rounded-lg p-5 capitalize flex flex-col gap-6'>
                {/* header */}
                <div className='flex justify-between items-center gap-1'>
                    <div className='flex gap-2 items-center'>
                        <span>{t("h1")}</span>
                        <div className={`flex items-center font-semibold ${dashboard?.subscription?.status === "active" ? "text-statusSuccess" :"text-statusError"} `}>
                            <GoDotFill />
                            {
                            dashboard?.subscription?.status === "active" ?
                            <span className='text-sm'>{t("active")}</span> :
                            dashboard?.subscription?.status === "paused" ?
                            <span className='text-sm'>{t("pause")}</span> :
                            <span className='text-sm'>{t("inactive")}</span>
                            }
                        </div>
                    </div>
                    {/* <span className='text-primary-dark underline hover:cursor-pointer hover:text-primaryA1'>Change Plan</span> */}
                </div>
                {/* middle */}
                {
                dashboard?.subscription &&
                <div className='flex flex-col gap-1 mt-1'>
                    <div className='flex gap-2 items-end'>
                        <p className='text-4xl font-bold uppercase flex gap-1'>
                            <span>{dashboard?.subscription?.price}</span>
                            <span>{dashboard?.subscription?.currency}</span>
                        </p>
                        <span className='text-grey-light'>{dashboard?.subscription?.period}</span>
                    </div>
                    <span>{dashboard?.subscription?.num_seats} {t("seat")}</span>
                    <span>{t("renewSubs")}: {dashboard?.subscription?.renew_subscription_date}</span>
                    <span className='underline text-[#4B5768]'>{t("terms")}</span>
                </div>
                }
                
                <div className='flex justify-end'>
                    <Link className='btn btn-primary ' href={`/dashboard/school/sub-details/manage`}>
                        {t("upgrade")}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
