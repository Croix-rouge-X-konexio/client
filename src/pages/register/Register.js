import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


import './Register.css'

export default function Register () {

    const submit = async () => {
        // e.preventDefault();

            const newUser = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                //picture: document.getElementById("email").value,
                category: document.getElementById("category").value,
                phoneNumber: document.getElementById("phoneNumber").value,
                area: document.getElementById("area").value,
                education: document.getElementById("education").value,
                date: document.getElementById("date").value,
                //doc: document.getElementById("email").value,
                titleExperience: document.getElementById("titleExperience").value,
                startingDate: document.getElementById("startingDate").value,
                endingDate: document.getElementById("endingDate").value,
            }
            await axios.post("http://localhost:5000/users/register", newUser);
            
    };

    const [password, setPassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState(false)
    const [passwordChecked, setPasswordChecked] = useState(false)
    const [confirmPasswordChecked, setconfirmPasswordChecked] = useState(false)

    const passwordCheck=()=> {
        if(password.length >= 8) {
            setPasswordChecked(true)
        } else {
            setPasswordChecked(false)
        }
    }
   
    const confirmPasswordCheck=()=> {
        if(password === confirmPassword) {
            setconfirmPasswordChecked(true)
        } else {
            setconfirmPasswordChecked(false)
        }
    }

    return ( 
        <div className="register">
   
            <h2>Crééz votre compte</h2>
            
            <form onSubmit={submit}>
                
                {/* <label>Photo de profil: </label>
                <input type="image" id="picture" alt="" /> */}

                <label>Prénom: </label>
                <input type="text" id="firstname" />

                <label>Nom: </label>
                <input type="text" id="lastname" />

                <label>Email: </label>
                <input type="email" id="email" />

                <label>Télephone mobile: </label>
                <input type="tel" id="phoneNumber" />

                <label>Statut: </label>
                <select name="category" id="category" >
                    <option value="statut1">statut1</option>
                    <option value="statut2">statut2</option>
                    <option value="statut3">statut3</option>
                    <option value="statut4">statut4</option>
                </select>

                <label>Région: </label>
                <select name="area" id="area" >
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <label>Formation: </label>
                <select name="education" id="education" >
                    <option value="formation1">formation1</option>
                    <option value="formation2">formation2</option>
                    <option value="formation3">formation3</option>
                </select>

                <label>Année de formation: </label>
                <select name="date" id="date" >
                    <option value="formation1">formation1</option>
                    <option value="formation2">formation2</option>
                    <option value="formation3">formation3</option>
                </select>

                {/* <label>Attestation de formation: </label>
                <input type="file" /> */}
                
                <label>Dernier poste occupé: </label>
                <input type="text" id="titleExperience" />

                <label>Date de début: </label>
                <select name="startingDate" id="startingDate" >
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <label>Date de fin: </label>
                <select name="endingDate" id="endingDate" >
                    <option value="En cours">En cours</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

                <label>Mot de passe: </label>
                <input type="password" id="Mot de passe" onChange={e => setPassword(e.target.value)} />
                {passwordChecked ? 
                (
                    <>
                    Ok
                    </>
                ) : (
                    <>
                    Le mot de passe doit faire au moins 8 caractères
                    </>
                )
                }
                <input type="password" placeholder="Confirmer mot de passe" onChange={e => setconfirmPassword(e.target.value)}/>
                {confirmPasswordChecked ? 
                (
                    <>
                    Ok
                    </>
                ) : (
                    <>
                    Le mot de passe ne correspond pas
                    </>
                )
                }
                <button type="submit" className="register-button">S'enregistrer</button>
            </form>
            
            Vous avez déjà un compte ?
            <Link to="/">
                <button>Connectez vous</button>
            </Link>
        </div>
        );
}
