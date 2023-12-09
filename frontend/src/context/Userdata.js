import React, { createContext, useState } from 'react';
const Data = createContext()

export default function Userdata(props) {

  
  
  //pointer management
  const [inputdisplay, setinputdisplay] = useState(false)
  const [linkdisplay,setlinkdisplay] = useState(false)
  const [errormessagedisplay,seterrormessagedisplay] = useState(false)

  const [errormessage,seterrormessage] = useState("")
  const [pointer, setpointer] = useState(0)
  const [linkpointer,setlinkpointer] = useState(0)
  
  
  //main portfolio and text color state managers 
  const [maincolor, setmaincolor] = useState("#7163d9")
  
  const [username,setusername] = useState("")
  const [namecolor, setnamecolor] = useState("#ffffff")
  
  const [profession,setprofession] = useState("")
  const [professioncolor, setprofessioncolor] = useState("#ffffff")
  
  const [description,setdescription] = useState("")
  const [descriptioncolor, setdescriptioncolor] = useState("#ffffff")
  
  const [cvlink,setcvlink] = useState("")
  const [cvcolor, setcvcolor] = useState("#00ff88")
  
  const [mainimage,setmainimage] = useState("")
  const [mainimagecolor, setmainimagecolor] = useState("#9f91fd")
  
  
  
  
  //contact color management
  const [contactbackgroundcolor,setcontactbackgroundcolor] = useState("#ffffff")
  const [contactcolor,setcontactcolor] = useState("#7163f9")
  //contact content state manager
  const [location,setlocation] = useState("")
  const [email,setemail] = useState("")
  
  //footer links state manager
  const [githublink,setgithublink] = useState("")
  const [telegramlink,settelegramlink] = useState("")
  const [insta,setinsta] = useState("")
  const [leetlink,setleetlink] = useState("")
  const [ytlink,setytlink] = useState("")
  const [ldinlink,setldinlink] = useState("")

  
  
  const userinitialdata = async(paramid) =>{
    let userindata = await fetch(`http://localhost:5000/user/${paramid}`)
    userindata = await userindata.json()
    console.log(userindata)
    setmaincolor(userindata.maincolor)
    setusername(userindata.username)
    setnamecolor(userindata.namecolor)
    setprofession(userindata.profession)
    setprofessioncolor(userindata.professioncolor)
    setdescription(userindata.description)
    setdescriptioncolor(userindata.descriptioncolor)
    setcvlink(userindata.cvlink)
    setcvcolor(userindata.cvcolor)
    setmainimage(userindata.mainimage)
    setmainimagecolor(userindata.mainimagecolor)
    setcontactbackgroundcolor(userindata.contactbackgroundcolor)
    setcontactcolor(userindata.contactcolor)
    setlocation(userindata.location)
    setemail(userindata.email)
    setgithublink(userindata.github)
    settelegramlink(userindata.telegram)
    setinsta(userindata.insta)
    setleetlink(userindata.leetcode)
    setytlink(userindata.yt)
    setldinlink(userindata.ldin)
  }
  

  return (
    <Data.Provider value={{
      maincolor, setmaincolor,
      inputdisplay, setinputdisplay,
      namecolor, setnamecolor,
      pointer, setpointer,
      professioncolor, setprofessioncolor,
      descriptioncolor, setdescriptioncolor,
      cvcolor, setcvcolor,
      mainimagecolor, setmainimagecolor,
      contactcolor, setcontactcolor,
      contactbackgroundcolor,setcontactbackgroundcolor,
      linkdisplay,setlinkdisplay,
      githublink,setgithublink,
      linkpointer,setlinkpointer,
      telegramlink,settelegramlink,
      insta,setinsta,
      leetlink,setleetlink,
      ytlink,setytlink,
      ldinlink,setldinlink,
      username,setusername,
      profession,setprofession,
      description,setdescription,
      cvlink,setcvlink,
      mainimage,setmainimage,
      location,setlocation,
      email,setemail,
      userinitialdata,
      errormessagedisplay,seterrormessagedisplay,
      errormessage,seterrormessage
    }}>
      {props.children}
    </Data.Provider>
  )
}
export { Data }