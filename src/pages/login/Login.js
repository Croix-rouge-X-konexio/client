import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import logo from '../../images/logo.jpg'
import axios from "axios"

import './Login.css'

export default function Login() {


    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault()
        const loginUser = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }
        console.log(process.env.REACT_APP_API_URL + "/home/logIn")
        await axios.post(process.env.REACT_APP_API_URL + "/home/logIn", loginUser, { withCredentials: true }) //withCredentials => pour indiquer à Axios de passer le Cookie
            .then((res) => {
                if (res.data.message === "You are connected") {
                    localStorage.setItem("isLogin", "true");
                    history.push("/home");
                }
                else if (res.data.message === "Account waiting for validation") {
                    history.push("/waitingforvalidation");
                }
                else {
                    alert("Invalid email or password");
                }
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
        // console.log(loginUser);
    }


    return (
        <div className="login">
            <form onSubmit={submit}>
                
                <img className="logo-img" src={logo} alt="" />

                <input className="login-input login-element" type="email" id="email" placeholder="Email" required />
                <input className="login-input login-element" type="password" id="password" placeholder="Mot de passe" required />

                <button type="submit" className="login-button login-element" >Se connecter</button>
                <Link to="/register">
                    <button className="create-account-button login-element-small">Créez votre compte</button>
                </Link>
                <button className="forgot-password login-element-small">Mot de passe oublié ?</button>
            </form>
        </div>
    )
}
