import BackSection from '@/components/BackSection'
import PricingPlansSection from '@/components/PlansSection'
import React from 'react'

export default function ManageSubs() {
  return (
    <div>
        <BackSection />
        <PricingPlansSection href={`manage`}/>
    </div>
  )
}
