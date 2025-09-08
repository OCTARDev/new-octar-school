import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function TeacherPortalComponent() {
    const pathname = usePathname();
    return (
        <div className='py-4 flex flex-col gap-3'>
            <Link
            href={`/home/teacher-portal/class-sharing`}
            className={`nav-link px-4 w-full block text-sm text-start ${pathname.includes("/class-sharing")?" active":""}`}
            >
                Classroom Sharing
            </Link>
            <Link
            href={`/home/teacher-portal/plan `}
            className={`nav-link px-4 w-full block text-sm text-start ${pathname.includes("/plan")?" active":""}`}
            >
                Lesson Planning & Teaching Tips
            </Link>
            <Link
            href={`/home/teacher-portal/`}
            className='nav-link px-4 w-full block text-sm text-start'
            >
                Training & Support
            </Link>
            <Link
            href={`/home/teacher-portal/`}
            className='nav-link px-4 w-full block text-sm text-start'
            >
                Feedback
            </Link>
            <Link
            href={`/home/teacher-portal/`}
            className='nav-link px-4 w-full block text-sm text-start'
            >
                Rewards & Resources
            </Link>
        </div>
    )
}
