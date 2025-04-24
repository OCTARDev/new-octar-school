"use client";
import React, { useRef, useEffect } from 'react';
import PostCard from '@/components/PostCard';
import Spinner from '@/components/Spinner';
import ErrorBoundary from '@/components/ErrorBoundary';
import AddComponent from './_components/AddComponent';
import useIndexTeacherCommunity from '@/tanstack-query/Teacher/Community/useIndex';
import useDeleteTeacherCommunityPost from '@/tanstack-query/Teacher/Community/useDelete';
import { useTranslations } from 'next-intl';

export default function CommunityFeed(){
    const t = useTranslations("dashboard.teacher.community");
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError,
        isLoading,
        isSuccess,
        error,
    } = useIndexTeacherCommunity();

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
    const deletePost = useDeleteTeacherCommunityPost({});
  return (
    <div className='relative'>
        <AddComponent />
        {/* All Posts */}
        <div className='grid grid-cols-3'>
            <ErrorBoundary isError={isError} error={error} isLoading={isLoading} isSuccess={isSuccess}>   
            <div className="col-span-3 md:col-span-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4">
                {allPosts?.map((post,i) => (
                <PostCard key={post.id} post={post} deletePost={deletePost}/>
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