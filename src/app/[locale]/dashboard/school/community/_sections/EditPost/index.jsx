"use client";
import FormMediaComponent from '@/components/FormMedia';
import useDeleteCommunityPostMedia from '@/tanstack-query/School/Community/useDeleteMedia';
import useShowCommunityPost from '@/tanstack-query/School/Community/useShow';
import useUpdateCommunityPost from '@/tanstack-query/School/Community/useUpdate';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function EditPostSection({id}) {
    const [image,setImage] = useState(null);
    const router = useRouter();
    const {register,setValue,handleSubmit,formState:{errors},reset} = useForm();
    const { data,isLoading,isError,isSuccess,error} = useShowCommunityPost({id});
    const onSuccess = (data)=>{        
        toast.success(data?.data?.message || "Post Edited successfully");
        router.back();
    };
    const onError = (error)=>{
        console.log(error);
        
        toast.error(error?.response?.data?.message || "Failed to edit Post");
    };
    const editPost = useUpdateCommunityPost({onSuccess,onError})
    const onSubmit = (data)=>{
        editPost.mutate({id,...data});
        
    }
    useEffect(()=>{
        if(data){
            const student = data?.data?.data;
            const {title,description,media} = student;
            setImage(media);
            reset({title,description})
        }
    },[data,isSuccess]);
    const mediaOnSuccess = (data)=>{
        toast.success(data?.data?.message || "Media Deleted successfully");
    };
    const mediaOnError = (error)=>{
        toast.error(error?.response?.data?.message || "Failed to Delete Media");
    };
    const deleteMedia = useDeleteCommunityPostMedia({onSuccess:mediaOnSuccess,onError:mediaOnError});
    const handleDeleteMedia = ()=>{
        deleteMedia.mutate(id);
    }
  return (
      <section>
          <div className='flex flex-col gap-4 p-4'>
              <h1 className='text-2xl font-bold'>Edit Community Post</h1>
              <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                  <div className='input-container'>
                      <input 
                      type="text" 
                      placeholder='Title*' 
                      {...register("title",{required:"Title is required"})}
                      />
                  </div>
                  <div className='input-container'>
                      <textarea 
                      {...register("description",{required:"Description is required"})}
                      rows="10" 
                      placeholder='Description*'
                      />
                  </div>
                  <FormMediaComponent
                  formTitle={"media"}
                  register={register}
                  setValue={setValue}
                  image={image}
                  setImage={setImage}
                  errors={errors}
                  title={"Post Image"}
                  placeholder={"+ Post Image"}
                  isDeleteable={true}
                  handleDelete={handleDeleteMedia}
                  />
                  <div className='flex items-center justify-end gap-4'>
                      <button type="submit" className='btn btn-primary'>Submit</button>
                  </div>
                  
              </form>
          </div>
      </section>
    )
}
