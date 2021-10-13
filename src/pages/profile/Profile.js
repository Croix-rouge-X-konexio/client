import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/NavBar'

import './Profile.css'



export default function Profile() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/profil`, { withCredentials: true })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);

    if (users.length < 1) {
        return (<div>Chargement</div>)
    } else {
        return (
            <div>
                <NavBar />
                <div className="adminValidateUser">
                    <div className="adminValidateUser-users-list">
                        <h1>Utilisateur</h1>
                        {users[0].user.length < 1 ?
                            (<p>Chargement</p>)
                            :
                            (<div>
                                <p> Prénom: {users[0].user[0].firstName}</p>
                                <p> Nom de famille: {users[0].user[0].lastName}</p>
                                <p> email: {users[0].user[0].email}</p>
                                <p> statut: {users[0].user[0].isAdmin ? "Admin" : "RC-User"}</p>
                                <p> Numéro de téléphone: {users[0].user[0].phoneNumber}</p>
                                <p> Lieu: {users[0].user[0].area}</p>
                                <p> Profil: {users[0].user[0].category}</p>
                            </div>)
                        }
                        <h1>Formation</h1>
                        {users[0].EducationInfo.length < 1 ?
                            (<p>Chargement</p>)
                            :
                            (<div>
                                <p> nom de formation: {users[0].EducationInfo[0].EducationId}</p>
                                <p> date: {users[0].EducationInfo[0].date}</p>
                            </div>)
                        }

                        <h1>Expériences</h1>
                        {users[0].ExperienceInfo.length < 1 ?
                            (<p>Chargement</p>)
                            :
                            (<div>
                                <p> titre de jobs: {users[0].ExperienceInfo[0].title}</p>
                                <p> date de début: {users[0].ExperienceInfo[0].startingDate}</p>
                                <p> date de fin: {users[0].ExperienceInfo[0].endingDate}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}