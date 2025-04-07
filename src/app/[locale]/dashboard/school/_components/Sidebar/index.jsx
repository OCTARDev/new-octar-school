"use client";
import React from 'react'
import SidebarWrapper from '../../../_layout/Sidebar'
import styles from "../../../_layout/Sidebar/styles.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";
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
            <span>home</span>
        </Link>
        <Link 
            className={`${styles.navItem} ${pathname.includes("/teachers") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/teachers`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span>Teachers</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/subjects") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/subjcets`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span>Subjects</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/classes") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/classes`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span>Classes</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/profile") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/profile`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span>School Profile</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/sub-details") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/school/sub-details`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span>Subscription Details</span>
        </Link>
    </SidebarWrapper>
  )
}
