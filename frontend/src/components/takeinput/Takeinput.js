import React, { useContext } from 'react'
import {Data} from "../../context/Userdata"
import "./Takeinput.css"
export default function Takeinput() {
    const b = useContext(Data)
    let prp=b.maincolor,setprp=b.setmaincolor

    if(b.pointer===1){
      prp=b.namecolor;
      setprp=b.setnamecolor;
    }
    else if(b.pointer===2){
      prp=b.professioncolor;
      setprp=b.setprofessioncolor;
    }
    else if(b.pointer===3){
      prp=b.descriptioncolor
      setprp=b.setdescriptioncolor
    }
    else if(b.pointer===4){
      prp=b.cvcolor
      setprp=b.setcvcolor
    }
    else if(b.pointer===5){
      prp=b.mainimagecolor
      setprp=b.setmainimagecolor
    }
    else if(b.pointer===6){
      prp=b.contactcolor
      setprp=b.setcontactcolor
    }
    else if(b.pointer===7){
      prp=b.contactbackgroundcolor
      setprp=b.setcontactbackgroundcolor
    }
  return (
    <div className='input' style={b.inputdisplay===false?{top:"-200px"}:{top:"10px"}}>
      <div className="inputbox">
        <input type="color" className="color" id="exampleColorInput" value={prp} title="Choose your color" onChange={(e)=>{setprp(e.target.value)}}></input>  
        <button className="cross" onClick={()=>{b.setinputdisplay(false)}}>X</button>
      </div>
    </div>
  )
}
