"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa';

export default function BackSection({title="back"}) {
    const router = useRouter();
  return (
    <section className='flex gap-1 items-center text-[#4B5768] hover:text-primaryA1'>
        <FaAngleLeft />
        <button className='text-primaryDarkest capitalize font-semibold ' onClick={() => router.back()}>{title}</button>
    </section>
  )
}
