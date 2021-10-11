
import './UserCardToValidate.css'

export default function UserCardToValidate (props) {

    return (
        <div className="userCardToValidate">
            <div className="userCardToValidate-userInfo">
                <div className="userCardToValidate-userInfo-picture">
                </div>
                <div className="userCardToValidate-userInfo-detail">
                    <div className="userCardToValidate-userInfo-detail-name">
                    {props.firstName} {props.lastName}
                    </div>
                    <div className="userCardToValidate-userInfo-detail-mail">
                    Email : {props.email}
                    </div>
                    <div>
                        Is admin : {props.isAdmin}
                    </div>
                    <div>
                        Statut : {props.isValidate}
                    </div>
                </div>
            </div>
            <div className="userCardToValidate-button">
                <button className="delete" userId={props.userid}>Supprimer</button>
                <button className="validate" userId={props.userid}>Valider</button>
            </div>    
        </div>
    )
}

