import React from 'react'
import TargetSection from '../../../_sections/Target';

export default async function page({params}) {
    const {targetId} = await params;
  return (
    <div>
        <TargetSection targetId={targetId}/>
    </div>
  )
}
