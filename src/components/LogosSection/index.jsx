import React from 'react';
import ams from "@/assets/home/curriculum/ams.webp";
import ipc from "@/assets/home/curriculum/ipc.jpg";
import ieyc from "@/assets/home/curriculum/ieyc.webp";
import ccssi from "@/assets/home/curriculum/ccssi.jpg";
import unesco from "@/assets/home/curriculum/unesco.png";
import Image from 'next/image';

export default function LogosAlignments() {
  const alignments = [
    { name: "AMS", bgColor: "bg-blue-100", textColor: "text-blue-800" , image: ams },
    { name: "IPC", bgColor: "bg-green-100", textColor: "text-green-800" , image: ipc },
    { name: "CCSSI", bgColor: "bg-purple-100", textColor: "text-purple-800" , image: ccssi },
    { name: "IEYC", bgColor: "bg-orange-100", textColor: "text-orange-800" , image: ieyc },
    { name: "UNESCO", bgColor: "bg-red-100", textColor: "text-red-800" , image: unesco }
  ];

  return (
    <div className="w-full py-8">
      
      <div className="flex flex-wrap items-center  gap-4">
        {alignments.map((alignment, index) => (
          <div 
            key={index} 
            className={`${alignment.bgColor} ${alignment.textColor} text-center px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-md transition-shadow duration-200`}
          >
            {/* <span className='mb-1 block'>{alignment?.name}</span> */}
            <Image 
            width={56}
            height={56}
            src={alignment.image}
            alt={`${alignment.name} logo`}
            className='w-full h-full object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
}