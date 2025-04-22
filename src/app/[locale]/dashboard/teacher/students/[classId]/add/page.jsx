"use client";
import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import {toast} from "react-toastify"
import  { useForm } from "react-hook-form"
import ParentSection from '@/components/ParentSection'
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import FormMediaComponent from '@/components/FormMedia';
import useStoreStudent from '@/tanstack-query/School/Students/useStore';


export default function AddStudent() {
    const {classId} = useParams();
    const [image,setImage] = useState(null);
    const router = useRouter();
    /* const t = useTranslations("dashboard.school.classes"); */
    const {register,handleSubmit,formState: { errors },setValue} = useForm({defaultValues:{level_id:""}});
    
    const onSuccess = (data)=>{
        toast.success("Student added successfully");
        router.push("/dashboard/school/students/"+classId);
    };
    const onError = (error)=>{
        console.log(error);
        toast.error(error?.response?.data?.message || "Failed to add Student");
    };
    const addStudent = useStoreStudent({onSuccess,onError});
    const onSubmit = (data) => {
        addStudent.mutate({class_id:classId,...data});
    };
  
  return (
    <div className='flex flex-col gap-6'>
        <section className='flex gap-1 items-center'>
        <FaAngleLeft />
        <Link className='text-primaryDarkest' href={"/dashboard/school/teachers"}>Back</Link>
        </section>
        <ParentSection>
            <div>
                <h3 className='text-2xl font-bold'>Create Student</h3>
            </div>
            <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto p-6  space-y-4"
                >
                {/* Name */}
                <div>
                <label className="block text-gray-700 font-semibold mb-1">
                    Student Name
                </label>
                <input
                    type="text"
                    {...register("name", { required: "Student Name is required" })}
                    placeholder="Enter Student Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
                </div>
                
                {/* Media */}
                <FormMediaComponent 
                title={"media"}
                placeholder={"+ Click To Upload Image"}
                formTitle={"media"}
                register={register}
                setValue={setValue}
                setImage={setImage}
                image={image}
                errors={errors}
                />
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
                    Add Student
                    </button>
                </div>
        </form>
            </div>
        </ParentSection>
    </div>
  )
}
