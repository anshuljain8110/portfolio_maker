import React, { useContext } from 'react'
import "./Main.css"
import {Data} from "../../context/Userdata"
export default function Main() {
    const b = useContext(Data)
    const mainfunc=(e,i)=>{
        e.stopPropagation();
        b.setinputdisplay(true);
        b.setpointer(i);
        b.setlinkdisplay(false)
        b.seterrormessagedisplay(false)
    }
  return (
    <div className="main" style={{backgroundColor:b.maincolor}} onClick={(e)=>{mainfunc(e,0)}}>
        <div className="content">
            <input maxLength="25" type="text" className='name' style={{color:b.namecolor,backgroundColor:b.maincolor}} onClick={(e)=>{mainfunc(e,1)}} value={b.username}
            onChange={e=>{b.setusername(e.target.value)}} placeholder='Name Here'/>

            <input maxLength="30" type="text" className='profession' style={{color:b.professioncolor,backgroundColor:b.maincolor}} onClick={(e)=>{mainfunc(e,2)}} value={b.profession}
            onChange={e=>{b.setprofession(e.target.value)}} placeholder='Profession Here'/>

            <textarea maxLength="300" cols="60" rows="5" className='description' style={{color:b.descriptioncolor,backgroundColor:b.maincolor}} onClick={(e)=>{mainfunc(e,3)}} value={b.description}
            onChange={e=>{b.setdescription(e.target.value)}} placeholder='Write About Yourself Here (Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni omtnis doloremque corporis necessitaibus id, magnam temporibus voluptatem blanditiis. Nobis debitis possimus, quaerat sunt nemo accusamus exercitationem quis. Fuga, ullam? Aperiam?)'/>
            
            <button className="cv" style={{backgroundColor:b.cvcolor}} onClick={(e)=>{mainfunc(e,4)}}>
                Download Cv
            </button>
        </div>
        <div className="mainimage">
            <div className="imgbackground" style={{backgroundColor:b.mainimagecolor}} onClick={(e)=>{mainfunc(e,5)}}>
                <img src={b.mainimage} alt="none" />
            </div>
        </div>
    </div>
  )
}
