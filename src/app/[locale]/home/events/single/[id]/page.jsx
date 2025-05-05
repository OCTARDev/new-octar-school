import React from 'react'
import SingleEventComponent from '../../_components/SingleEvent';

export default async function SingleEvent({params}) {
    const {id} = await params;
    
  return (
    <div>
        <SingleEventComponent id={id}/>
    </div>
  )
}
