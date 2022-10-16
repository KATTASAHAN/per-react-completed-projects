import React from 'react'
import pho from './Photo.module.css'
import pp from '../assets/profileimg.png'

export default function Photo() {
  return (
    <div className={pho.photospace}><img src={pp} alt='img' /></div>
  )
}
