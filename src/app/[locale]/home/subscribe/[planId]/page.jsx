import React from 'react'
import SubscribeForm from '../_components/SubscribeForm';
import { getTranslations } from 'next-intl/server';
import BackSection from '@/components/BackSection';

export default async function SubscribeToPlan({params}) {
  const {planId} = await params;
  const t = await getTranslations("subscribe");
  return (
    <div>
        <div className='max-w-screen-xl mx-auto px-10 flex flex-col gap-4 py-10 capitalize'>
            <BackSection title={t("cancel")}/>
            <p className='text-gray-600 font-semibold'>{t("description")}</p>
            <SubscribeForm planId={planId}/>
        </div>
    </div>
  )
}
