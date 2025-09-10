"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function BackSection({title,className=""}) {
    const router = useRouter();
    const t = useTranslations("components.backSection");
  return (
    <section className={`flex gap-1 items-center text-[#4B5768] hover:text-primaryA1 ${className}`}>
        <FaAngleLeft />
        <button className='text-primaryDarkest capitalize font-semibold ' onClick={() => router.back()}>{title || t("back")}</button>
    </section>
  )
}
