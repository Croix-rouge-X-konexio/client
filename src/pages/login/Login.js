import React, { useState, } from 'react'
import { Link, useHistory } from 'react-router-dom'

import axios from "axios"




export default function Login() {
    

    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const submit = async (e) => {
        // e.preventDefault()
        // try{
        //     const loginUser = {email, password}
        //     const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser)
        //     setUserData({
        //         token: loginResponse.data.token,
        //         user: loginResponse.data.user
        //     })
        //     localStorage.setItem("auth-token", loginResponse.data.token)
        //     history.push("/")
        // } catch(err) {
        //     err.response.data.msg && setError(err.response.data.msg)
        // }
        
    }


    return ( 
        <div className="login">
            <form onSubmit={submit}>
                <input className="login-input" type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                <input className="login-input" type="password" id="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} required />
                <input type="submit" value="Login" className="login-button" />
            </form>
            <Link to="/register">
                <button>Créez votre compte</button>
            </Link>
            <button className="forgot-password">Mot de passe oublié ?</button>
        </div>
    )
}
 