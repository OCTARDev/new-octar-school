"use client";
import React from 'react'
import SidebarWrapper from '../../../_layout/Sidebar'
import styles from "../../../_layout/Sidebar/styles.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";
import { FaPalette, FaUser } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { RiGraduationCapFill, RiUserCommunityFill } from "react-icons/ri";



export default function SchoolSidebar() {
    const pathname = usePathname();
    const lastPathName = pathname.split("/");
    const firstLink = lastPathName[1];
  return (
    <SidebarWrapper className={``}>
        <Link 
        className={`${styles.navItem} ${pathname === `/${firstLink}/dashboard/school` && `${styles.active}` }`} 
        href={`/${firstLink}/dashboard/school`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span className=''>home</span>
        </Link>
        <Link 
            className={`${styles.navItem} ${pathname.includes("/teachers") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/teachers`}
        >
            <span><FaPersonChalkboard  size={20}/></span>
            <span>Teachers</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/subjects") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/subjects`}
        >
            <span><FaPalette size={20}/></span>
            <span>Subjects</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${(pathname.includes("/classes") || pathname.includes("/students")) && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/classes`}
        >
            <span><RiGraduationCapFill  size={20}/></span>
            <span>Classes</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/profile") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/profile`}
        >
            <span><FaUser  size={20}/></span>
            <span>School Profile</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/sub-details") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/sub-details`}
        >
            <span><MdSubscriptions  size={20}/></span>
            <span>Subscription Details</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/sub-details") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/community`}
        >
            <span><RiUserCommunityFill   size={20}/></span>
            <span>Community</span>
        </Link>
    </SidebarWrapper>
  )
};