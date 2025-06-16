"use client";
import Image from 'next/image';
import React, { use } from 'react'
import chatbot from "@/assets/contact-us/chatbot.png";
import Input from '@/components/Input';
import { FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import useContactUs from '@/tanstack-query/Home/useContactUs';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations("components.contactForm");
    const {register,handleSubmit,formState:{errors}}  = useForm();
    const onSuccess = (data)=>{
        console.log("re",data?.data);
        toast.success(data.data.message || "Message Sent Successfully")
    }
    const onError = (e)=>{
        console.log(e.response.data.message);
        toast.error(e.response.data.message || "Error Occurred")
    }
    const contactUs = useContactUs({onSuccess,onError});
    const onSubmit = (data)=>{
        contactUs.mutate(data);
    }
  return (
    <section className='py-4'>
        <div className='max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8 py-12 border border-gray-200 rounded-lg flex flex-col items-center gap-2'>
            <Image 
                src={chatbot}
                className='max-w-full object-cover'
                alt='Young Woman chatting with chatbot'
            />
            <h2 className='text-primaryA1 border-b border-primaryA1 font-extrabold'>{t("header")}</h2>
            <form className='flex flex-col gap-6 flex-grow md:w-4/6 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-primaryA1 font-extrabold'>{t("title")}</h3>
                <Input 
                    placeholder={t("form.namePlaceholder")}
                    icon = {<FaRegUser size={18} className='text-gray-400'/>}
                    register={register}
                    id={"name"}
                    type={"text"}
                    errors={errors}
                />
                <Input 
                    placeholder={t("form.emailPlaceholder")}
                    icon = {<MdMailOutline size={20} className='text-gray-400'/>}
                    register={register}
                    id={"email"}
                    type={"email"}
                    errors={errors}
                />
                <Input 
                    placeholder={t("form.phonePlaceholder")}
                    icon = {<FaPhoneAlt  size={20} className='text-gray-400'/>}
                    register={register}
                    id={"phone"}
                    type={"number"}
                    errors={errors}
                />
                <textarea
                    className='border gray-300 p-2 rounded-lg'
                    placeholder={t("form.messagePlaceholder")}
                    {...register("message")}
                    rows={4}
                />
                <button className='btn btn-primary'>{t("form.button")}</button>
            </form>
        </div>
    </section>
  )
}
