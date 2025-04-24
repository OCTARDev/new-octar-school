import BackSection from '@/components/BackSection';
import React from 'react'
import EditPostSection from '../../_sections/EditPost';

export default async function EditPost({params}) {
    const {postId} = await params;
  return (
    <div>
        <BackSection/>
        <EditPostSection id={postId}/>
    </div>
  )
}
