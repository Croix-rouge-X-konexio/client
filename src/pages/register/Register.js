import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


import './Register.css'

export default function Register() {

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

    //on a besoin de ces states pour la vérification des champs obligatoires

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [category, setCategory] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [education, setEducation] = useState()
    const [date, setDate] = useState()
    const [area, setArea] = useState()
    const [titleExperience, setTitleExperience] = useState()
    const [startingDate, setStartingDate] = useState()
    const [endingDate, setEndingDate] = useState()
    const [picture, setPicture] = useState()
    const [doc, setDoc] = useState()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



    
    const [passwordChecked, setPasswordChecked] = useState(false)
    const [confirmPasswordChecked, setConfirmPasswordChecked] = useState(false)

    const [completedForm, setCompletedForm] = useState(false)

    useEffect(() => {
        
        if(password.length > 6) {
            setPasswordChecked(true)
        } else {
            setPasswordChecked(false)
        }
        if(password === confirmPassword) {
            setConfirmPasswordChecked(true)
        } else {
            setConfirmPasswordChecked(false)
        }

        if(passwordChecked) {
            if (confirmPasswordChecked) {
                setCompletedForm(true)
            } else {
                setCompletedForm(false)
            }
        } else {
            setCompletedForm(false)
        }

    }, [
        password, 
        confirmPassword,
        passwordChecked,
        confirmPasswordChecked,
    ]);

    
   
    


    return (
        <div className="register">
   
            <h2>Crééz votre compte</h2>
            
            <form onSubmit={submit}>
                
                {/* <label>Photo de profil: </label>
                <input type="image" id="picture" alt="" /> */}

                <label>Prénom*: </label>
                <input type="text" id="firstname" onChange={e => setFirstName(e.target.value)} required />

                <label>Nom*: </label>
                <input type="text" id="lastname" onChange={e => setLastName(e.target.value)} required />

                <label>Email*: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)} required />

                <label>Télephone mobile*: </label>
                <input type="tel" id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} required />

                <label>Statut*: </label>
                <select name="category" id="category" onChange={e => setCategory(e.target.value)} required >
                    <option value="statut1">Etudiant</option>
                    <option value="statut2">Apprenti</option>
                    <option value="statut3">Alumni étudiant</option>
                    <option value="statut4">Alumni apprenti</option>
                </select>

                <label>Région*: </label>
                <select name="area" id="area" onChange={e => setArea(e.target.value)} required >
                    <option value="Auvergne-Rhône-Alpe">Auvergne-Rhône-Alpes</option>
                    <option value="Bourgogne-Franche-Compté">Bourgogne-Franche-Compté</option>
                    <option value="Bretagne">Bretagne</option>
                    <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                    <option value="Grand Est">Grand Est</option>
                    <option value="Hauts-de-France">Hauts-de-France</option>
                    <option value="Ile-de-France">Ile-de-France</option>
                    <option value="Normandie">Normandie</option>
                    <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                    <option value="Occitanie">Occitanie</option>
                    <option value="Pays-de-la-Loire">Pays-de-la-Loire</option>
                    <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
                </select>

                <label>Formation*: </label>
                <select name="education" id="education" onChange={e => setEducation(e.target.value)} required >
                    <option value="formation1">formation1</option>
                    <option value="formation2">formation2</option>
                    <option value="formation3">formation3</option>
                </select>

                <label>Année de formation*: </label>
                <select name="date" id="date" onChange={e => setDate(e.target.value)} required >
                    <option value="formation1">formation1</option>
                    <option value="formation2">formation2</option>
                    <option value="formation3">formation3</option>
                </select>

                {/* <label>Attestation de formation: </label>
                <input type="file" /> */}
                
                <label>Dernier poste occupé: </label>
                <input type="text" id="titleExperience" onChange={e => setTitleExperience(e.target.value)} />

                <label>Date de début: </label>
                <select name="startingDate" id="startingDate" onChange={e => setStartingDate(e.target.value)} >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="">2018</option>
                </select>

                <label>Date de fin: </label>
                <select name="endingDate" id="endingDate" onChange={e => setEndingDate(e.target.value)} >
                    <option value="En cours">En cours</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

                <label>Mot de passe*: </label>
                <input type="password" id="Mot de passe" onChange={e => setPassword(e.target.value)} required />
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
                <input type="password" placeholder="Confirmer mot de passe" onChange={e => setConfirmPassword(e.target.value)} required />
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
                {completedForm ? (
                    <>
                    <Link to="/waitingforvalidation">
                    <button type="submit" className="register-button">S'enregistrer</button>
                    </Link>
                    </>
                ) : (
                    <>
                    <button disabled type="submit" className="register-button">S'enregistrer</button>
                    </>
                )
                }

            </form>
            
            Vous avez déjà un compte ?
            <Link to="/">
                <button>Connectez vous</button>
            </Link>
        </div>
        );
}
