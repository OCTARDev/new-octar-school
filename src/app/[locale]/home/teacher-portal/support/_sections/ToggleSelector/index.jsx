import { useState } from 'react';

export default function ToggleSelector({setType,type}) {
  
  return (
    <div className="bg-gray-300 rounded-full  flex justify-center mx-auto w-fit my-10">
      <button
        onClick={() => setType('video')}
        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 uppercase ${
          type === 'video'
            ? 'bg-gradient-primary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        video
      </button>
      <button
        onClick={() => setType('file')}
        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 uppercase ${
          type === 'file'
            ? 'bg-gradient-primary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        PDF
      </button>
    </div>
  );
}