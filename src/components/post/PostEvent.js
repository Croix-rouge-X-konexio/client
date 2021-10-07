import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from '../../images/img.jpg'
import AddModifyEvent from '../addModifyEvent/AddModifyEvent';

import './Post.css'


export default function PostEvent () {

    const [modifyEvent, setModifyEvent] = useState(false)
    const handleModifyEvent =()=> {
        if (modifyEvent) {
            setModifyEvent(false)

        } else {
            setModifyEvent(true)

        }
    }

    const modifyPostModalCustomStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : '50%',
          bottom                : '0%',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',  
          borderRadius           : '10px',
        }
    };

    return (
        <div>
            <div className="post-modal">
                <Modal isOpen={modifyEvent} style={modifyPostModalCustomStyles} onRequestClose={()=> setModifyEvent(false)}>
                    <button onClick={handleModifyEvent}>x</button>
                    <AddModifyEvent/>
                </Modal>
            </div>
            
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

                    <div className="post-event-header-image"> 
                        <img src={photo} alt="" />
                    </div>
                    
                    
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