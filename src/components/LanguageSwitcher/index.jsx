"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { MdLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
  const pathname = usePathname(); // Get current URL path
  const router = useRouter(); // Next.js router
  const currentLocale = useLocale(); // Get current locale from next-intl

  const changeLanguage = (event) => {
    const newLocale = event.target.value;
    const segments = pathname.split("/");

    // Replace the first segment with the new locale
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;

    router.replace(newPath);
  };

  return (
    <div className="flex items-center cursor-pointer px-2 py-1 border rounded">
      <MdLanguage size={20} className="mr-2" />
      <select
        className="px-4 bg-transparent outline-none"
        onChange={changeLanguage}
        value={currentLocale} // Set the current locale as selected
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale === "en" ? "English" : "العربية"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
