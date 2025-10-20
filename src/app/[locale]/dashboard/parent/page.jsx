"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useParentNotesIndex from '@/tanstack-query/Parent/Notes/useIndex';
import React from 'react'


export default function ParentDashboard() {
    const {data,...methods} = useParentNotesIndex();
    const  response = data?.data?.data;
    console.log("response", response);
    return (
      <div  className='py-4'>
        <h1 className='text-3xl font-bold mb-4'>Student's Notes</h1>
        <ErrorBoundary {...methods}>
          <section className=''>
            {response?.map((post,i)=>{
              return(
                <div key={i} className="post-card  border rounded-xl shadow-xl bg-white mb-4">
                    {/* post header */}
                    <div className='flex items-start justify-between gap-2 p-4 '>
                        <div className='flex items-start gap-2'>
                            <img src={post.media_path} alt="user" className='w-10 h-10 rounded-full  border' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='font-bold capitalize'>{post.teacher_name}</h1>
                                <span className='text-xs text-gray-500'>{post.last_update}</span>
                            </div>
                        </div>
                    </div>                
                    {/* post body */}
                    <div className='flex flex-col gap-2 pt-1 pb-3 px-3'>
                        <h2 className='font-semibold capitalize text-lg'>{post?.title}</h2>
                        <p className=' px-4' dangerouslySetInnerHTML={{__html:post.note}}/>
                    </div>
                </div>
              )
            })}
          </section>
        </ErrorBoundary>
      </div>
    )
}
