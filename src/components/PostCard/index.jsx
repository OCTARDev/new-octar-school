import React, { useState } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { MdDelete, MdEdit } from "react-icons/md";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Dropdown from '../Dropdown';
import user from "@/assets/user.svg";

export default function PostCard({post,deletePost,isShow=false}) {    
    const t = useTranslations("components.postCard");
    const [learn,setLearn] = useState(false);

    // Utility function to truncate text
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? (
            <>
            {text.substring(0, maxLength)}
            <span 
            className="text-gray-500  font-semibold hover:cursor-pointer" 
            title='Expand Post'
            onClick={handleLearnMore}>
                {t("learnMore")}
            </span>
            </>
        ) : (
            text
        );
    };
    const handleDelete = (id) => {
        deletePost.mutate(id);
    };
    const handleLearnMore = ()=>{
        setLearn(!learn);
    }
  return (
    <div key={post.id} className="post-card  border rounded-xl shadow-xl bg-white mb-4">
        {/* post header */}
        <div className='flex items-start justify-between gap-2 p-4 '>
            <div className='flex items-start gap-2'>
                <img src={post.user_media || user.src} alt="user" className='w-10 h-10 rounded-full  border' />
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold capitalize'>{post.user_name}</h1>
                    <span className='text-xs text-gray-500'>{post.last_update}</span>
                </div>
            </div>
            {/* options if my own post */}
            {(post.is_own || isShow) && 
            <Dropdown
            icon={<SlOptionsVertical size={16} className='text-gray-500 hover:text-gray-800 hover:cursor-pointer' />}
            >
                <div className='flex flex-col gap-2 bg-white shadow-xl rounded-lg p-2'>
                    <Link 
                    href={`community/edit/${post.id}`}
                    className='text-sm text-gray-500 hover:text-gray-800 flex gap-1  items-center !justify-normal' 
                    type='button'
                    title='Edit Post'
                    >
                        <span><MdEdit size={20}/></span>
                        <span>{t("edit")}</span>
                    </Link>
                    <button 
                    className='text-sm text-red-500 hover:text-red-800  items-center !justify-normal flex gap-1' 
                    type='button'
                    title='Delete Post'
                    onClick={()=>handleDelete(post.id)}
                    >
                        <span><MdDelete size={20}/></span>
                        <span>{t("delete")}</span>
                    </button>
                </div>
            </Dropdown>
            }
        </div>
        {/* post image */}
        {post.media && 
        <div className='flex w-full '>
            <img src={post.media} alt='Post Image' className='max-w-full mx-auto h-56 object-fill' />
        </div>
        }
        
        {/* post body */}
        <div className='flex flex-col gap-2 pt-1 pb-3 px-3'>
            <h2 className='font-semibold capitalize text-lg'>{post?.title}</h2>
            <p className=' '>
                {learn ? post?.description : truncateText(post?.description, 100)}
                {/* {truncateText(post?.description, 100)} */}
            </p>
        </div>
    </div>
  )
}
            {/* <Dropdown 
            title={<SlOptionsVertical size={16} className='text-gray-500 hover:text-gray-800 hover:cursor-pointer' />}
            >
                <div className='flex flex-col gap-2 bg-white shadow-xl rounded-lg p-2'>
                    <Link 
                    href={`community/edit/${post.id}`}
                    className='text-sm text-gray-500 hover:text-gray-800 flex gap-1  items-center !justify-normal' 
                    type='button'
                    title='Edit Post'
                    >
                        <span><MdEdit size={20}/></span>
                        <span>{t("edit")}</span>
                    </Link>
                    <button 
                    className='text-sm text-red-500 hover:text-red-800  items-center !justify-normal' 
                    type='button'
                    title='Delete Post'
                    onClick={()=>handleDelete(post.id)}
                    >
                        <span><MdDelete size={20}/></span>
                        <span>{t("delete")}</span>
                    </button>
                </div>
            </Dropdown> */}