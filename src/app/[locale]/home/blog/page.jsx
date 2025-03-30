export const revalidate = 60;
import React from 'react'
import Card from './_components/Card';
import axiosInstance from '@/utils/axiosInstance';

async function getBlogs() {
    try {
      const res = await axiosInstance.get("/home-page/blogs");
      return res.data?.data?.data; // Adjust based on API response structure
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to fetch blogs");
    }
  }

export default async function Blog() {
    let blogs = await getBlogs();
  
 

  return (
    <div>
        <div className='max-w-screen-2xl mx-auto md:px-10 px-4 py-10'>
            <h1 className='text-4xl font-bold mb-10'>Blogs</h1>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    blogs?.map((c)=>{
                        return(
                            <Card c={c} key={c.id}/>
                        )
                    })
                }
            </section>
        </div>
    </div>
  )
}
