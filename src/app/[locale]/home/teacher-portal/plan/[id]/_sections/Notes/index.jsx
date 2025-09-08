import Input from '@/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import * as yup from "yup";
import img from "@/assets/home/teacher-portal/plan/plan-resources-hero.png";
import TextArea from '@/components/TextArea';
import Image from 'next/image';
import useStorePlanLesson from '@/tanstack-query/Home/Teacher-Portal/Plan/useStore';
import { toast } from 'react-toastify';
const SUPPORTED_FORMATS = [
    "application/pdf",
];

export const schema = yup.object().shape({
  file: yup
        .mixed()
        .test("required", "You need to provide a file", (value) => {
        return value && value.length > 0;
        })
        .test("fileSize", "File is too large (max 10MB)", (value) => {
        return value && value[0] && value[0].size <= 10 * 1024 * 1024;
        })
        .test("fileFormat", "Unsupported format", (value) => {
        return value && value[0] && SUPPORTED_FORMATS.includes(value[0].type);
        }),
    notes: yup.string().required("Notes is required"),
});

export default function NotesSection({author,email,id}) {
    const {register,handleSubmit,formState:{errors},watch,reset} = useForm({resolver:yupResolver(schema)});
    const file = watch("file")?.[0];
    const onSuccess = (data)=>{
        toast.success(data?.data?.message ||  "Post uploaded successfully");
        reset();
    };
    const onError = (e)=>{
        toast.error(e?.response?.data?.message || "Failed to upload post");
        console.log(e);
    }
    const storeLesson = useStorePlanLesson({onSuccess,onError});
    const onSubmit = (data)=>{
        console.log(data);
        storeLesson.mutate({
            ...data,
            plan_lesson_id:id
        })
    }
  return (
    <section className='max-w-6xl mx-auto my-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-16  items-center'>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <h2 className='font-bold text-xl text-gray-700'>Write Your Notes</h2>
                {/* Input */}
                <TextArea
                rows={4}
                register={register}
                errors={errors}
                id={"notes"}
                placeholder={"Enter Notes"}
                type={"text"}
                />
                {/* File Upload */}
                <div className='
                border-2 border-primaryA1 rounded-xl px-6 py-24 hover:shadow-xl ring-2
                ring-gray-400/20 flex flex-col items-center justify-center gap-10 h-full
                '
                >
                    {/* Preview */}
                    {
                        file ? (
                            <p className="text-primaryA1 text-2xl font-bold">{file.name}</p>
                        ):(
                            <div className='rounded-full p-6 bg-primaryA1/20 flex items-center justify-center'>
                                <FaCloudUploadAlt className='text-primaryA1 text-[80px]'/>
                            </div>
                        )
                    }
                    {/* Text */}
                    <div className='text-center text-gray-400'>
                        <h3 className='font-bold text-xl'>Select An File To Upload.</h3>
                        <p className=' text-sm font-semibold'>You can upload one PDF file only</p>
                    </div>
                    {/* Button */}
                    <label 
                    htmlFor='file-upload'
                    className='btn btn-primary !rounded-3xl !px-10'
                    >
                        Select File
                    </label>
                    <input 
                    hidden 
                    id='file-upload' 
                    type='file' 
                    accept='application/pdf'
                    {...register("file")}
                    />
                    {errors.file && <p className="text-red-500">{errors.file.message}</p>}
                </div>
                <button 
                type='submit'
                className='btn btn-primary w-fit !px-10'
                >
                    Submit
                </button>
                <div className='font-semibold'>
                    <p className='space-x-2'>
                        <span>Author:</span>
                        <span>{author}</span>
                    </p>
                    <p className='space-x-2'>
                        <span>Email:</span>
                        <span>{email}</span>
                    </p>
                </div>
            </form>
            <div>
                <Image 
                width={800}
                height={800}
                src={img}
                alt='Notes Image'
                className='w-full h-full object-cover rounded-lg'
                />
            </div>

    </section>
  )
}
