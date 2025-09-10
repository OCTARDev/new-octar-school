import useLikeTeacherPortalClassShare from '@/tanstack-query/Home/Teacher-Portal/Class-Sharing/useLike';
import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import {motion } from "framer-motion";
import { RiMessage2Fill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';


export default function ResourcesVideosCardComponent({data}) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const onSuccess = (data)=>{
        queryClient.invalidateQueries({
            queryKey:["homepage","teacher-portal","resources","index"]
        })
    }
    const like = useLikeTeacherPortalClassShare({onSuccess});
    const handleLike = ()=>{
        like.mutate(data?.id)
    }
    const handleComment = ()=>{
        router.push(`class-sharing/${data?.id}`)
    }
  return (
    <div className='border rounded-3xl p-4 shadow-md hover:shadow-2xl transition-shadow duration-200 flex flex-col '>
      {/* Image */}
      <div className='flex-shrink-0 flex items-center justify-center  ring-2  ring-primaryA1 w-full rounded-lg'>
        <video
            width={112}
            height={112}
            className='w-full aspect-video object-cover rounded-lg '
            src={data?.media?.media_path}
            controls
            alt={data?.title}
            poster={data?.media?.thumbnail} // optional: if you have a thumbnail
        />
      </div>
      {/* Body */}
      <div className='mt-2 flex-grow flex flex-col justify-between'>
        <div>
            <h3 className='text-lg font-semibold mb-2'>{data?.title}</h3>
            <p className='text-gray-600 text-sm line-clamp-3'>{data?.description}</p>   
        </div>
        
        <div className='flex items-center flex-wrap gap-6 mt-4'>
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
