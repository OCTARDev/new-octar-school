"use client";
import { useState } from 'react'
import styles from "./styles.module.css";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link  from 'next/link';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.svg";
import Image from 'next/image';
import { logOut } from '@/redux/slices/user.slice';
import { useRouter } from 'next/navigation';

export default function Header() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector(state=>state.user.user);
  
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = ()=>{
    dispatch(logOut());
    router.replace("/login");
  }
  const t = useTranslations("header");
  return (
    <header className='capitalize'>
      <div className={`${styles.fullscreen} ${!isOpen?"hidden":""} `} onClick={toggleMenu}></div>
      <nav className={`${styles.navbar} px-8 md:px-14 lg:px-20 py-2 flex justify-between max-w-full relative gap-6 border-b-2 shadow-md`}>
        {/* Left */}
        <div className='flex items-center justify-between lg:flex-grow-0 flex-grow'>
          <Link className='flex gap-1 items-center text-primaryRed' href={"/"}>
              <div className='w-12 h-12'><Image src={logo} className='w-12 h-12' alt='logo' priority/></div>
          </Link>
          <button onClick={toggleMenu} className="lg:hidden text-primaryRed">
          <FaBars size={20} />
          </button>
        </div>
        {/* Right */}
        <div className='hidden lg:flex gap-1 sm:gap-3 items-center justify-between capitalize py-2 '>   
          {user? 
          <button className='btn btn-primary' onClick={handleLogOut}>
          Logout
          </button>
        :
          <Link href={"/login"} className={`nav-link btn btn-primary ${pathname.includes("/home")?" active":""}`}>
          {t("login")}
          </Link>
        }
        </div>
      </nav>
        
    </header>
  )
}
