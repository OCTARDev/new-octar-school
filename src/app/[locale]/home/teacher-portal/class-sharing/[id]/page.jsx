"use client";
import BackSection from '@/components/BackSection';
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeacherPortalClassShare from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useShow';
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import {motion} from "framer-motion";
import useLikeTeacherPortalClassShare from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useLike';
import { FaHeart } from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';
import CommentComponent from '../_sections/Comment';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import { IoSend, IoText } from 'react-icons/io5';
import useCommentTeacherPortalClassShare from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useComment';


export default function PostPage() {
    const {id} = useParams();
    const [parentId ,setParentId] = useState(null);
    const {data,...methods} = useShowTeacherPortalClassShare(id);
    const response = data?.data?.data;
    const post = response?.share_classroom;
    const comments = response?.comments;
    const like = useLikeTeacherPortalClassShare({});
    const handleLike = ()=>{
        like.mutate(post?.id)
    }
    const {handleSubmit,formState:{errors},register,reset} = useForm();
    const onSuccess = (data)=>{
        reset();
    }
    const comment = useCommentTeacherPortalClassShare({onSuccess});
    const onSubmit = (data)=>{
        console.log(data);
        comment.mutate({
            ...data,
            post_id:id,
            parent_id:parentId
        })
    }
  return (
    <ErrorBoundary {...methods}>
        <div className='px-12 py-8 flex flex-col gap-6'>
            <BackSection />
            {/* Image */}
            <div>
                {
                    post?.media?.media_type === 'video' ? (
                        <video width="100%" height="300" controls className='w-full min-h-[300px] max-h-[600px] rounded-lg'>
                            <source src={post?.media?.media_path} type="video/mp4" />
                        </video>
                    ) : (
                        <Image  
                        width={800} 
                        height={300} 
                        className='w-full min-h-[300px] max-h-[600px] object-cover rounded-lg' 
                        src={post?.media?.media_path}
                        alt={post?.title}
                        />
                    )
                }
            </div>
            {/* Likes And Comments Counts */}
            <div className='flex flex-wrap gap-6 mt-4'>
                <div className='flex items-center gap-3'>
                {
                    post?.user_like ? (
                        <motion.div
                            onClick={handleLike}
                            className='p-2 rounded-full bg-statusError hover:cursor-pointer'
                            initial={{ scale: 0.9, opacity: 0.7 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <FaHeart className='text-white' size={20}/>
                        </motion.div>
                    ) : (
                        <motion.div
                            onClick={handleLike}
                            className='p-2 rounded-full bg-gray-500 border border-gray-200 hover:cursor-pointer'
                            initial={{ scale: 0.9, opacity: 0.7 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <FaHeart className='text-white' size={20}/>
                        </motion.div>
                    )
                }
                    
                    <span>{post?.count_likes}</span>
                </div>
                <div className='flex items-center gap-3'>
                    <motion.div
                            /* onClick={handleComment} */
                            className='p-2 rounded-full bg-gradient-primary hover:cursor-pointer'
                            initial={{ scale: 0.9, opacity: 0.7 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <RiMessage2Fill className='text-white' size={20}/>
                    </motion.div>
                    <span>{post?.count_comments}</span>
                </div>
            </div>
            {/* Post Data */}
            <div>
                <h3 className='text-3xl font-bold mb-2'>{post?.title}</h3>
                <p className='text-gray-900 text-lg  line-clamp-3'>{post?.description}</p>   
            </div>
            <hr className='border-2  rounded-lg'/>
            {/* Comments */}
            <div className='flex flex-col gap-4'>
                {comments?.map((c)=>{
                    return(
                        <CommentComponent 
                        data={c} 
                        key={c.id} 
                        setParent={setParentId}
                        parentId={parentId}
                        />
                    )
                })}
            </div>
            <form className='flex gap-2 items-center' onSubmit={handleSubmit(onSubmit)}>
                {/* User Logo */}
                <Image 
                src={post?.user_logo}
                width={100}
                height={100}
                className='w-14 h-14 rounded-full border-2'
                alt='User Logo'
                />
                {/* Input */}
                <Input 
                icon={<IoText className='text-gray-500'/>}
                id={"comment"}
                register={register}
                errors={errors}
                type={"text"}
                />
                {/* Button */}
                <button type='submit'>
                    <IoSend className='text-primaryA1 hover:text-primaryA2' size={30}/>
                </button>
            </form>
        </div>
    </ErrorBoundary>
  )
}
