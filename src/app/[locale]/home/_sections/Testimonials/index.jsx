import React from "react";
import testimonail1 from "@/assets/home/testi1.png";
import testimonail2 from "@/assets/home/testi2.png";
import Image from "next/image";
import Link from "next/link";


export default function TestimonialsSection (){
  return (
    <section className="">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto '>
        <div className="md:col-span-2">
          <Image src={testimonail1} alt="testimonial 1" className="max-w-full max-h-full"/>
        </div>
        <div>
          <Link href={"/home/share-story"} className="btn btn-primary">Share Your Story</Link>
        </div>
        <div className="md:mt-[-190px] md:ms-[-30px] mt-[0px] ms-[0px]">
          <Image src={testimonail2} alt="testimonial 1" className="max-w-full max-h-full"/>
        </div>
      </div>
      
    </section>

  );
};