import React, { useState, } from 'react'
import { Link, useHistory } from 'react-router-dom'






export default function WaitingForValidation() {


    return (
        <div className="waitingForValidation">
            <h2>
                Votre compte est en cours de validation


            </h2>
            <h3>
                Veuillez vous reconnecter plus tard ou contacter xxx@xxx.croixrouge.fr
            </h3>
            <Link to="/">
                <button>Revenir a la page de login</button>
            </Link>
        </div>
    )
}