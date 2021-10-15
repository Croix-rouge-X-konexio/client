import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/NavBar'
import './Profile.css'



export default function Profile() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/profil`, { withCredentials: true })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);

        return (
            <div>
                <NavBar />
                {user.length < 1 ? (
                    <div>
                    Chargement
                    </div>
                ):(
                    <div className="profile">
                        <div>
                            
                            {user[0].user.length < 1 ?
                                (<p>Chargement</p>)
                                :
                                (<div className="profile-card">
                                    <div className="profile-pic">
                                    <img className="post-event-image" alt="" src={`http://localhost:8000/Img/${user[0].user[0].picture}`} />
                                    </div>
                                    <p className="title">Informations</p>
                                    <div className="profile-elements">
                                        {user[0].user[0].firstName}<span> </span>{user[0].user[0].lastName}<br />
                                        {user[0].user[0].category}
                                    </div>
                                    
                                    <div className="profile-elements">
                                        <p> email: {user[0].user[0].email}</p>
                                        <p> Numéro de téléphone: {user[0].user[0].phoneNumber}</p>
                                        <p> Région: {user[0].user[0].area}</p>
                                    </div>
                                </div>)
                            }
                            
                            {user[0].EducationInfo.length < 1 ?
                                (<p>Chargement</p>)
                                :
                                (<div className="profile-elements profile-card">
                                    <p className="title">Formation Croix-Rouge</p>
                                    <p> {user[0].EducationInfo[0].EducationId}</p>
                                    <p> date: {user[0].EducationInfo[0].date}</p>
                                </div>)
                            }

                            
                            {user[0].ExperienceInfo.length < 1 ?
                                (<p>Chargement</p>)
                                :
                                (<div className="profile-elements profile-card">
                                    <p className="title">Expériences professionelles</p>
                                    <p> {user[0].ExperienceInfo[0].title}</p>
                                    <p> date de début: {user[0].ExperienceInfo[0].startingDate}</p>
                                    <p> date de fin: {user[0].ExperienceInfo[0].endingDate}</p>
                                </div>)
                            }
                        </div>
                    </div>
                )}   
            </div>
        );
}