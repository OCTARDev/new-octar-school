"use client"; // Mark this component as a Client Component

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);

  const handleChangeLanguage = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", newLang);
  };

  return (
    <div className=" flex items-center cursor-pointer px-2 py-1 border rounded">
      <div className=" left-0 top">
      <MdLanguage size={20} />
      </div>
      <select
      className="px-4 bg-transparent"
        onChange={handleChangeLanguage}
        value={i18n.language}

      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
