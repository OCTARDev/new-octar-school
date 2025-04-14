import React from 'react'
import SubscribeForm from '../_components/SubscribeForm';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function SubscribeToPlan({params}) {
  const {planId} = await params;
  const t = await getTranslations("subscribe");
  return (
    <div>
        <div className='max-w-screen-xl mx-auto px-10 flex flex-col gap-4 py-10 capitalize'>
            <Link className='flex gap-2 items-center hover:text-primaryA1 font-semibold' href={"/home/pricing"}>
                <FaArrowLeft />
                <span>{t("cancel")}</span>
            </Link>
            <p className='text-gray-600 font-semibold'>{t("description")}</p>
            <SubscribeForm planId={planId}/>
        </div>
    </div>
  )
}
