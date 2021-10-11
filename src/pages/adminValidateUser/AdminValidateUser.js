<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useEffect, } from 'react';
>>>>>>> 0ea1f21e0acd2bb214abf02918c3e1fd64d1069f
import axios from "axios";

import NavBar from '../../components/navbar/NavBar'
import UserCardToValidate from '../../components/userCardToValidate/UserCardToValidate';


import './AdminValidateUser.css'

<<<<<<< HEAD
export default function AdminValidateUser(props) {
=======
export default function AdminValidateUser() {
>>>>>>> 0ea1f21e0acd2bb214abf02918c3e1fd64d1069f

    const [users, setUsers] = useState([])

    useEffect(() => {
<<<<<<< HEAD
        axios.get("http://localhost:8000/list/listUsers", { withCredentials: true })
            .then((res) => {
                console.log("console log de res ligne 17", res);
                setUsers(res.data.data); // FirstName  - lastName - email - isAdmin - isValidate - userId
=======
        console.log("UseEFFECT MARCHE")
        axios.get("http://localhost:8000/list/listUsers", { withCredentials: true })
            .then((res) => {
                console.log(res);
                const AllUser = res.data; // FirstName  - lastName - email - isAdmin - IsValidate - UserId
                console.log(AllUser);
>>>>>>> 0ea1f21e0acd2bb214abf02918c3e1fd64d1069f
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);
    
    console.log("console log de users ligne 25", users);

    return (
        <div>
            <NavBar />
            <div className="adminValidateUser">
                <div className="adminValidateUser-users-list">
<<<<<<< HEAD
                    {users.map(user => 
                        <UserCardToValidate
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            isAdmin={user.isAdmin}
                            isValidate={user.isValidate}
                            userid={user.userid}
                        />
                    )}
                </div>
            </div>
=======
                    <UserCardToValidate /> {/* Ici faire le map sur le component avec la data présente dans AllUser */}
                </div>
            </div>


>>>>>>> 0ea1f21e0acd2bb214abf02918c3e1fd64d1069f
        </div>
    );
}