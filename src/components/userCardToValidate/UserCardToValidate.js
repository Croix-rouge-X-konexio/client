import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";


import './UserCardToValidate.css'

export default function UserCardToValidate() {



    const deleteUser = async () => {
        // const userId = retrouver l'id du user via la valeur ID enregistrée sur le bouton (dans le HTLM)
        await axios.delete(`http://localhost:8000/list/listUsers/:id`, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    const validateUser = async () => {
        // const userId = retrouver l'id du user via la valeur ID enregistrée sur le bouton (dans le HTLM)
        await axios.patch(`http://localhost:8000/list/listUsers/:id`, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    return (
        <div className="userCardToValidate">
            <div className="userCardToValidate-userInfo">
                <div className="userCardToValidate-userInfo-picture">

                </div>
                <div className="userCardToValidate-userInfo-detail">
                    <div className="userCardToValidate-userInfo-detail-name" /* value={user.id} */>
                        Jean Dupond
                    </div>
                    <div className="userCardToValidate-userInfo-detail-mail">
                        Email : jean.dupond@gmail.com
                    </div>
                    <div className="userCardToValidate-userInfo-detail-phone">
                        Tel : 07 12 34 56 78
                    </div>
                    <div className="userCardToValidate-userInfo-detail-education">
                        Formation : Infirmier à Paris en 2020
                    </div>
                    <div className="userCardToValidate-userInfo-detail-doc">
                        <button>Voir attestation</button>
                    </div>
                </div>
            </div>
            <div className="userCardToValidate-button">
                <button onClick={deleteUser} className="reject">supprimer</button>
                <button onClick={validateUser} className="validate">Valider</button>
            </div>

        </div>
    )
}

