"use client";
import { useState } from 'react'
import styles from "./styles.module.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link  from 'next/link';
import Sidebar from './components/Sidebar';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.svg";
import Image from 'next/image';
import { logOut } from '@/redux/slices/user.slice';
import Dropdown from '@/components/Dropdown/Dropdown';
import GiftMenuComponent from './components/Curicuilum';

export default function Header() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const user = useSelector(state=>state.user.user);
  const lastPathName = pathname.split("/");
  let firstLink = lastPathName[1];
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = ()=>{
    dispatch(logOut());
  }
  const t = useTranslations("header");
  
  return (
    <header className='capitalize'>
      <div className={`${styles.fullscreen} ${!isOpen?"hidden":""} `} onClick={toggleMenu}></div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
      {/* top nav */}
      <div className='p-2 bg-gray-100 hidden lg:flex justify-end items-center gap-4'>
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
      <LanguageSwitcher />
      </div>
      <nav className={`${styles.navbar} px-8 md:px-14 lg:px-20 py-2 flex justify-between max-w-full relative gap-6 border-b-2 shadow-md`}>
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
            className={`nav-link ${pathname === (`/${firstLink}/home`)?" active":""}`} 
            href={`/${firstLink}/home`}
            >
              {t("home")}
          </Link>
          <Link 
            className={`nav-link ${pathname.includes("/home/about")?" active":""}`} 
            href={`/${firstLink}/home/about`}
            >
              {t("about")}
          </Link>
          <Dropdown title={
            <div className='flex mx-auto items-center gap-2 py-3 hover:text-primaryA0 nav-link'>
              <span className='text-center '>{t("curriculum")}</span>
              <span><FaChevronDown size={14}/></span>
              </div>}
              btnStyle={`flex items-center  px-2 gap-1 capitalize `}
              menuStyle={`!left-0 !right-0 w-fit mx-auto !mt-0 `}
              dropdownStyle={`relative `}
              >
              <GiftMenuComponent />
          </Dropdown>
          <Link 
            className={`nav-link ${pathname.includes("/home/features")?" active":""}`} 
            href={`/${firstLink}/home/features`}
            >
              {t("features")}
          </Link>
          <Link 
            className={`nav-link ${pathname.includes("/home/blog")?" active":""}`} 
            href={`/${firstLink}/home/blog`}
            >
              {t("blog")}
          </Link>
          <Link 
            className={`nav-link ${pathname.includes("/home/pricing")?" active":""}`} 
            href={`/${firstLink}/home/pricing`}
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
            href={`/${firstLink}/dashboard/${user.role}`}
            >
          {t("dashboard")}
          </Link>
          <button className='btn btn-secondary capitalize' onClick={handleLogOut}>
          {t("logout")}
          </button>
          </>
          
        :
          <Link 
            href={`/${firstLink}/login`} 
            className={`nav-link btn btn-primary ${pathname.includes("/home")?" active":""}`}
            >
              {t("login")}
          </Link>
        }
        </div>
      </nav>
        
    </header>
  )
}
