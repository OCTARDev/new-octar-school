"use client";
import React, { useRef, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import ErrorBoundary from '@/components/ErrorBoundary';
import useDeleteCommunityPost from '@/tanstack-query/School/Community/useDelete';
import { useTranslations } from 'next-intl';
import useIndexNews from '@/tanstack-query/Home/News/useIndex';
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Link from 'next/link';

export default function News(){
    const t = useTranslations("news");
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError,
        isLoading,
        isSuccess,
        error,
    } = useIndexNews();

    const observerRef = useRef();

    // Flatten the posts from all pages
    const allPosts = data?.pages?.flatMap(
        (page) => page?.data?.data?.data || []
    );

    useEffect(() => {
        if (!hasNextPage || isFetchingNextPage) return;

        const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            fetchNextPage();
            }
        },
        { threshold: 1 }
        );

        if (observerRef.current) {
        observer.observe(observerRef.current);
        }

        return () => {
        if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    
  return (
    <div className='relative max-w-screen-lg mx-auto'>
      <div className='my-10 px-4'>
        <h1 className='text-3xl font-bold'>{t("header")}</h1>
      </div>
      {/* All News */}
      <div className=''>
          <ErrorBoundary isError={isError} error={error} isLoading={isLoading} isSuccess={isSuccess}>   
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {allPosts?.map((post,i) => (
              <div key={post.id} className='border rounded-lg w-full flex items-center overflow-hidden capitalize'>
                <div className='w-2/6 h-full min-h-48'>
                  <img 
                  src={post.media}
                  alt={post.title}
                  className='object-cover w-full h-full'
                  />
                </div>
                <div className='bg-[#F5F5F5] flex-grow h-full p-4 flex flex-col gap-2'>
                  {/* Date */}
                  <div className='flex gap-2 items-center text-sm font-semibold'>
                    <span><FaCalendarAlt className='text-primaryA1'/></span>
                    <span className='text-[#414141]'>{post.updated_at}</span>
                  </div>
                  {/* Title */}
                  <h3 className='text-lg font-bold'>{post.title}</h3>
                  <p>{post.sub_title}</p>
                  <Link 
                  className='text-primaryA1 font-semibold mt-auto ms-auto flex gap-2 items-center' 
                  href={`news/single/${post.id}`}
                  >
                  {t("link")}
                  <FaArrowRight />
                  </Link>
                </div>
              </div>
              ))}
              {/* Observerer Reference */}
              <div ref={observerRef} className="h-10"></div>      
          </div>
          </ErrorBoundary>
      </div>
      {/* Loading Spinner */}
      {isFetchingNextPage && 
          <div className="text-center">
              <Spinner />
              <span>{t("loading")}</span>
          </div>
      }
    </div>
    
  );
};