"use client";
import React from 'react'
import styles from "./styles.module.css";
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { expandSidebar } from '@/redux/slices/user.slice';

export default function SidebarWrapper({children,className}) {
    const dispatch = useDispatch();
    const isExpanded = useSelector(state=>state.user.dashboard.isExpanded);
    const handleClose = ()=>{
        dispatch(expandSidebar());
    }
  return (
    <>
    <div className={`${isExpanded?"":"hidden"} fixed top-0 left-0 w-full h-full bg-black/80 z-10 ${className}`} onClick={handleClose}></div>
    <motion.aside 
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 1, delay: 0.1 }}
        className={`${styles.sidebar} ${isExpanded? `${styles.expanded}` :``}`}
    >
        {children}
    </motion.aside>
    </>

  )
}
