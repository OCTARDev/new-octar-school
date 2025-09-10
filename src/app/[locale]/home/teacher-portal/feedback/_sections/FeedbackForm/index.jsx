import Image from 'next/image'
import React from 'react'
import img from "@/assets/home/teacher-portal/feedback/feedback-form.png";
import { useForm } from 'react-hook-form';
import TextArea from '@/components/TextArea';
import * as yup from "yup";
import { FaCloudUploadAlt } from 'react-icons/fa';
import useStoreTeacherFeedback from '@/tanstack-query/Home/Teacher-Portal/Feedback/useStore';
import { toast } from 'react-toastify';

const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/svg+xml",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf"
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
    notes: yup.string().required("Notes is required"),
});

export default function FeedbackFormSection() {
    const {handleSubmit,formState:{errors},register,reset,watch} = useForm();
    const file = watch("media")?.[0];
    const onSuccess = (data)=>{
        toast.success(data?.data?.message ||  "Feedback uploaded successfully");
        reset();
    };
    const onError = (e)=>{
        toast.error(e?.response?.data?.message || "Failed to upload feedback");
        console.log(e);
    }
    const storeFeedback = useStoreTeacherFeedback({onSuccess,onError});
    const onSubmit = (data)=>{
        console.log(data);
        storeFeedback.mutate(data);
    }
  return (
    <section className='max-w-6xl mx-auto my-10 px-4 grid md:grid-cols-2 gap-8'>
      {/* Left */}
      <div>'
        <Image 
        width={400}
        height={600}
        alt='Feedback Form Image'
        src={img}
        className='w-full h-full object-cover'
        />
      </div>
      {/* Right */}
      <form className='space-y-6 ' onSubmit={handleSubmit(onSubmit)}>
        <TextArea 
        register={register}
        errors={errors}
        placeholder={"Enter Notes"}
        id={"notes"}
        />
        {/* Upload */}
        <div className='
        border-2 border-primaryA1 rounded-xl px-6 py-24 hover:shadow-xl ring-2
            ring-gray-400/20 flex flex-col items-center justify-center gap-10 
            '
        >
            {/* Preview */}
            {
                file ? (
                  <>
                  {
                    file.type.startsWith("image/") ? (
                    <Image
                      width={120}
                      height={120}
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="w-[120px] h-[120px] rounded-full"
                      />
                    ):(
                      <p className="text-primaryA1 text-2xl font-bold">{file.name}</p>
                    )
                  }
                  
                  </>
                    
                ):(
                    <div className='rounded-full p-6 bg-primaryA1/20 flex items-center justify-center'>
                        <FaCloudUploadAlt className='text-primaryA1 text-[80px]'/>
                    </div>
                )
            }
            {/* Text */}
            <div className='text-center'>
                <h3 className='font-bold text-xl text-gray-400'>Select A Image Or File To Upload</h3>
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
            accept='image/*,application/pdf'
            {...register("media")}
            />
            {errors.media && <p className="text-red-500">{errors.media.message}</p>}
        </div>
        <button className='btn btn-primary w-full'>Submit</button>
      </form>
    </section>
  )
}
