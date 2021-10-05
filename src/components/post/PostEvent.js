import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';



export default function Post () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    return (
        <div className="post">

            
        </div>
    )
}