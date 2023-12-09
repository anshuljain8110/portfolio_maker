import React, { useState,useEffect, useContext } from 'react'
import "./Register.css"
import Errormessage from '../errormessage/Errormessage'
import { Link, useNavigate } from 'react-router-dom'
import { Data } from '../../context/Userdata'

export default function Register() {
    const b = useContext(Data)
    const [userid, setuserid] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        // Check if the user is not logged in and redirect to login page
        if (localStorage.getItem("userid") !== null) {
          console.log("hit");
          navigate("/");
        }
      }, [navigate]);

    const create = (e) => {
        e.preventDefault()
        const func = async () => {
            let response = await fetch("http://localhost:5000/register/", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'userid': userid,
                    'password': password
                }
            })
            response = await response.json()
            console.log(response)

            if (response.response === "user already exists") {
                b.seterrormessage("User alredy exists login to continue")
                b.seterrormessagedisplay(true)
                setTimeout(()=>{
                    b.seterrormessagedisplay(false)
                },5000)
            }
            else {
                localStorage.setItem("userid", response.response)
                b.seterrormessagedisplay(false)
                navigate("/")
            }
        }
        func()

    }
    return (
        <div id='register'>
            <div>
                <h2>Create A New Account</h2>
                <form onSubmit={e => { create(e) }}>
                    <label htmlFor="userid">Enter Your Mobile Number</label>
                    <input className='userid' type="number" placeholder='Type 10 Digit Number' value={userid} onChange={e => { setuserid(e.target.value) }} />
                    <label htmlFor="password">Create New Password</label>
                    <input className='password' type="text" placeholder='Type Password min(8)' value={password} onChange={e => { setpassword(e.target.value) }} />
                    <button disabled={(userid.length !== 10 || password.length < 8) ? 1 : 0} type="submit">Create</button>
                    <div>
                        <p>Already Have A Account !!</p>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
