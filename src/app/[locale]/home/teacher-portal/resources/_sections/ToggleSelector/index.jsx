import { useState } from 'react';

export default function ToggleSelector({setType,type}) {
  
  return (
    <div className="bg-gray-300 rounded-full  flex justify-center mx-auto w-fit my-10">
      <button
        onClick={() => setType('image')}
        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
          type === 'image'
            ? 'bg-gradient-primary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Best Images
      </button>
      <button
        onClick={() => setType('video')}
        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
          type === 'video'
            ? 'bg-gradient-primary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Best Videos
      </button>
    </div>
  );
}