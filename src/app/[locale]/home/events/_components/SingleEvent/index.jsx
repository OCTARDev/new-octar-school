"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowEvent from '@/tanstack-query/Home/Events/useShow';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


export default function SingleEventComponent({id}) {
    const {data,isLoading,isError,isSuccess,error} = useShowEvent({id});
    const news = data?.data?.data;
        const t = useTranslations("events");
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
            slideInterval={4000}
            slideHeight={400}
            />
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <FaCalendarAlt  className='text-primaryA1'/>
                    <span>{news?.event_date}</span>
                </div>
                {
                    news?.attended && 
                <div className='flex items-center gap-1'>
                    <MdOutlineMessage  className='text-primaryA1'/>
                    <span>{news?.attended} {t("attend")}</span>
                </div>

                }
                

            </div>
            </div>
            {/* Body */}
            <div className='mt-8 flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>{news?.title}</h1>
                <h2 className=''>{news?.sub_title}</h2>
                <p dangerouslySetInnerHTML={{ __html: news?.description }} />
                {/* <p className='text-[#171717] font-semibold'>{news?.description}</p> */}
            </div>
        </div>
        </ErrorBoundary>
    </section>
  )
}
