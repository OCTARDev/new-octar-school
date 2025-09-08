import React from 'react'
import HeroSection from './_sections/Hero'
import UsePortalSection from './_sections/UsePortal'
import CommunitySection from './_sections/Community'
import GallerySection from './_sections/Gallery'
import NewMembersSection from './_sections/NewMembers'

export default function TeacherPortal() {
  return (
    <div className='my-10 px-4 flex flex-col gap-8 md:gap-24 max-w-6xl mx-auto'>
      <HeroSection />
      <UsePortalSection />
      <CommunitySection />
      <GallerySection />
      <NewMembersSection />
    </div>
  )
}
