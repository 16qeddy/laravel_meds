import React from 'react'
import MedCard from './MedCard.js';

export default function MedList(props) {
  return (
    <div className="medList">
      {props.data.conceptProperties.map((item, index)=>{
        return <MedCard data={item} key={index}/>
      })}
    </div>
  )
}
