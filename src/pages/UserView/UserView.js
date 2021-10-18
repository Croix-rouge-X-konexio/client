import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NavBar from '../../components/navbar/NavBar';
import './UserView.css';


export default function UserView() {

    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState([])
    let IdURL = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + `/list/listUsers/${IdURL.userId}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data.data);
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);


    const deleteUser = async (e) => {
        const idOfUser = IdURL.userId;
        console.log("j'appuie sur delete");
        await axios.delete(process.env.REACT_APP_API_URL + `/list/listUsers/${idOfUser}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                history.push("/adminvalidateuser");
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    const validateUser = async (e) => {
        const idOfUser = IdURL.userId;
        console.log("Id de la carte sur laquelle JE CLIQUE  =>  ", idOfUser);
        await axios.patch(process.env.REACT_APP_API_URL + `/list/listUsers/${idOfUser}`, {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    return (
        <div>
        <NavBar />
            <div className="userView">
            
                {users.length < 1 ? (
                <div>
                Chargement
                </div>
            ):(
                <div className="userView-card">
                    <div className="userView-text">
                        <h1>Utilisateur</h1>
                        {users[0].user.length < 1 ?
                            (<p>Chargement</p>)
                            :
                            (<div>
                                <p>{users[0].user[0].firstName}</p>
                                <p>{users[0].user[0].lastName}</p>
                                <p>{users[0].user[0].email}</p>
                                <p>{users[0].user[0].isAdmin ? "Admin" : "Pas Admin"}</p>
                                <p>{users[0].user[0].isValidate ? "Validé" : "En attente de validation"}</p>
                                <p>{users[0].user[0].phoneNumber}</p>
                                <p>{users[0].user[0].area}</p>
                                <p>{users[0].user[0].category}</p>
                            </div>)
                        }
                        <h1>Formation</h1>
                        {users[0].EducationInfo.length < 1 ?
                            (<p>Chargement</p>)
                            :
                            (<div>
                                <p>{users[0].EducationInfo[0].EducationId}</p>
                                <p>{users[0].EducationInfo[0].date}</p>
                            </div>)
                        }

                        <h1>Expériences</h1>
                        {users[0].ExperienceInfo.length < 1 ?
                            (<p>Chargement</p>)
                            :
                            (<div>
                                <p>{users[0].ExperienceInfo[0].title}</p>
                                <p>{users[0].ExperienceInfo[0].startingDate}</p>
                                <p>{users[0].ExperienceInfo[0].endingDate}</p>
                            </div>)
                        }

                    </div>
                    <div className="userView-button">
                        <button className="reject" onClick={deleteUser}>Supprimer</button>
                        {users[0].user[0].isValidate ? <p></p> : <button className="validate" onClick={validateUser}>Valider</button>}
                    </div>
                </div>
            )}
        </div>
        </div>
        
    );
}