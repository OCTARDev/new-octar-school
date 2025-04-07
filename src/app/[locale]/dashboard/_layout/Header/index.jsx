"use client";
import styles from "./styles.module.css";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link  from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.svg";
import Image from 'next/image';
import { expandSidebar, logOut } from '@/redux/slices/user.slice';
import { useRouter } from 'next/navigation';

export default function Header() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector(state=>state.user.user);
  const lastPathName = pathname.split("/");
  let firstLink = lastPathName[1];
  const toggleMenu = () => {
    dispatch(expandSidebar());
  };
  const handleLogOut = ()=>{
    dispatch(logOut());
    router.replace("/login");
  }
  return (
    <header className='capitalize'>
      <nav className={`${styles.navbar} px-8 md:px-14 lg:px-20 py-2 flex justify-between max-w-full relative gap-6 border-b-2 shadow-md`}>
        {/* Left */}
        <div className='flex items-center justify-between lg:flex-grow-0 flex-grow'>
          <Link className='flex gap-1 items-center text-primaryRed' href={`/${firstLink}/home`}>
              <div className='w-12 h-12'><Image src={logo} className='w-12 h-12' alt='logo' priority/></div>
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-primaryRed">
          <FaBars size={20} />
          </button>
        </div>
        {/* Right */}
        <div className='hidden md:flex gap-1 sm:gap-3 items-center justify-between capitalize py-2 '>   
          {user? 
          <button className='btn btn-primary' onClick={handleLogOut}>
          Logout
          </button>
        :
          <Link href={"/login"} className={`nav-link btn btn-primary ${pathname.includes("/home")?" active":""}`}>
          login
          </Link>
        }
        </div>
      </nav>
        
    </header>
  )
}
