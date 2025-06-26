"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { IoRocketSharp } from "react-icons/io5";

export default function ComingSoonPage() {
    const t = useTranslations("components.comingSoon");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Big Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-2xl mb-6 hover:animate-spin ">
            <IoRocketSharp  className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        {/* Coming Soon Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          {t("h1")}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100">
          {t("h2")}
        </p>
      </div>
    </div>
  );
}