import React from 'react'
import { useState } from 'react';
import '../App.css';

const Label = (props) => {
    let [name, setName] = useState();
  return (
    <div>
    <input placeholder={props.labelPlaceholder} onChange={(e)=>{setName(e.target.value)}} />
    {name}
  </div>
  )
}

export default Label