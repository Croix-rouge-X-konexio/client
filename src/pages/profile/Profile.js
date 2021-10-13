import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/NavBar'

import './Profile.css'



export default function Profile() {

    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/list/listUsers/${/* ici recup l'ID dans le cookie */}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data.data);
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <div className="profile">

                <div className="profile-info">
                    {/* {user.firstName} {user.lastName} <br /> {user.category} */}
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