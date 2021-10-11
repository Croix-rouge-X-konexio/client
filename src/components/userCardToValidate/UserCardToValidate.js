
import React from 'react';

import axios from "axios";


import './UserCardToValidate.css'

export default function UserCardToValidate(props) {



    const deleteUser = async (e) => {
        const idOfUser = e.target.getAttribute("userId");
        console.log("j'appuie sur delete");
        await axios.delete(`http://localhost:8000/list/listUsers/${idOfUser}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    const validateUser = async (e) => {
        console.log("j'appuie sur patch");
        const idOfUser = e.target.getAttribute("userId");
        console.log("Id de la carte sur laquelle JE CLIQUE  =>  ", idOfUser);
        await axios.patch(`http://localhost:8000/list/listUsers/${idOfUser}`, {}, { withCredentials: true })
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
                        Is admin : {props.isAdmin ? (<span>true</span>) : (<span>false</span>)}
                    </div>
                    <div>
                        Statut : {props.isValidate ? (<span>validé</span>) : (<span>non validé</span>)}
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

