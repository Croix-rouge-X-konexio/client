import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './Post.css'


export default function PostEvent () {

    return (
        <div className="post-event">
            <div className="post-event-header">
                <div className="post-event-header-image">

                </div>
                <div className="post-event-header-detail">
                    <div className="post-event-header-title">
                    Conférence infirmier
                    </div>
                    <div className="post-event-header-time">
                    Demain
                    </div>
                    <div className="post-event-header-location">
                    Paris
                    </div>
                    <div className="post-event-header-interested-count">
                    0 interessé(s)
                    </div>
                </div>
                
            </div>
            <div className="post-event-description">
                Pour les infirmiers uniquement
            </div>
            <div className="post-event-buttons">
                <div>
                    <button className="post-event-options">Modifier l'évenement</button>
                    <button className="post-event-options">Supprimer l'évenement</button>
                </div>
                <button className="interested">Interessé</button>
            </div>
        </div>
    )
}