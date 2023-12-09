import React, { useCallback, useContext } from 'react'
import ARR from './images'
import './takeimageinput.css'
import { Data } from '../../context/Userdata'

export default function Takeimageinput() {
    const b=useContext(Data)
  return (
    <div id='images' style={(b.pointer===5) && (b.inputdisplay)?{bottom:"10px"}:{bottom:"-200px"}}>
        <div>
      {ARR.map((e)=>{
          return <button onClick={()=>{b.setmainimage(e)}}><img src={e} height="70px" /></button>
        })}
        </div>
    </div>
  )
}
