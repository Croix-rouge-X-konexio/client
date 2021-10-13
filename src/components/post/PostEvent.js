import React from 'react';

import photo from '../../images/img.jpg'

import axios from "axios";
import './Post.css'


export default function PostEvent(props) {

    const deleteEvent = async (e) => {
        const eventId = e.target.getAttribute("eventId");
        
        await axios.delete(`http://localhost:8000/event/${eventId}`, { withCredentials: true })
            .then((res) => {
                // console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
        //props.handleRemovePost(e)
        window.location.reload();
    }


    const isInterested = async (e) => {
        const eventId = e.target.getAttribute("eventId");
        console.log("On a l'ID event", eventId)
        await axios.post(`http://localhost:8000/event/interested/${eventId}`, {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }

    return (
        <div>
            <div className="post-event">
                <div className="post-event-header">
                    <div className="post-event-header-detail">
                        <div className="post-event-header-title">
                            {props.title}
                        </div>
                        <div className="post-event-header-time">
                            {props.date}
                        </div>
                        <div className="post-event-header-location">
                            {props.place}
                        </div>
                        <div className="post-event-header-interested-count">
                            0 intéressé
                        </div>
                    </div>
                </div>
                <div>
                    <img className="post-event-image" src={photo} alt="" />
                </div>
                <div className="post-event-description">
                    {props.description}
                </div>
                <div className="post-event-buttons">
                    <div>
                        <button onClick={deleteEvent} eventId={props.eventId} className="post-event-delete">Supprimer l'évenement</button>
                        
                    </div>
                    <button onClick={isInterested} eventId={props.eventId} className="interested">Interessé</button>
                </div>
            </div>
        </div>
    )
}
