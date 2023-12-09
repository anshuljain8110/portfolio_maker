import React,{useContext} from 'react'
import "./Textinput.css"
import {Data} from "../../context/Userdata"
export default function Textinput() {
    const b = useContext(Data)
    let prp = b.githublink
    let setprp = b.setgithublink
    if(b.linkpointer===2){
        prp = b.insta
        setprp = b.setinsta
    }
    else if(b.linkpointer===3){
        prp = b.leetlink
        setprp = b.setleetlink
    }
    else if(b.linkpointer===1){
        prp = b.telegramlink
        setprp = b.settelegramlink
    }
    else if(b.linkpointer===4){
        prp = b.ytlink
        setprp = b.setytlink
    }
    else if(b.linkpointer===5){
        prp = b.ldinlink
        setprp = b.setldinlink
    }
    return (
        <div id='textinput' style={b.linkdisplay?{top:"10px"}:{top:"-200px"}}>
            <div className='inputbox'>
                <label htmlFor="for">Enter your link here:</label>
                <input type="text" placeholder='www.xyz.com (Optional)'value={prp} onChange={e=>{setprp(e.target.value)}}/>
                <p>It is not mandatory to fill the links. If you don't fill it then <br/>it will be not displayed on your generated porfolio WebApp
                </p>
                <button onClick={()=>{b.setlinkdisplay(false)}}>X</button>
            </div>
        </div>
    )
}
