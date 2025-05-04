"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowNew from '@/tanstack-query/Home/News/useShow'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


export default function SingleNewsSection({id}) {
    const {data,isLoading,isError,isSuccess,error} = useShowNew({id});
    const news = data?.data?.data;
    // Map the image links to the format expected by react-image-gallery
    const images = news?.media?.map(link => ({
        original: link,
        /* thumbnail: link, */ // You can use the same link for thumbnail or choose a different size image
    }));
  return (
    <section className=' px-4'>
        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <div className='flex flex-col gap-2 py-10 capitalize mx-auto max-w-screen-xl'>
            {/* Image */}
            <div>
            <Gallery 
            items={images} 
            showThumbnails={false}
            lazyLoad={true}
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={5000}
            slideHeight={400}
            />
            </div>
            {/* Body */}
            <div className='mt-8 flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>{news?.title}</h1>
                <h2 className=''>{news?.sub_title}</h2>
                <p className='text-[#171717] font-semibold'>{news?.description}</p>
            </div>
        </div>
        </ErrorBoundary>
    </section>
  )
}
