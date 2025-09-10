"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function RatingComponent({rate,handleRate,id}) {
  const stars = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);

  const handleRating = (i) => {
    return i <= (hover || rate) ? "#FFE500" : "#CFCFCF";
  };
  return (
    <section className="flex items-center gap-1 ">
      {stars.map((star, i) => {
        return (
          <span
            className={`hover:cursor-pointer `}
            style={{ color: handleRating(star) }}
            key={i}
            onClick={() => {
              handleRate(star,id);
            }}
            onMouseEnter={() => {
              setHover(star);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
          ><FaStar color={`${handleRating(star)}`} /></span>
        );
      })}
    </section>
  );
}
