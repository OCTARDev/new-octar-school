import useLikeTeacherPortalClassShare from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useLike';
import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import {motion } from "framer-motion";
import { RiMessage2Fill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';


export default function ShareCardComponent({data}) {
    const router = useRouter();
    const like = useLikeTeacherPortalClassShare({});
    const handleLike = ()=>{
        like.mutate(data?.id)
    }
    const handleComment = ()=>{
        router.push(`class-sharing/${data?.id}`)
    }
  return (
    <div className='border rounded-3xl p-4 shadow-md hover:shadow-2xl transition-shadow duration-200 flex flex-col'>
      {/* Image */}
      <div>
        {
            data?.media?.media_type === 'video' ? (
                <video width="100%" height="288" controls className='w-full h-72 rounded-lg'>
                    <source src={data?.media?.media_path} type="video/mp4" />
                </video>
            ) : (
                <Image  
                width={400} 
                height={600}
                quality={100} 
                className='w-full h-72 object-cover rounded-lg' 
                src={data?.media?.media_path}
                alt={data?.title}
                />
            )
        }
      </div>
      {/* Body */}
      <div className='mt-8 flex-grow flex flex-col justify-between'>
        <div>
            <h3 className='text-lg font-semibold mb-2'>{data?.title}</h3>
            <p className='text-gray-600 text-sm line-clamp-3'>{data?.description}</p>   
        </div>
        
        <div className='flex justify-between flex-wrap gap-6 mt-4'>
            <div className='flex items-center gap-3'>
            {
                data?.user_like ? (
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
                
                <span>{data?.count_likes}</span>
            </div>
            <div className='flex items-center gap-3'>
                <motion.div
                        onClick={handleComment}
                        className='p-2 rounded-full bg-gradient-primary hover:cursor-pointer'
                        initial={{ scale: 0.9, opacity: 0.7 }}
                        animate={{ scale: 1.1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <RiMessage2Fill className='text-white' size={20}/>
                </motion.div>
                <span>{data?.count_comments}</span>
            </div>
        </div>
      </div>
    </div>
  )
}
