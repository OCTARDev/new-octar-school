"use client";
import FormMediaComponent from '@/components/FormMedia';
import useStoreTeacherCommunityPost from '@/tanstack-query/Teacher/Community/useStore';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function AddPostSection() {
    const t = useTranslations("dashboard.teacher.community.add");
    const [image,setImage] = useState(null);
    const {register,handleSubmit,formState:{errors},setValue} = useForm({});
    const router = useRouter();
    const onSuccess = (data)=>{
        console.log(data);
        toast.success( data?.data?.message ||"Post Created Successfully");
        router.back();
    }
    const onError = (error)=>{
        console.log(error);
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
    const addPost = useStoreTeacherCommunityPost({onSuccess,onError});
    const onSubmit = (data)=>{
        addPost.mutate(data);
    };
  return (
    <section>
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='text-2xl font-bold'>{t("header")}</h1>
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='input-container'>
                    <input 
                    type="text" 
                    placeholder={t("titlePlaceholder")} 
                    {...register("title",{required:"Title is required"})}
                    />
                </div>
                <div className='input-container'>
                    <textarea 
                    {...register("description",{required:"Description is required"})}
                    rows="10" 
                    placeholder={t("descriptionPlaceholder")}
                    />
                </div>
                <FormMediaComponent 
                formTitle={"media"}
                register={register}
                setValue={setValue}
                image={image}
                setImage={setImage}
                errors={errors}
                title={t("postImage")}
                placeholder={`+ ${t("postImage")}`}
                />
                <div className='flex items-center justify-end gap-4'>
                    <button type="submit" className='btn btn-primary'>{t("submit")}</button>
                </div>
                
            </form>
        </div>
    </section>
  )
}
