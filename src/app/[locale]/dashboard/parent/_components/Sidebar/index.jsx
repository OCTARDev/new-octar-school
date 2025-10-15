"use client";
import React from 'react'
import SidebarWrapper from '../../../_layout/Sidebar'
import styles from "../../../_layout/Sidebar/styles.module.css";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useDispatch } from 'react-redux';
import { logOut } from '@/redux/slices/user.slice';



export default function ParentSidebar() {
    const t = useTranslations("dashboard.teacher.sidebar");
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const lastPathName = pathname.split("/");
    const firstLink = lastPathName[1];
    const handleLogOut = ()=>{
    dispatch(logOut());
    router.replace("/login");
    }
  return (
    <SidebarWrapper className={`!items-stretch`}>
        <div className='flex justify-center items-center gap-3 px-3 pt-3 fs-4 fw-bold md:hidden'> 
            <Link className='flex gap-1 items-center text-primaryRed' href={"/"}>
                <span><Image src={"/logo.svg"} className='w-16 ' width={1000} height={1000} alt='logo'/></span>
            </Link>
            {/* <span className='cursor-pointer absolute top-2 right-4 bg-primaryA1 text-neutral10 rounded-full' onClick={toggleMenu}>
                < IoMdClose/>
            </span> */}
        </div>
        <hr className='border-2 border-primaryA1  -mx-3 md:hidden' />
        <Link 
        className={`${styles.navItem} ${pathname === `/${firstLink}/dashboard/parent` && `${styles.active}` }`} 
        href={`/${firstLink}/dashboard/parent`}
        >
            <span><IoHomeSharp size={20}/></span>
            <span className=''>{t("home")}</span>
        </Link>
        <Link 
            className={`${styles.navItem}  ${pathname.includes("/profile") && `${styles.active}`}`} 
            href={`/${firstLink}/dashboard/parent/profile`}
        >
            <span><FaUser  size={20}/></span>
            <span>Parent Profile</span>
        </Link>
        <div className='mt-auto py-10 flex gap-4 flex-col md:hidden'>
            <LanguageSwitcher isUp={true}/>
            <button className='btn btn-primary' onClick={handleLogOut}>
            logout
            </button>
        </div>
    </SidebarWrapper>
  )
};