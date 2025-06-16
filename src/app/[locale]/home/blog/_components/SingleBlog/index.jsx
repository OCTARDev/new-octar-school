"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowBlog from '@/tanstack-query/Home/Blogs/useShow';
import React from 'react'
import Blog from '../Blog';
import Aside from '../Aside';

export default function SingleBlogSection({blogId}) {

    const {data,isLoading,isError,isSuccess,error} = useShowBlog(blogId)
    const blog = data?.data?.data;
    return (
        <div>
            <ErrorBoundary isError={isError} isLoading={isLoading} isSuccess={isSuccess} error={error}>
            <div className='max-w-screen-2xl mx-auto md:px-10 px-4 py-10'>
                {/* Container  */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 capitalize'>
                    {/* single blog left side */}
                    <Blog blog={blog}/>
                    {/* all blogs aside  left side*/}
                    <Aside otherBlogs={blog?.other || []}/>
                </div>
            </div>
            </ErrorBoundary>
        </div>
    )
}
