import React, { useContext } from 'react'
import "./Contact.css"
import { Data } from '../../context/Userdata'
export default function Contact() {
  const b = useContext(Data)
  const mainfunc = (e, i) => {
    e.stopPropagation();
    b.setinputdisplay(true);
    b.setpointer(i);
    b.setlinkdisplay(false)
  }
  return (
    <div id='contact' onClick={(e) => { mainfunc(e, 7) }} style={{ backgroundColor: b.contactbackgroundcolor }}>
      <div>
        <h2 onClick={(e) => { mainfunc(e, 6) }} style={{ color: b.contactcolor }}>Contact</h2>
      </div>
      <div className='information'>
        <div style={{ borderLeftColor: b.contactcolor }}>
          <svg onClick={(e) => { mainfunc(e, 6) }} width="80px" height="80px" viewBox="0 0 1024.00 1024.00" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M522.24 81.984a308.288 308.288 0 0 0-308.352 308.352c0 224.96 308.352 461.632 308.352 461.632s85.056-65.6 165.888-160.256a22.4 22.4 0 0 0-15.744-38.4 22.016 22.016 0 0 0-17.152 8.512l-0.064-0.064 74.496-109.376 3.52 2.176a21.568 21.568 0 0 0-3.968 11.968 22.4 22.4 0 0 0 22.4 22.464 22.272 22.272 0 0 0 20.992-15.36c33.92-58.56 57.92-121.216 57.92-183.232A308.224 308.224 0 0 0 522.24 81.984z" fill=""></path><path d="M716.864 620.416m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z" fill=""></path><path d="M522.24 126.784a263.808 263.808 0 0 0-263.552 263.552c0 163.008 191.168 341.824 263.552 403.648 72.384-61.824 263.552-240.64 263.552-403.648A263.872 263.872 0 0 0 522.24 126.784z m0 432.576a172.032 172.032 0 1 1 0-344.064 172.032 172.032 0 0 1 0 344.064z" fill={b.contactcolor}></path><path d="M522.24 387.328m-127.168 0a127.168 127.168 0 1 0 254.336 0 127.168 127.168 0 1 0-254.336 0Z" fill={b.contactbackgroundcolor}></path><path d="M186.304 936.384m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z" fill=""></path><path d="M263.04 913.984a22.464 22.464 0 0 0-22.4 22.4v0.064c0 12.288 10.112 22.4 22.4 22.4h595.2c12.288 0 22.4-10.048 22.4-22.4v-0.064a22.464 22.464 0 0 0-22.4-22.4h-595.2z" fill=""></path><path d="M292.8 359.36a16 16 0 0 1-15.744-18.816c25.6-144 153.28-183.616 158.656-185.216a16 16 0 0 1 9.152 30.656c-4.672 1.408-114.24 35.968-136.384 160.192a16 16 0 0 1-15.68 13.184z" fill="#FFFFFF"></path></g></svg>
          <div>
            <h3 style={{ color: b.contactcolor }} onClick={(e) => { mainfunc(e, 6) }}>Location</h3>
            <input type="text" className='location' placeholder='Location Here' style={{ backgroundColor: b.contactbackgroundcolor }} value={b.location}
            onChange={e=>{b.setlocation(e.target.value)}}/>
          </div>
        </div>
        <div style={{ borderLeftColor: b.contactcolor }}>
          <svg onClick={(e) => { mainfunc(e, 6) }} height="80px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill={b.contactcolor}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17-.3.41-.11.87.13 1.07z"></path> </g> </g></svg>
          <div>
            <h3 style={{ color: b.contactcolor }} onClick={(e) => { mainfunc(e, 6) }}>Email</h3>
            <input type="text" className='email' value={b.email}
            onChange={e=>{b.setemail(e.target.value)}} placeholder='Email Here' style={{ backgroundColor: b.contactbackgroundcolor }} />
          </div>
        </div>
      </div>
    </div>
  )
}
