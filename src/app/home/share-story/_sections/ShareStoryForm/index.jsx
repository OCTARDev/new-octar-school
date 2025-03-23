"use client";
import Image from 'next/image';
import React from 'react'
import assembling from "@/assets/share-story/assembling-blocks.png";
import Input from '@/components/Input';
import { FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import { IoCloudUploadOutline } from "react-icons/io5";
export default function ShareStoryFormSection() {
        const {register,handleSubmit,formState:{errors}}  = useForm();
        const onSubmit = (data)=>{
    
        }
    return (
        <section className='py-4'>
            <div className='max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8 py-12 border border-gray-200 rounded-lg flex flex-col items-center gap-2'>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold'>Share Your Story</h3>
                    <Image 
                        src={assembling}
                        className='max-w-full object-cover'
                        alt='Man assembling user interface from blocks'
                    />
                </div>
                <form className='flex flex-col gap-6 flex-grow md:w-4/6 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        className='border-2 gray-300 p-2 rounded-lg'
                        placeholder='Descripe Your Story'
                        rows={4}
                    />
                    <div >
                        <div className='input-control flex justify-between px-4 text-gray-400'>
                            <label 
                            htmlFor='upload'
                            className='py-3 px-2 hover:cursor-pointer flex justify-between w-full'>
                                <input
                                type='file'
                                hidden
                                id='upload'
                                />
                                <span>Upload Image Or Video</span>
                                <span><IoCloudUploadOutline size={22} className='text-gray-800'/></span>
                            </label>
                        </div>
                        
                    </div>
                    <button className='btn btn-primary' type='submit'>Send</button>
                </form>
            </div>
        </section>
      )
}
