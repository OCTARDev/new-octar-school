"use client";
import useFetchPlans from '@/tanstack-query/Home/Subscription/useFetchPlans';
import React, { useState } from 'react'
import PlanType from '@/components/PlanType';
import PlanCard from '@/components/PlanCard';
import { useTranslations } from 'next-intl';


export default function PricingPlansSection({href}) {
    const t = useTranslations("pricing");
    const {data,isLoading,isError,isSuccess,error} = useFetchPlans();
    const [type,setType] = useState("monthly");
    const plans = data?.data?.data;
    
  return (
    <section className='my-6 py-10'>
        <div className='max-w-screen-lg mx-auto px-4 '>
            <h2 className='text-3xl font-bold mb-8'>{t("header")}</h2>
            <h4 className='font-semibold'>{t("description")}</h4>
            <PlanType setValue={setType} value={type}/>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
                {
                    plans && plans[type]?.map((p,i)=>{
                        return(
                            <PlanCard p={p} key={p.id} href={href}/>
                        )
                    })
                }
            </div>
            
        </div>
    </section>
  )
}
