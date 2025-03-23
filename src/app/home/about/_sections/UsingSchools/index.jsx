import Image from 'next/image'
import React from 'react'
import youngwoman from "@/assets/about/young-woman.png";


export default function UsingSchoolsSection() {
  return (
    <section className='py-6 my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center max-w-screen-xl mx-auto mt-6'>
            {/* left  */}
            <div>
                <Image
                    alt='young woman jumping'
                    src={youngwoman}
                    className='max-w-full'
                />
            </div>
            {/* right */}
            <div className='flex flex-col gap-4'>
                <h4 className='font-bold text-3xl'>By using OCTAR, schools can</h4>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.1667L16 19.1667L29.3333 5.83333M28 16.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V7.16667C4 6.45942 4.28095 5.78115 4.78105 5.28105C5.28115 4.78095 5.95942 4.5 6.66667 4.5H21.3333" 
                            stroke="#6E75E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>Transform Traditional Curriculum</h6>
                        <p className='text-sm'>
                            Core subjects like language, math, science, 
                            and social studies become AR-based experiences, making abstract concepts tangible.
                        </p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.1667L16 19.1667L29.3333 5.83333M28 16.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V7.16667C4 6.45942 4.28095 5.78115 4.78105 5.28105C5.28115 4.78095 5.95942 4.5 6.66667 4.5H21.3333" 
                            stroke="#6E75E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>Enhance Teacher Support</h6>
                        <p className='text-sm'>
                            OCTAR provides teachers with an intuitive dashboard to track student progress, 
                            customize lesson plans, and seamlessly integrate AR content
                        </p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.1667L16 19.1667L29.3333 5.83333M28 16.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V7.16667C4 6.45942 4.28095 5.78115 4.78105 5.28105C5.28115 4.78095 5.95942 4.5 6.66667 4.5H21.3333" 
                            stroke="#6E75E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>Promote Active Learning</h6>
                        <p className='text-sm'>
                            Students interact with 3D objects, characters, 
                            and stories, enhancing retention and engagement
                        </p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='py-1'>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.1667L16 19.1667L29.3333 5.83333M28 16.5V25.8333C28 26.5406 27.719 27.2189 27.219 27.719C26.7189 28.219 26.0406 28.5 25.3333 28.5H6.66667C5.95942 28.5 5.28115 28.219 4.78105 27.719C4.28095 27.2189 4 26.5406 4 25.8333V7.16667C4 6.45942 4.28095 5.78115 4.78105 5.28105C5.28115 4.78095 5.95942 4.5 6.66667 4.5H21.3333" 
                            stroke="#6E75E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h6 className='font-bold text-lg'>Track Learning Progress</h6>
                        <p className='text-sm'>
                        §  Real-time analytics help teachers monitor student development, 
                        providing insights for personalized support.CTA Button: Explore How OCTAR Works
                        </p>
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary'>Start Your Free Trial</button>
                </div>
            </div>
        </div>
    </section>
  )
}
