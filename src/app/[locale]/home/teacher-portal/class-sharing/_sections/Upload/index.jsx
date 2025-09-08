"use client";
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import useStorePost from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useStore';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "video/mp4",
  "video/webm",
  "video/ogg",
];

export const schema = yup.object().shape({
  media: yup
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
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
});
export default function UploadSection() {
    const {register,handleSubmit,formState:{errors},watch,reset} = useForm({resolver:yupResolver(schema)});
    const file = watch("media")?.[0];
    
    const onSuccess = (data)=>{
        toast.success(data?.data?.message ||  "Post uploaded successfully");
        reset();
    };
    const onError = (e)=>{
        toast.error(e?.response?.data?.message ||"Failed to upload post");
        console.log(e);
    }
    
    const storePost = useStorePost({onSuccess,onError});
    const onSubmit = (data)=>{
        console.log(data);
        storePost.mutate(data);
    }
    return (
        <div className=''>
            {/* Header */}
            <div className='px-4 mb-6'>
                <h2 className='font-bold text-3xl'>Upload Section</h2>
                <p>You can upload photos or videos of your activities.</p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-6xl mx-auto'>
                {/* Left */}
                <div className='
                border-2 border-primaryA1 rounded-xl px-6 py-24 hover:shadow-xl ring-2
                 ring-gray-400/20 flex flex-col items-center justify-center gap-10 h-full
                 '
                >
                    {/* Preview */}
                    {
                        file ? (
                            <>
                                {file.type.startsWith("image/") ? (
                                    <img
                                    src={URL.createObjectURL(file)}
                                    alt="Preview"
                                    className="w-[120px] h-[120px] rounded-full"
                                    />
                                ) : (
                                    <video
                                    src={URL.createObjectURL(file)}
                                    controls
                                    className="aspect-video h-full rounded-lg"
                                    />
                                )}
                            </>
                        ):(
                            <div className='rounded-full p-6 bg-primaryA1/20 flex items-center justify-center'>
                                <FaCloudUploadAlt className='text-primaryA1 text-[80px]'/>
                            </div>
                        )
                    }
                    {/* Text */}
                    <div className='text-center'>
                        <h3 className='font-bold text-xl'>Select A Video Or Photo To Upload</h3>
                        <p className='text-gray-500 text-sm'>adalah text contoh digunakan didalam industri pencetakan dan typesetting.</p>
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
                    accept='image/*,video/*'
                    {...register("media")}
                    />
                    {errors.media && <p className="text-red-500">{errors.media.message}</p>}
                </div>
                {/* Right */}
                <div className='flex flex-col  gap-6 justify-center h-full'>
                    <Input 
                    register={register}
                    errors={errors}
                    id={"title"}
                    placeholder={"Enter Title"}
                    type={"text"}
                    />
                    <TextArea 
                    register={register}
                    errors={errors}
                    id={"description"}
                    placeholder={"Enter Description"}
                    rows={4}
                    />
                    <button 
                    type='submit'
                    className='btn btn-primary'
                    >Submit</button>
                </div>
            </form>
        </div>
    
  )
}
