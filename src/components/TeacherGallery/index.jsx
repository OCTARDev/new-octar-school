"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { MdOutlineDateRange } from 'react-icons/md';

const GalleryComponent = ({data}) => {    
  const [selectedItem, setSelectedItem] = useState(0);
  const currentItem = data?.[selectedItem];
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full   bg-white rounded-2xl overflow-hidden shadow-xl">
      {/* Left side - Featured content */}
      <div className="flex-1 relative">
        <div 
            key={currentItem?.id} // Add this line
            className="h-96 bg-cover bg-center relative"
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 z-[15]"></div>
            <div className="absolute inset-0  z-10">
                <Image src={currentItem?.media} alt={currentItem?.title} fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h1 className="text-2xl font-bold mb-3">
                {currentItem?.title}
                </h1>
                <p className="text-sm leading-relaxed opacity-90">
                {currentItem?.description}
                </p>
            </div>
        </div>
      </div>

      {/* Right side - Scrollable cards */}
      <div className="w-full bg-gray-50">
        <div className="h-96 overflow-y-auto p-4 space-y-3">
          {data?.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(index)}
              className={`flex gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedItem === index 
                  ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                  : 'bg-white hover:bg-gray-50 border border-gray-100'
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  src={item?.media}
                  alt={item?.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
{/*                 <h3 className={`font-semibold text-sm mb-1 ${
                  selectedItem === index ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {item.subtitle}
                </h3> */}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {item?.description}
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <MdOutlineDateRange className="w-3 h-3 mr-1" />
                  {item?.last_update}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;