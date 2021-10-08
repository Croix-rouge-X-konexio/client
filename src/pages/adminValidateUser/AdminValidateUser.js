import React, { useEffect, } from 'react';
import axios from "axios";

import NavBar from '../../components/navbar/NavBar'
import UserCardToValidate from '../../components/userCardToValidate/UserCardToValidate';


import './AdminValidateUser.css'

export default function AdminValidateUser() {


    useEffect(() => {
        console.log("UseEFFECT MARCHE")
        axios.get("http://localhost:8000/list/listUsers", { withCredentials: true })
            .then((res) => {
                console.log(res);
                const AllUser = res.data; // FirstName  - lastName - email - isAdmin - IsValidate - UserId
                console.log(AllUser);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <div className="adminValidateUser">
                <div className="adminValidateUser-users-list">
                    <UserCardToValidate /> {/* Ici faire le map sur le component avec la data présente dans AllUser */}
                </div>
            </div>


        </div>
    );
}