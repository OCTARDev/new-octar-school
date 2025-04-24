"use client";
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import  { useForm } from "react-hook-form"
import ParentSection from '@/components/ParentSection'
import ErrorBoundary from '@/components/ErrorBoundary';
import { useRouter } from 'next/navigation';
import FormMediaComponent from '@/components/FormMedia';
import useUpdateTeacherStudent from '@/tanstack-query/Teacher/Students/useUpdate';
import useShowTeacherStudent from '@/tanstack-query/Teacher/Students/useShow';
import { useTranslations } from 'next-intl';

export default function EditStudentSection({id}) {
    const t = useTranslations("dashboard.teacher.students.edit");
    const [image,setImage] = useState(null);
    const router = useRouter();
    const {register,setValue,handleSubmit,formState:{errors},reset} = useForm();
    const { data,isLoading,isError,isSuccess,error} = useShowTeacherStudent({id});
    const onSuccess = (data)=>{        
        toast.success(data?.data?.message || "Student Edited successfully");
        router.back();
    };
    const onError = (error)=>{
        console.log(error);
        
        toast.error(error?.response?.data?.message || "Failed to edit Student");
    };
    const editStudent = useUpdateTeacherStudent({onSuccess,onError})
    const onSubmit = (data)=>{
        editStudent.mutate({id,...data});
        
    }
    useEffect(()=>{
        if(data){
            const student = data?.data?.data;
            const {name,media_path} = student;
            setImage(media_path);
            reset({name})
        }
    },[data,isSuccess])
    
    return (
        <div className='flex flex-col gap-6'>
        <ParentSection>
            <div>
                <h3 className='text-2xl font-bold'>{t("header")}</h3>
            </div>
            <div>
                <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" mx-auto p-6  space-y-4"
                    >
                    {/* Name */}
                    <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                    {t("name")}
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: "Student Name is required" })}
                        placeholder={t("namePlaceholder")}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}
                    </div>
                    
                    {/* Media */}
                    <FormMediaComponent 
                    title={t("media")}
                    placeholder={t("mediaPlaceholder")}
                    formTitle={"media"}
                    register={register}
                    setValue={setValue}
                    setImage={setImage}
                    image={image}
                    errors={errors}
                    />
                    {/* Row 7: Buttons */}
                    <div className="flex justify-end items-center mt-4">
                        <button
                        type="submit"
                        className="btn btn-primary"
                        >
                        {t("addBtn")}
                        </button>
                    </div>
                </form>
                </ErrorBoundary>
            </div>
        </ParentSection>
    </div>
      )
}
