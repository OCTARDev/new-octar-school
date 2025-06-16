import React from 'react'
import axiosInstance from '@/utils/axiosInstance';

import SingleBlogSection from '../../_components/SingleBlog';

export default async function SingleBlog({params}) {
    const {blogId} = await params;

    /* const blog = await getSingleBlog(blogId); */
    
  return (
    <SingleBlogSection blogId={blogId}/>
  )
}
