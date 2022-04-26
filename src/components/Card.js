import React from 'react'

export default function Card(props) {
  return (
    <div className='maininner2'>
    <div className='inner1'>
        {props.id}
    </div>
    
    <div className='inner2'>
        <h1 className = 'headings' > {props.name} </h1>
    </div>
    
    <div className='inner3'>
    <i class="fa-solid fa-pen-to-square fa-xl fa-sm icon4" onClick={()=>{props.uclick(props.idd)}}></i>
    <i className="fa-solid fa-delete-left fa-xl fa-sm icon3" onClick={()=>{props.dclick(props.idd)}}></i>
    </div>
    
    </div>
  )
}
