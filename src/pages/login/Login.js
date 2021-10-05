import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from "../../../context/userContext"
import axios from "axios"
import ErrorNotice from "../../misc/ErrorNotice"



export default function Login() {
    
    const { userData, setUserData } = useContext(UserContext)
    const history = useHistory()

    
    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const submit = async (e) => {
        e.preventDefault()
        try{
            const loginUser = {email, password}
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser)
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            })
            localStorage.setItem("auth-token", loginResponse.data.token)
            history.push("/")
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    }


    return ( 
        <div className="login">
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <form onSubmit={submit}>
                <input className="login-input" type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input className="login-input" type="password" id="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)}/>
                <input type="submit" value="Login" className="login-button" />
            </form>
            <Link to="/register">
                <button>Créez votre compte</button>
            </Link>
            <button className="forgot-password">Mot de passe oublié ?</button>
        </div>
    )
}
 