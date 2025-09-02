import PointComponent from '@/components/PointComponent';
import { useTranslations } from 'next-intl';
import React from 'react'
import img from "@/assets/home/teacher-portal/community.png";
import Image from 'next/image';

export default function CommunitySection() {
    const t = useTranslations("home.parents");
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center max-w-6xl mx-auto'>
        {/* Left */}
        <div className='flex flex-col gap-6'>
            <h2 className='font-bold text-3xl mb-4'>
                OCTAR Teachers' Communiuty Principles & Behavior
            </h2>
            <p>
                To keep our community positive and supportive, please follow these guidelines
            </p>
            <div>
                <PointComponent
                    header="Respect First"
                    body="Treat everyone with respect, even when opinions differ."
                />
                <PointComponent 
                    header="Share Value"
                    body=" Post ideas, lesson plans, or resources that benefit others."
                />
                <PointComponent 
                    header="Use Appropriate Language"
                    body="Avoid inappropriate words or personal attacks."
                />
                <PointComponent 
                    header="Protect Privacy"
                    body="Do not share students’ or teachers’ personal information without permission."
                />
                <PointComponent 
                    header="Engage Positively"
                    body="Encourage others with constructive feedback and comments."
                />
            </div>
        </div>
        {/* Right */}
        <div>
            <Image src={img} className={"max-w-full w-5/6"} alt={"hero image"}/>
        </div>
    </div>
  )
}
