import React, { useEffect, useState } from 'react';
import axios from "axios";

import NavBar from '../../components/navbar/NavBar'
import UserCardToValidate from '../../components/userCardToValidate/UserCardToValidate';


import './AdminValidateUser.css'

export default function AdminValidateUser(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/list/listUsers", { withCredentials: true })
            .then((res) => {
                console.log("console log de res ligne 17", res);
                setUsers(res.data.data); // FirstName  - lastName - email - isAdmin - isValidate - userId
                console.log(res.data.data);
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
                    {users.map(user =>
                        <UserCardToValidate
                            key={user.userid}
                            picture={user.picture}
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
        </div>
    );
}