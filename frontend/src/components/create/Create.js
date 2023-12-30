import React, { useContext } from 'react'
import { Data } from '../../context/Userdata'


export default function Create() {
    const b = useContext(Data)
    const func = async() => {
        let id = localStorage.getItem("userid")
        let data = {
            "maincolor": b.maincolor,
            "username": b.username,
            "namecolor": b.namecolor,
            "profession": b.profession,
            "professioncolor": b.professioncolor,
            "description": b.description,
            "descriptioncolor": b.descriptioncolor,
            "cvlink": b.cvlink,
            "cvcolor": b.cvcolor,
            "mainimage": b.mainimage,
            "mainimagecolor": b.mainimagecolor,
            "contactbackgroundcolor": b.contactbackgroundcolor,
            "contactcolor": b.contactcolor,
            "location": b.location,
            "email": b.email,
            "github": b.githublink,
            "telegram": b.telegramlink,
            "insta": b.insta,
            "leetcode": b.leetlink,
            "yt": b.ytlink,
            "ldin": b.ldinlink
        }
        data = JSON.stringify(data)

        let response = await fetch(`http://localhost:5000/update/${id}`,
        {
            method:"GET",
            headers:{"data":data}
        })
        response = await response.json()
        if(response.response==="successfull"){
            navigator.clipboard.writeText(`http://localhost:3000/user/?id=${localStorage.getItem("userid")}`);
            b.setinputdisplay(false)
            b.setlinkdisplay(false)
            b.seterrormessagedisplay(true);
            b.seterrormessage("Portfolio link coppied to clipboard")
            setTimeout(() => {
                b.seterrormessagedisplay(false)
            }, 3000);
        }
    }
    return (<>
        <button id='create' onClick={func} style={{color:"red"}}>create</button>
    </>
    )
}
