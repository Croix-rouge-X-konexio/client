import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';


import './UserCardToValidate.css'

export default function UserCardToValidate () {

    return (
        <div className="userCardToValidate">
            <div className="userCardToValidate-userInfo">
                <div className="userCardToValidate-userInfo-picture">

                </div>
                <div className="userCardToValidate-userInfo-detail">
                    <div className="userCardToValidate-userInfo-detail-name">
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
                <button className="reject">Refuser</button>
                <button className="validate">Valider</button>
            </div>
            
        </div>
    )
}

