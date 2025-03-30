export const revalidate = 60;
import React from 'react'
import Aside from '../../_components/Aside';
import Blog from '../../_components/Blog';
import axiosInstance from '@/utils/axiosInstance';

const getSingleBlog = async(id)=>{
    try {
        const res = await axiosInstance.get(`/home-page/blogs/show/${id}`);        
        return res.data?.data; // Adjust based on API response structure
      } catch (err) {       
        throw new Error(err.response?.data?.message || "Failed to fetch blogs");
      }
}

export default async function SingleBlog({params}) {
    const {blogId} = await params;
    const blog = await getSingleBlog(blogId);
    
  return (
    <div>
        <div className='max-w-screen-2xl mx-auto md:px-10 px-4 py-10'>
            {/* Container  */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 capitalize'>
                {/* single blog left side */}
                <Blog blog={blog}/>
                {/* all blogs aside  left side*/}
                <Aside otherBlogs={blog?.other || []}/>
            </div>
        </div>
    </div>
  )
}
