"use client";
import React from 'react';
import styles from "../../styles.module.css";
import Link  from 'next/link';
import { IoGiftSharp } from 'react-icons/io5';
import { IoMdClose } from "react-icons/io";
import { CiBellOn } from 'react-icons/ci';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import logo from "@/assets/logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { logOut } from '@/redux/slices/user.slice';

export default function Sidebar({isOpen,toggleMenu}) {
    const t = useTranslations("header");
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const user = useSelector(state=>state.user.user);
    const lastPathName = pathname.split("/");
    const firstLink = lastPathName[1];


    const handleLogOut = ()=>{
    dispatch(logOut());
    router.replace("/login");
    }
  return (
    <aside className={`${styles.sidebar}  ${isOpen?`${styles.expanded}`:""} flex flex-col gap-3 overflow-x-hidden`}>
        <div className='flex justify-center items-center gap-3 px-3 pt-3 fs-4 fw-bold '> 
            <Link className='flex gap-1 items-center text-primaryRed' href={"/"}>
                <span><Image src={logo} className='w-18 h-18' alt='logo'/></span>
            </Link>
            <span className='cursor-pointer absolute top-2 right-4 bg-primaryA1 text-neutral10 rounded-full' onClick={toggleMenu}>
                < IoMdClose/>
            </span>
        </div>
        <hr className='border-2'/>
        <div className='flex flex-col gap-1 px-2'>
            <Link className='nav-link' href={`/${firstLink}/home`}>
            {t("home")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/about`}>
            {t("about")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/curriculum`}>
            {t("curriculum")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/features`}>
            {t("features")}
            </Link>

            <Link className='nav-link' href={`/${firstLink}/home/pricing`}>
            {t("pricing")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/blog`}>
            {t("blog")}
            </Link>
            

        </div>
        <hr className='border-2'/>
        <div className='mt-auto flex flex-col gap-2 px-2'>
            <Link className='nav-link' href={`/${firstLink}/home/contact`}>
                {t("contact")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/support`}>
                {t("support")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/news`}>
                {t("news")}
            </Link>
            <Link className='nav-link' href={`/${firstLink}/home/events`}>
                {t("events")}
            </Link>
        </div>
        <hr className='border-2'/>
        {/* Bottom */}
        <div className=' flex flex-col pt-2  gap-2 px-2'>
            
            <LanguageSwitcher isUp={true} />
            {
                user? 
                <button className='btn btn-primary' onClick={handleLogOut}>
                Logout
                </button>
                :
                <Link href={"/login"} className={`nav-link btn btn-primary ${pathname.includes("/home")?" active":""}`}>
                {t("login")}
                </Link>
            }
            <div className='flex justify-between w-full'>
                <div className='bg-neutral7 rounded-full p-2 '>
                    <CiBellOn size={24} />
                </div>
                <div className='bg-primaryRed rounded-full p-2'>
                    <IoGiftSharp size={24} className='text-neutral10'/>
                </div>
            </div>
            
        </div>

    </aside>
  )
}
