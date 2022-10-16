import React from 'react'
import btn from './Btnlink.module.css'

export default function Btnlink(props) {
  return (
    <div>
        <a href={props.plink} target='_blank' rel='noopener noreferrer'><img src={props.pic} alt='sml' className={btn.design} /></a> 
    </div>
  )
}
