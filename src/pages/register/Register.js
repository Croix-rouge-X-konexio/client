import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


import './Register.css'
// const history = useHistory();
// history.push("/waitingForValidation");

export default function Register() {

    const history = useHistory()

    const [image, setImage] = useState()

    const handleChange = (e) => {
        setImage(e.target.files[0])
    }

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData(); // On crée/rend accessible le formData

        formData.append("image", image);
        formData.append("email", document.getElementById("email").value)
        formData.append("password", document.getElementById("password").value)
        formData.append("firstName", document.getElementById("firstName").value)
        formData.append("lastName", document.getElementById("lastName").value)
        formData.append("category", document.getElementById("category").value)
        formData.append("phoneNumber", parseInt(document.getElementById("phoneNumber").value))
        formData.append("area", document.getElementById("area").value)
        formData.append("education", document.getElementById("education").value)
        formData.append("school", document.getElementById("school").value)
        formData.append("date", parseInt(document.getElementById("date").value))
        formData.append("titleExperience", document.getElementById("titleExperience").value)
        formData.append("startingDate", parseInt(document.getElementById("startingDate").value))
        formData.append("endingDate", parseInt(document.getElementById("endingDate").value))
        console.log("Submit");

        for (var value of formData.values()) {
            console.log(value);
        }

        console.log("END Submit");

        axios.post(process.env.REACT_APP_API_URL + "/home/register", formData, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
            history.push("/waitingforvalidation");
    };

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const [passwordChecked, setPasswordChecked] = useState(false)
    const [confirmPasswordChecked, setConfirmPasswordChecked] = useState(false)

    const [completedForm, setCompletedForm] = useState(false)

    useEffect(() => {

        if (password.length > 7) {
            setPasswordChecked(true)
        } else {
            setPasswordChecked(false)
        }
        if (password === confirmPassword) {
            setConfirmPasswordChecked(true)
        } else {
            setConfirmPasswordChecked(false)
        }

        if (passwordChecked) {
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

            <form onSubmit={submit}>

                <h2>Crééz votre compte</h2>

                {/* <label>Photo de profil: </label>
                <input type="image" id="picture" alt="" /> */}

                <label>Prénom*: </label>
                <input className="register-element" type="text" id="firstName" required />

                <label>Nom*: </label>
                <input className="register-element" type="text" id="lastName" required />

                <label>Email*: </label>
                <input className="register-element" type="email" id="email" required />

                <label>Télephone mobile*: </label>
                <input className="register-element" type="tel" id="phoneNumber" required />

                <label>Photo de profil: </label>
                <input type="file" onChange={handleChange} />

                <label>Statut*: </label>
                <select className="register-element" name="category" id="category" required >
                    <option value="Etudiant">Etudiant</option>
                    <option value="Apprenti">Apprenti</option>
                    <option value="Alumni étudiant">Alumni étudiant</option>
                    <option value="Alumni apprenti">Alumni apprenti</option>
                </select>

                <label>Région*: </label>
                <select className="register-element" name="area" id="area" required >
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
                <select className="register-element" name="education" id="education" required >
                    <option value="Ambulancier">Ambulancier</option>
                    <option value="Brancardier">Brancardier</option>
                    <option value="Infirmier">Infirmier</option>
                </select>

                <label>Institut*: </label>
                <select className="register-element" name="school" id="school" required >
                    <option value="Paris">Paris</option>
                    <option value="Bordeaux">Bordeaux</option>
                    <option value="Toulouse">Toulouse</option>
                </select>

                <label>Année de formation*: </label>
                <select className="register-element" name="date" id="date" required >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

                {/* <label>Attestation de formation: </label>
                <input type="file" /> */}

                <label>Dernier poste occupé: </label>
                <input className="register-element" type="text" id="titleExperience" />

                <label>Date de début: </label>
                <select className="register-element" name="startingDate" id="startingDate" >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>

                <label>Date de fin: </label>
                <select className="register-element" name="endingDate" id="endingDate" >
                    <option value="En cours">En cours</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

                <label>Mot de passe*: </label>
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
                <input className="register-element" type="password" id="password" onChange={e => setPassword(e.target.value)} required />
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
                <input className="register-element" type="password" placeholder="Confirmer mot de passe" onChange={e => setConfirmPassword(e.target.value)} required />

                {completedForm ? (
                    <>

                        <button type="submit" className="register-button register-element">S'enregistrer</button>

                    </>
                ) : (
                    <>
                        <button disabled type="submit" className="register-button register-element">S'enregistrer</button>
                    </>
                )
                }
                {/* <span className="register-element">Vous avez déjà un compte ?</span> */}
                <Link to="/">
                    <button className="return-login register-element">Se connecter avec un compte existant</button>
                </Link>
            </form>
        </div>
    );
}
