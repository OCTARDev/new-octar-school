"use client";
import useFetchSinglePlan from '@/tanstack-query/Home/Subscription/useFetchSinglePlan';
import React, { useState } from 'react'
import SubscribeCard from '../Card';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { useForm } from 'react-hook-form';
import MultiChoiceSelect from '@/components/MultipleChoiceSelect';
import ConfirmRequest from '../ConfirmRequest';
import useCheckSub from '@/tanstack-query/Home/Subscription/useCheckSub';
import { useTranslations } from 'next-intl';

export default function SubscribeForm({planId}) {
    const t = useTranslations("subscribe");
    const {data,isSuccess,isError,isLoading,error} = useFetchSinglePlan({planId});
    const [isExpanded, setIsExpanded] = useState(false);
    const [requestData,setRequestData] = useState({});
    const subs = data?.data?.data?.subscriptions;
    const levels = data?.data?.data?.levels;

    const handleOpenModal = (data) =>{
        setIsExpanded(true);
        setRequestData(data)
      }
      const handleCloseModal = ()=>{
        setIsExpanded(false);
      }
    const {handleSubmit,formState:{errors} , register , setValue}  = useForm();


    const checkOnSuccess =(data)=>{
        handleOpenModal(data);
        
    };
    const checkOnError = (e)=>{
        console.log(e);
    }
    const check = useCheckSub({onSuccess:checkOnSuccess,onError:checkOnError});
    const onSubmit = (data)=>{
        check.mutate({...data,subscription_plan_id:planId})
    }
    
  return (
    <>
        <ConfirmRequest
        isExpanded={isExpanded} 
        handleCloseModal={handleCloseModal} 
        data={requestData}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
            <div className='w-3/6'>
                <SubscribeCard p={subs}/>
            </div>
            </ErrorBoundary>
            <form className='flex flex-col gap-3 capitalize' onSubmit={handleSubmit(onSubmit)}>
                {/* Select Level */}
                {
                subs?.type === "custom"  && 
                <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">{t("levels")}</label>
                        <MultiChoiceSelect
                        selectId={"level_ids"}
                        options={levels} 
                        setValue={setValue}
                        placeholder={t("levels_placeholder")}
                        />
                        {errors.levels && (
                        <span className="text-red-500 text-sm">{errors.levels.message}</span>
                        )}
                    </div>
                    </ErrorBoundary>
                }
                {/* Number Of Seats */}
                {
                subs?.type === "custom"  && 
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-gray-600'>{t("seats")}</label>
                    <input 
                        className='border rounded-lg p-3'
                        placeholder={t("seats_placeholder")}
                        type='number'
                        {...register("number_seats")}
                    />
                </div>
                }
                
                <div className=''>
                    <textarea
                        className='p-3 border rounded-lg w-full'
                        rows={4} 
                        placeholder={t("message_placeholder")}
                        {...register("message")}
                    />
                </div>
                <button className='btn btn-primary'>{t("button")}</button>
            </form>
            
        </div>
    </>
    
  )
}
