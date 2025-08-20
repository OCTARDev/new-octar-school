import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";



export default function Dropdown({ 
  icon, 
  children, 
  defaultOpen = false ,
  label,
  className = "",
  isActive = false
}){
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <motion.div className={`relative ${isOpen?"shadow-xl":""} ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between gap-2 px-2 py-3 bg-white
          transition-all duration-200  nav-link ${isActive ? "active" : ""}
        `}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        {label}
        <div className="flex items-center gap-2">
        {
          icon ? (
            <span className='text-black'>{icon}</span>
          ) : (
            <FaChevronDown
              size={16}
              className={`text-grayA4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`} 
            />
          )
        }
        </div>
        
      </button>
      
      <AnimatePresence>
        {/* Dropdown Menu */}
        {isOpen && (
          <motion.div 
            exit={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            className={`
              ${isOpen?"shadow-xl ":""}
            absolute w-fit min-w-full top-full  end-0 
             z-50 bg-white 
            flex flex-col gap-2
            `}
          >
            {children}            
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};