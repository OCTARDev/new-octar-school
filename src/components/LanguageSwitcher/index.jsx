"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { GrLanguage } from "react-icons/gr";
import { FaChevronDown , FaCheck} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";

const LanguageSwitcher = ({isUp=false}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams(); // Add this hook
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Language display mapping
  const languageMap = {
    en: { name: "English", nativeName: "English", flag: "🇺🇸" },
    ar: { name: "Arabic", nativeName: "العربية", flag: "🇸🇦" }
  };

  const changeLanguage = (newLocale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;
    
    // Preserve search parameters
    const searchString = searchParams.toString();
    const fullPath = searchString ? `${newPath}?${searchString}` : newPath;
    
    router.replace(fullPath);
    setIsOpen(false);
  };

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

  const currentLanguage = languageMap[currentLocale];

  return (
    <motion.div 
    whileHover={{scale:1.02}}

    className="relative flex-grow z-50" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between gap-2 px-3 py-2 bg-white
          dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md
          transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-transparent
             `}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <div className="flex items-center gap-2">
          <GrLanguage className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="flex items-center gap-2 text-sm font-medium text-gray-700 ">
            <span className="text-base">{currentLanguage?.flag}</span>
            <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
          </span>
        </div>
        <FaChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""}
            "rotate-180" : ""
            }`} 
        />
      </button>
      <AnimatePresence>
      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div 
        exit={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        className={`
          ${isUp ? "bottom-full mb-1":"top-full mt-1"}
          absolute  left-0 right-0 bg-gradient-to-r
         from-indigo-800 to-violet-800 border border-indigo-500  
         rounded-lg shadow-lg z-50 `}>
          {routing.locales.map((locale) => {
            const language = languageMap[locale];
            const isSelected = locale === currentLocale;
            
            return (
              <button
                key={locale}
                onClick={() => changeLanguage(locale)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 
                  text-left hover:bg-indigo-700 hover:text-gray-200 rounded-lg
                  transition-colors duration-150 ${
                  isSelected 
                    ? "bg-blue-50 text-primaryA1 " 
                    : "text-neutral5"
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{language?.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{language?.nativeName}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {language?.name}
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <FaCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                )}
              </button>
            );
          })}
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcher;