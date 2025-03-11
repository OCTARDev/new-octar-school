"use client";
import { useState } from 'react'
import styles from "./styles.module.css";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link  from 'next/link';
import Sidebar from './components/Sidebar';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import logo from "../../assets/logo.svg";
import Image from 'next/image';
import { logOut } from '../../redux/slices/user.slice';

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector(state=>state.user.user);
  
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = ()=>{
    dispatch(logOut());
    router.replace("/login");
  }
  const { t } = useTranslation("header");
  return (
    <header className='capitalize'>
      <div className={`${styles.fullscreen} ${!isOpen?"hidden":""} `} onClick={toggleMenu}></div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
      {/* top nav */}
      <div className='p-2 bg-gray-100 hidden lg:flex justify-end items-center gap-4'>
      <Link className={`nav-link ${pathname.includes("/home/news")?" active":""}`} href={"/home/news"}>news</Link>
      <Link className={`nav-link ${pathname.includes("/home/support")?" active":""}`} href={"/home/support"}>Support</Link>
      <Link className={`nav-link ${pathname.includes("/home/contact")?" active":""}`} href={"/home/contact"}>contact us</Link>
      <LanguageSwitcher />
      </div>
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
        {/* Middle */}
        <div className='items-center gap-6 hidden lg:flex'>
          <Link className={`nav-link ${pathname === ("/home")?" active":""}`} href={"/home"}>home</Link>
          <Link className={`nav-link ${pathname.includes("/home/about")?" active":""}`} href={"/home/about"}>about us</Link>
          <Link className={`nav-link ${pathname.includes("/home/curriculum")?" active":""}`} href={"/home/curriculum"}>curriculum</Link>
          <Link className={`nav-link ${pathname.includes("/home/features")?" active":""}`} href={"/home/features"}>features</Link>
          <Link className={`nav-link ${pathname.includes("/home/blog")?" active":""}`} href={"/home/blog"}>blog</Link>
          <Link className={`nav-link ${pathname.includes("/home/pricing")?" active":""}`} href={"/home/pricing"}>pricing</Link>
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
