import React, { useEffect, } from 'react';

import NavBar from '../../components/navbar/NavBar'

import './Profile.css'



export default function Profile () {



    return (
        <div>
            <NavBar />
            <div className="profile">
                <div className="profile-card  profile-user">
                    <div className="profile-picture">

                    </div>
                    <div className="profile-info">
                    Dupond Jean <br />
                    Alumni étudiant
                    </div>
                </div>
                <div className="profile-card  profile-contact">
                Contact:  <br />
                jean.dupond@gmail.com <br />
                07 12 34 56 78 <br />
                Ile-de-France
                </div>
                <div className="profile-card  profile-education-list">
                Formation: <br />
                Infirmier à Paris en 2020
                </div>
                <div className="profile-card  profile-job-list">
                Posts: <br />
                Infirmier à Hopital Saint Anne de 2021 à Aujourd'hui (poste en cours)
                </div>
                <div className="profile-edit">
                    <button>Modifier votre profil</button>
                </div>
            </div>
        </div>
    );
}