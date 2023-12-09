import React, { useContext } from 'react'
import "./Errormessage.css"
import { Data } from '../../context/Userdata'

export default function Errormessage() {
  const b=useContext(Data)
  return (
    <div id='errormessage' style={b.errormessagedisplay===true?{top:"10px"}:{top:"-50px"}}>
      <div>
        <p className='message'>{b.errormessage}</p> 
        <button onClick={()=>{b.seterrormessagedisplay(false)}}>X</button>
      </div>
    </div>
  )
}
