import React, {useContext, useEffect} from 'react'
import Main from '../main/Main'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Takeinput from '../takeinput/Takeinput'
import Textinput from '../textinput/Textinput'
import { useNavigate } from 'react-router-dom'
import { Data } from '../../context/Userdata'
import Create from '../create/Create'
import Takeimageinput from '../takeimageinput/Takeimageinput'
import Navbar from '../navbar/Navbar'

export default function Customizepage() {
  const b = useContext(Data)
    const navigate = useNavigate();
    useEffect(() => {
      let x = localStorage.getItem("userid")
        // Check if the user is not logged in and redirect to login page
        if ( x=== null) {
          console.log("hit");
          navigate("/login");
        }
        else{
          b.userinitialdata(localStorage.getItem("userid"))
        }
      }, []);
  return (
    <div>
      <Navbar/>
      <Takeimageinput/>
      <Takeinput/>
      <Textinput/>
      <Main/>
      <Contact/>
      <Footer/>
    </div>
  )
}
