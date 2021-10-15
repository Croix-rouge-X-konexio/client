import React from 'react';
import { Link } from "react-router-dom";

import './UserCardToValidate.css'

export default function UserCardToValidate(props) {

    return (
        <Link className="link-card" to={`/adminvalidateuser/UserView/${props.userid}`}>
            <div className="userCardToValidate">
                <div className="userCardToValidate-userInfo">
                    <div className="userCardToValidate-userInfo-picture">
                        <img width="100px" height="100px" alt="" src={process.env.REACT_APP_API_URL + `/Img/${props.userid}`}></img>
                    </div>
                    <div className="userCardToValidate-userInfo-detail">
                        <div className="userCardToValidate-userInfo-detail-name">
                            {props.firstName} {props.lastName}
                        </div>
                        <div className="userCardToValidate-userInfo-detail-mail">
                            Email : {props.email}
                        </div>
                        <div>
                            Is admin : {props.isAdmin ? (<span>true</span>) : (<span>false</span>)}
                        </div>
                        <div>
                            Statut : {props.isValidate ? (<span>validé</span>) : (<span>non validé</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

