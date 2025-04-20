import BackSection from '@/components/BackSection';
import { getTranslations } from 'next-intl/server';
import React from 'react'
import SubscribeForm from '../_components/SubscribeForm';

export default async function SubscribeToPlanDashboard({params}) {
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
