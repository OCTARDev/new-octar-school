import Image from 'next/image'
import React from 'react'

export default function CommentComponent({data,setParent,parentId}) {
    const handleReply = ()=>{
        if(parentId === data?.id){
            setParent(null)
        }else{
            setParent(data?.id)
        }
    }
    
    return (
        <div className='flex items-start gap-2 w-full'>
            {/* Image */}
            <div>
                <Image 
                width={300}
                height={300}
                className='rounded-full w-12 h-12 border-2'
                alt='Teacher'
                src={data?.teacher?.media}
                />
            </div>
            {/* Comment Body */}
            <div className='flex-grow '>
                {/* Comment Header and body */}
                <div className='w-full bg-gray-100 rounded-lg p-3'>
                    <h4 className='font-semibold text-lg mb-2'>{data?.teacher?.name}</h4>
                    <p>{data?.comment}</p>
                </div>
                {/* Comment Time and reply button */}
                <div className='flex gap-6 mt-2 px-2 text-sm text-gray-500 capitalize'>
                    <span>{data?.time_ago}</span>
                    <button 
                    type='button'
                    onClick={handleReply}
                    className={`${parentId === data?.id ? "text-primaryA1 font-semibold" : "text-gray-500"}`}
                    >To Reply</button>
                </div>
                {/* Sub Comments */}
                {
                    data?.children?.map((c)=>{
                        return(
                            <div className='flex items-start gap-2 w-full mt-4' key={c.id}>
                                {/* Image */}
                                <div>
                                    <Image 
                                    width={300}
                                    height={300}
                                    className='rounded-full w-12 h-12 border-2'
                                    alt='Teacher'
                                    src={c?.teacher?.media}
                                    />
                                </div>
                                <div className='flex-grow '>
                                    {/* Comment Header and body */}
                                    <div className='w-full bg-gray-100 rounded-lg p-3'>
                                        <h4 className='font-semibold text-lg mb-2'>{c?.teacher?.name}</h4>
                                        <p>{c?.comment}</p>
                                    </div>
                                    {/* Comment Time and reply button */}
                                    <div className='flex gap-6 mt-2 px-2 text-sm text-gray-500 capitalize'>
                                        <span>{c?.time_ago}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}
