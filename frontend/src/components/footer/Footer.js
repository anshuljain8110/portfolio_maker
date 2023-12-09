import React, { useContext } from 'react'
import "./Footer.css"
import { Data } from '../../context/Userdata'
export default function Footer() {
  const b = useContext(Data)
  const func = (i) =>{
    b.setlinkdisplay(true)
    b.setlinkpointer(i)
    b.setinputdisplay(false)
    b.seterrormessagedisplay(false)
  }
  return (
    <div id='footer'>
      <h2>All Rights Reserved</h2>
      <div>
        <button onClick={()=>{func(0)}}><img height="30px" src={process.env.PUBLIC_URL + "/svg/github142.svg"} alt="None" /></button>
        <button onClick={()=>{func(1)}}><img height="45px" src={process.env.PUBLIC_URL + "/svg/telegram.svg"} alt="None" /></button>
        <button onClick={()=>{func(2)}}><img height="30px" src={process.env.PUBLIC_URL + "/svg/instagram.svg"} alt="None" /></button>
        <button onClick={()=>{func(3)}}><img height="30px" src={process.env.PUBLIC_URL + "/svg/leetcode.svg"} alt="None" /></button>
        <button onClick={()=>{func(4)}}><img height="30px" src={process.env.PUBLIC_URL + "/svg/youtube.svg"} alt="None" /></button>
        <button onClick={()=>{func(5)}}><img height="30px" src={process.env.PUBLIC_URL + "/svg/linkedin.svg"} alt="None" /></button>
      </div>
    </div>
  )
}
