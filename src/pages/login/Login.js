import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import axios from "axios"

export default function Login() {


    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault()
        const loginUser = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }
        const loginResponse = await axios.post("http://localhost:8000/home/logIn", loginUser, { withCredentials: true }) //withCredentials => pour indiquer à Axios de passer le Cookie
            .then((res) => {
                console.log(res);

                // History Push à mettre ICI avec la condition
                // if (cookie exist ?)
                // if (res.message === "la phrase qu'il faut") {
                //history.push("/home");
                //} else { ici le cas ou c'est }

            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
        console.log(loginUser);
    }


    return (
        <div className="login">
            <form onSubmit={submit}>
                <input className="login-input" type="email" id="email" placeholder="Email" required />
                <input className="login-input" type="password" id="password" placeholder="Mot de passe" required />

                <button type="submit" className="login-button" >Se connecter</button>

            </form>
            <Link to="/register">
                <button>Créez votre compte</button>
            </Link>
            <button className="forgot-password">Mot de passe oublié ?</button>
        </div>
    )
}
