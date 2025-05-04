import React, { useState, useEffect } from "react";

const ImageGallery = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(sliderInterval); // Clear interval on component unmount
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[calc(100vh-50px)] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: "100vw", // Ensures the gallery takes full width of the viewport
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-image-${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
