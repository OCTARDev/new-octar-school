import Link from 'next/link'
import React from 'react'

export default function TeacherPortalComponent() {
  return (
    <div className='py-4 flex flex-col gap-3'>
        <Link
        href={`/home/teacher-portal/class-sharing`}
        className='nav-link px-4 w-full block text-sm text-start'
        >
            Classroom Sharing
        </Link>
        <Link
        href={`/home/teacher-portal/class-sharing`}
        className='nav-link px-4 w-full block text-sm text-start'
        >
            Lesson Planning & Teaching Tips
        </Link>
        <Link
        href={`/home/teacher-portal/class-sharing`}
        className='nav-link px-4 w-full block text-sm text-start'
        >
            Training & Support
        </Link>
        <Link
        href={`/home/teacher-portal/class-sharing`}
        className='nav-link px-4 w-full block text-sm text-start'
        >
            Feedback
        </Link>
        <Link
        href={`/home/teacher-portal/class-sharing`}
        className='nav-link px-4 w-full block text-sm text-start'
        >
            Rewards & Resources 
        </Link>
    </div>
  )
}
