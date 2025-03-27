"use client";
import useFetchPlans from '@/tanstack-query/Home/Subscription/useFetchPlans';
import React, { useState } from 'react'
import PlanType from '../../_components/PlanType';

import PlanCard from '../../_components/Card';
import { useTranslations } from 'next-intl';
export default function PricingPlansSection() {
    const t = useTranslations("pricing");
    const {data,isLoading,isError,isSuccess,error} = useFetchPlans();
    const [type,setType] = useState("monthly");
    const plans = data?.data?.data;
    
  return (
    <section className='my-6'>
        <div className='max-w-screen-xl mx-auto px-4 '>
            <h2 className='text-3xl font-bold mb-8'>{t("header")}</h2>
            <h4 className='font-semibold'>{t("description")}</h4>
            <PlanType setValue={setType} value={type}/>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {
                    plans && plans[type]?.map((p,i)=>{
                        return(
                            <PlanCard p={p} key={p.id}/>
                        )
                    })
                }
            </div>
            
        </div>
    </section>
  )
}
