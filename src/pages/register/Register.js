import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


import './Register.css'

export default function Register() {

    const submit = async () => {
        // e.preventDefault();

            const newUser = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                //picture: picture,
                category: category,
                phoneNumber: phoneNumber,
                area: area,
                education: education,
                date: date,
                //doc: doc,
                titleExperience: titleExperience,
                startingDate: startingDate,
                endingDate: endingDate,
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



    const [firstNameChecked, setFirstNameChecked] = useState(false)
    const [lastNameChecked, setLastNameChecked] = useState(false)
    const [categoryChecked, setCategoryChecked] = useState(false)
    const [emailChecked, setEmailChecked] = useState(false)
    const [phoneNumberChecked, setPhoneNumberChecked] = useState(false)
    const [educationChecked, setEducationChecked] = useState(false)
    const [dateChecked, setDateChecked] = useState(false)
    const [areaChecked, setAreaChecked] = useState(false)
    const [titleExperienceChecked, setTitleExperienceChecked] = useState(false)
    const [startingDateChecked, setStartingDateChecked] = useState(false)
    const [endingDateChecked, setEndingDateChecked] = useState(false)
    const [pictureChecked, setPictureChecked] = useState(false)
    const [docChecked, setDocChecked] = useState(false)
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
    }, [
        firstName,
        lastName,
        category,
        email,
        phoneNumber,
        education,
        date,
        area,
        titleExperience,
        startingDate,
        endingDate,
        picture,
        doc,
        password, 
        confirmPassword,
    ]);

    
   
    

    const handleCompleteForm =()=> {

    }

    return (
        <div className="register">
   
            <h2>Crééz votre compte</h2>
            
            <form onSubmit={submit}>
                
                {/* <label>Photo de profil: </label>
                <input type="image" id="picture" alt="" /> */}

                <label>Prénom: </label>
                <input type="text" id="firstname" onChange={e => setFirstName(e.target.value)} />

                <label>Nom: </label>
                <input type="text" id="lastname" onChange={e => setLastName(e.target.value)} />

                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)} />

                <label>Télephone mobile: </label>
                <input type="tel" id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} />

                <label>Statut: </label>
                <select name="category" id="category" onChange={e => setCategory(e.target.value)} >
                    <option value="statut1">statut1</option>
                    <option value="statut2">statut2</option>
                    <option value="statut3">statut3</option>
                    <option value="statut4">statut4</option>
                </select>

                <label>Région: </label>
                <select name="area" id="area" onChange={e => setArea(e.target.value)} >
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <label>Formation: </label>
                <select name="education" id="education" onChange={e => setEducation(e.target.value)} >
                    <option value="formation1">formation1</option>
                    <option value="formation2">formation2</option>
                    <option value="formation3">formation3</option>
                </select>

                <label>Année de formation: </label>
                <select name="date" id="date" onChange={e => setDate(e.target.value)} >
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
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <label>Date de fin: </label>
                <select name="endingDate" id="endingDate" onChange={e => setEndingDate(e.target.value)} >
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
                <input type="password" placeholder="Confirmer mot de passe" onChange={e => setConfirmPassword(e.target.value)}/>
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
