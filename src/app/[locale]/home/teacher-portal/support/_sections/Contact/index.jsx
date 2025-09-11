"use client";
import Image from 'next/image'
import React from 'react'
import img from "@/assets/home/teacher-portal/support/support-contact.png";
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { FaPhone, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import TextArea from '@/components/TextArea';
import useStoreSupportMessage from '@/tanstack-query/Home/Teacher-Portal/Support/useStore';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d{10,15}$/, "Enter a valid phone number"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default function SupportContactUsSection() {
    const {handleSubmit,formState:{errors},register,reset} = useForm({resolver:yupResolver(contactFormSchema)});
    const onSuccess = (data)=>{
        toast.success(data?.data?.message || "Message Sent Successfully");
        reset();
    };
    const onError = (e)=>{
        toast.error(e?.response?.data?.message || "Error Occurred")
    }
    const sendMessage = useStoreSupportMessage({onSuccess,onError});
    const onSubmit = (data)=>{
        console.log(data);
        sendMessage.mutate(data);
    }
    return (
        <section className='my-10 mx-auto max-w-6xl px-4'>
            <h2 className='text-3xl font-bold mb-3 text-center'>Contact Us</h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
                {/* Left */}
                <div>
                    <Image 
                    width={400}
                    height={600}
                    quality={100}
                    alt='Support Contact Us Image'
                    src={img}
                    className='w-full h-full'
                    />
                </div>
                {/* Right */}
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <Input 
                    register={register}
                    errors={errors}
                    id="name"
                    placeholder="Enter Your Name"
                    icon={<FaUser className='text-gray-500' />}
                    />
                    <Input 
                    register={register}
                    errors={errors}
                    id="email"
                    type={"email"}
                    placeholder="Enter Your Email"
                    icon={<IoMdMail className='text-gray-500' />}
                    />
                    <Input 
                    register={register}
                    errors={errors}
                    id="phone"
                    placeholder="Enter Your Phone"
                    icon={<FaPhone className='text-gray-500' />}
                    />
                    <TextArea 
                    register={register}
                    errors={errors}
                    id={"message"}
                    placeholder={"Enter Your Message"}
                    />
                    <button className='btn btn-primary w-full'>Send</button>
                </form>
            </div>
        </section>
    )
}
