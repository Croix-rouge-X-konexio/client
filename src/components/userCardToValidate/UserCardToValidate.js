
import React from 'react';

import axios from "axios";


import './UserCardToValidate.css'

export default function UserCardToValidate(props) {



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
                    <div className="userCardToValidate-userInfo-detail-name">
                    {props.firstName} {props.lastName}
                    </div>
                    <div className="userCardToValidate-userInfo-detail-mail">
                    Email : {props.email}
                    </div>
                    <div>
                        Is admin : {props.isAdmin}
                    </div>
                    <div>
                        Statut : {props.isValidate}
                    </div>
                </div>
            </div>
            <div className="userCardToValidate-button">
                <button className="delete" onClick={deleteUser} userId={props.userid}>Supprimer</button>
                <button className="validate" onClick={validateUser} userId={props.userid}>Valider</button>
            </div>

        </div>
    )
}

