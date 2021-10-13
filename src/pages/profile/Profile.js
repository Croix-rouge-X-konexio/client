import React, { useState, useEffect, } from 'react';

import NavBar from '../../components/navbar/NavBar'
import axios from 'axios';
import './Profile.css'



export default function Profile () {

    const [user, setUser] = useState();
    

    useEffect(() => {
        console.log("UseEFFECT MARCHE")
        axios.get("http://localhost:8000/", { withCredentials: true })
            .then((res) => {

                console.log("console log de res.data.data   ", res.data.data)
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });

    }, []);
    console.log(user)
    
    return (
        <div>
            <NavBar />
            <div className="profile">
                <div className="profile-card  profile-user">
                    <div className="profile-picture">

                    </div>
                    <div className="profile-info">
                    {/* {user.firstName} {user.lastName} <br />
                    {user.category} */}
                    </div>
                </div>
                <div className="profile-card  profile-contact">
                Contact:  <br />
                {/* {user.email} <br />
                {user.phoneNumber} <br />
                {user.location} */}
                </div>
                <div className="profile-card  profile-education-list">
                Formation: <br />
                {/* {user.education} {user.date} */}
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