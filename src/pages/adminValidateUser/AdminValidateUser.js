import React, { useEffect, } from 'react';

import NavBar from '../../components/navbar/NavBar'
import UserCardToValidate from '../../components/userCardToValidate/UserCardToValidate';


import './AdminValidateUser.css'

export default function AdminValidateUser () {


    useEffect(() => {
        //faire l'appel au serveur pour récupérer la liste des cartes utilisateurs à valider
    }, []);

    return (
        <div>
            <NavBar />
            <div className="adminValidateUser">
                <div className="adminValidateUser-users-list">
                <UserCardToValidate />
                </div>
            </div>
            
            
        </div>
    );
}