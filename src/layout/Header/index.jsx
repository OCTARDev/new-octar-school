"use client";
import { useState } from 'react'
import styles from "./styles.module.css";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link  from 'next/link';
import Sidebar from './components/Sidebar';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.svg";
import Image from 'next/image';
import { logOut } from '@/redux/slices/user.slice';
import GiftMenuComponent from './components/Curriculum';
import { motion } from 'framer-motion';
import Dropdown from '@/components/Dropdown';
import TeacherPortalComponent from './components/TeacherPortal';

export default function Header() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const user = useSelector(state=>state.user.user);
  
  const lastPathName = pathname.split("/");
  const firstLink = lastPathName[1];
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = ()=>{
    dispatch(logOut());
  }
  const t = useTranslations("header");
  
  return (
    <motion.header 
    animate={{ opacity: 1 , y: 0}}
    initial={{ opacity: 0 , y:"-100vh"}}
    transition={{ duration: 1 , type:"spring" }}
    className='capitalize'>
      <div className={`${styles.fullscreen} ${!isOpen?"hidden":""} `} onClick={toggleMenu}></div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
      {/* top nav */}
      <div className='p-2 bg-gray-100 hidden lg:flex justify-end items-center gap-4'>
        <Link 
          className={`nav-link ${pathname.includes("/home/events")?" active":""}`} 
          href={`/${firstLink}/home/events`}
          >
            {t("events")}
        </Link>
        <Link 
          className={`nav-link ${pathname.includes("/home/news")?" active":""}`} 
          href={`/${firstLink}/home/news`}
          >
            {t("news")}
        </Link>
        <Link 
          className={`nav-link ${pathname.includes("/home/support")?" active":""}`} 
          href={`/${firstLink}/home/support`}
          >
            {t("support")}
        </Link>
        <Link 
          className={`nav-link ${pathname.includes("/home/contact")?" active":""}`} 
          href={`/${firstLink}/home/contact`}
          >
            {t("contact")}
        </Link>
        <LanguageSwitcher className='!flex-grow-0'/>
      </div>
      <nav className={`${styles.navbar} px-2 md:px-4 lg:px-6 py-2 flex justify-around  relative gap-6 border-b-2 shadow-md`}>
        {/* Left */}
        <div className='flex items-center justify-between lg:flex-grow-0 flex-grow'>
          <Link className='flex gap-1 items-center text-primaryRed' href={`/${firstLink}/home`}>
              <div className='w-12 h-12'><Image src={logo} className='w-12 h-12' alt='logo' priority/></div>
          </Link>
          <button onClick={toggleMenu} className="lg:hidden text-primaryRed">
          <FaBars size={20} />
          </button>
        </div>
        {/* Middle */}
        <div className='items-center gap-6 hidden lg:flex'>
          <Link 
            className={`nav-link 
              ${
                pathname === (`/${firstLink}/home`) ||
                pathname === (`/${firstLink}/home/newera`) ||
                pathname === (`/${firstLink}/home/working`)
                ?
                "active":""}`} 
            href={`/home`}
            >
              {t("home")}
          </Link>
          <Link 
            className={`nav-link ${pathname.includes("/home/about")?" active":""}`} 
            href={`/home/about`}
            >
              {t("about")}
          </Link>
          <Dropdown
          label={"Curriculum"}
          isActive={pathname.includes("/home/curriculum") || pathname.includes("/home/categories") || pathname.includes("/home/targets")}
          >
            <GiftMenuComponent />
          </Dropdown>
          <Link 
            className={`nav-link ${pathname.includes("/home/features")?" active":""}`} 
            href={`/home/features`}
            >
              {t("features")}
          </Link>
          {/* {
            user?.role === "teacher" && 
            <Dropdown
            className='px-2'
            label={
              <Link
              href={`/home/teacher-portal`}
              className={`nav-link px-4 w-full block text-start ${pathname.includes("/home/teacher-portal")?" active":""}`}
              >
                {t("teacher_portal")}
              </Link>
            }
            >
              <TeacherPortalComponent />
            </Dropdown>
          } */}
          
          <Link 
            className={`nav-link ${pathname.includes("/home/blog")?" active":""}`} 
            href={`/home/blog`}
            >
              {t("blog")}
          </Link>
          <Link 
            className={`nav-link ${pathname.includes("/home/pricing")?" active":""}`} 
            href={`/home/pricing`}
            >
              {t("pricing")}
          </Link>
        </div>
        {/* Right */}
        <div className='hidden lg:flex gap-1 sm:gap-3 items-center justify-between capitalize py-2'>   
          {user? 
          <>
          <Link 
            className='btn btn-primary capitalize' 
            href={`/dashboard/${user.role}`}
            >
          {t("dashboard")}
          </Link>
          <button className='btn btn-secondary capitalize' onClick={handleLogOut}>
          {t("logout")}
          </button>
          </>
        :
          <Link 
            href={`/login`} 
            className={`nav-link btn btn-primary ${pathname.includes("/home")?" active":""}`}
            >
              {t("login")}
          </Link>
        }
        </div>
      </nav>
        
    </motion.header>
  )
}
