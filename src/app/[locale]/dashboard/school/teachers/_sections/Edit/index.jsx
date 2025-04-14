"use client";
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import  { useForm } from "react-hook-form"
import ParentSection from '@/components/ParentSection'
import ErrorBoundary from '@/components/ErrorBoundary';
import useHelpTeachers from '@/tanstack-query/School/Teachers/useHelp';
import MultiChoiceSelect from '@/components/MultipleChoiceSelect';
import handleSingleFileChange from '@/utils/helper-functions/handleSingleFileChange';
import useShowTeachers from '@/tanstack-query/School/Teachers/useShow';
import useUpdateTeacher from '@/tanstack-query/School/Teachers/useUpdate';
import { useRouter } from 'next/navigation';

export default function EditTeacherSection({id}) {
    const [image,setImage] = useState(null);
    const router = useRouter();
    const {register,setValue,handleSubmit,formState:{errors},reset,watch} = useForm();
    const { data,isLoading,isError,isSuccess,error} = useShowTeachers({id});
    const onSuccess = (data)=>{
        toast.success("Teacher Edited successfully");
        router.push("/dashboard/school/teachers");
    };
    const onError = (error)=>{
        console.log(error);
        
        toast.error(error?.response?.data?.message || "Failed to add Teacher");
    };
    const editTeacher = useUpdateTeacher({onSuccess,onError})
    const onSubmit = (data)=>{
        editTeacher.mutate({id,...data});
        
    }
    const {data:helpData,isLoading:helpIsLoading,isError:helpIsError,error:helpError,isSuccess:helpIsSuccess} = useHelpTeachers({});    
    useEffect(()=>{
        if(data){
            const teacher = data?.data?.data;
            const {name,email,classes} = teacher;
            setImage(teacher?.media_path);
            reset({name,email,class_ids:classes.map(c=>c.id)})
        }
    },[data,isSuccess])
    
  return (
    <ParentSection>
        <div>
            <h3 className='text-2xl font-bold'>Edit Teacher</h3>
        </div>
        <div>
        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mx-auto p-6  space-y-4"
            >
            {/* Name */}
            <div>
            <label className="block text-gray-700 font-semibold mb-1">
                Teacher Name
            </label>
            <input
                type="text"
                {...register("name", { required: "Teacher Name is required" })}
                placeholder="Enter Teacher Name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
            </div>
            {/* Email */}
            <div>
            <label className="block text-gray-700 font-semibold mb-1">
                Teacher Email
            </label>
            <input
                type="email"
                {...register("email", { required: "Teacher Email is required" })}
                placeholder="Enter Teacher Email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
            </div>
            {/* Class Ids */}
            <ErrorBoundary isLoading={helpIsLoading} isError={helpIsError} error={helpError} isSuccess={helpIsSuccess}>
            <div>
                <label className="block text-gray-700 font-semibold mb-1">
                    Assign Class
                </label>
                <MultiChoiceSelect 
                options={helpData?.data?.data?.class_rooms}
                setValue={setValue}
                selectId={"class_ids"}
                placeholder={"Assign Classes"}
                values={data?.data?.data?.classes}
                />
                {errors.class_ids && (
                    <span className="text-red-500 text-sm">{errors.class_ids.message}</span>
                )}
            </div>
            </ErrorBoundary>
            {/* Media */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Media</label>
                <div className="border border-dashed border-gray-400 rounded p-4">
                <label className="cursor-pointer text-purple-500">
                    <input
                    type="file"
                    accept="image/*"
                    multiple
                    {...register("media")}
                    className="hidden"
                    onChange={(e)=>handleSingleFileChange(e,setImage,setValue,"media")}
                    />
                    <span className="block text-center">+ Click to upload image</span>
                </label>
                {errors.media && (
                        <span className="text-red-500 text-sm">{errors.media.message}</span>
                )}
                {
                    image && 
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <div  className="relative">
                            <img
                            src={image}
                            alt={`Preview`}
                            className="w-full h-32 object-cover rounded border"
                            />
                        </div>
                    </div>
                }
                
                </div>
            </div>
            {/* Row 7: Buttons */}
            <div className="flex justify-end items-center mt-4">
                <button
                type="submit"
                className="btn btn-primary"
                >
                Edit Teacher
                </button>
            </div>
        </form>
        </ErrorBoundary>
        </div>
    </ParentSection>
  )
}
