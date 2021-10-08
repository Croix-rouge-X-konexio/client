import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import photo from '../../images/img.jpg'
import AddModifyEvent from '../addModifyEvent/AddModifyEvent';
import axios from "axios";
import './Post.css'


export default function PostEvent() {




    return (
        <div>


            <div className="post-event">

                <div className="post-event-header">

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

                <div>
                    <img className="post-event-image" src={photo} alt="" />
                </div>

                <div className="post-event-description">
                    Pour les infirmiers uniquement
                </div>

                <div className="post-event-buttons">
                    <div>
                        <button className="post-event-delete">Supprimer l'évenement</button>
                    </div>
                    <button className="interested">Interessé</button>
                </div>
            </div>
        </div>

    )
}