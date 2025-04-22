"use client";
import React from 'react'
import SidebarWrapper from '../../../_layout/Sidebar'
import styles from "../../../_layout/Sidebar/styles.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";
import { FaPalette, FaUser } from "react-icons/fa";
import { RiGraduationCapFill, RiUserCommunityFill } from "react-icons/ri";



export default function SchoolSidebar() {
    const pathname = usePathname();
    const lastPathName = pathname.split("/");
    const firstLink = lastPathName[1];
  return (
    <SidebarWrapper className={``}>
        <Link 
        className={`${styles.navItem} ${pathname === `/${firstLink}/dashboard/teacher` && `${styles.active}` }`} 
        href={`/${firstLink}/dashboard/teacher`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span className=''>home</span>
        </Link>
        
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/subjects") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/teacher/subjects`}
        >
            <span><FaPalette size={20}/></span>
            <span>Subjects</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${(pathname.includes("/classes") || pathname.includes("/students")) && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/teacher/classes`}
        >
            <span><RiGraduationCapFill  size={20}/></span>
            <span>Classes</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/profile") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/teacher/profile`}
        >
            <span><FaUser  size={20}/></span>
            <span>Teacher Profile</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/community") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/teacher/community`}
        >
            <span><RiUserCommunityFill   size={20}/></span>
            <span>Community</span>
        </Link>
    </SidebarWrapper>
  )
};