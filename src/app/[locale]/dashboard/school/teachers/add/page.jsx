"use client";
import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import {toast} from "react-toastify"
import  { useForm } from "react-hook-form"
import ParentSection from '@/components/ParentSection'
import ErrorBoundary from '@/components/ErrorBoundary';
import useHelpTeachers from '@/tanstack-query/School/Teachers/useHelp';
import Link from 'next/link';
import MultiChoiceSelect from '@/components/MultipleChoiceSelect';
import handleSingleFileChange from '@/utils/helper-functions/handleSingleFileChange';
import { useRouter } from 'next/navigation';
import useStoreTeacher from '@/tanstack-query/School/Teachers/useStore';
import teacherSchema from '@/utils/Validation/dashboard/teacher';
import { yupResolver } from '@hookform/resolvers/yup';



export default function AddTeacher() {
    const [image,setImage] = useState(null);
    const router = useRouter();
    const {register,handleSubmit,formState: { errors },setValue} = useForm({resolver:yupResolver(teacherSchema)});

    const onSuccess = (data)=>{
        toast.success("Teacher added successfully");
        router.push("/dashboard/school/teachers");
    };
    const onError = (error)=>{
        console.log(error);
        
        toast.error(error?.response?.data?.message || "Failed to add Teacher");
    };
    const addTeacher = useStoreTeacher({onSuccess,onError});
    const onSubmit = (data) => {
        addTeacher.mutate(data);
    };
    
    const {data:helpData,isLoading:helpIsLoading,isError:helpIsError,error:helpError,isSuccess:helpIsSuccess} = useHelpTeachers({});    
  return (
    <div className='flex flex-col gap-6'>
        <section className='flex gap-1 items-center'>
        <FaAngleLeft />
        <Link className='text-primaryDarkest' href={"/dashboard/school/teachers"}>Back</Link>
        </section>
        <ParentSection>
            <div>
                <h3 className='text-2xl font-bold'>Add Teacher</h3>
            </div>
            <div>
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
                {/* Password */}
                <div>
                <label className="block text-gray-700 font-semibold mb-1">
                    Teacher Password
                </label>
                <input
                    type="password"
                    {...register("password", { required: "Teacher Password is required" })}
                    placeholder="Enter Teacher Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
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
                <div className="flex justify-between items-center mt-4">
                    <button
                    type="reset"
                    className="btn btn-secondary"
                    >
                    Reset
                    </button>
                    <button
                    type="submit"
                    className="btn btn-primary"
                    >
                    Add Teacher
                    </button>
                </div>
        </form>
            </div>
        </ParentSection>
    </div>
  )
}
