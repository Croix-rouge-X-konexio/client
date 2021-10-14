import React, { useState, useEffect } from 'react';

import axios from "axios";
import './Post.css'


export default function PostEvent(props) {

    const [user, setUser] = useState([])
 

    useEffect(() => {
        axios.get(`http://localhost:8000/profil`, { withCredentials: true })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }, []);
    // const PropsPicture = props.picture;
    // const pictureName = PropsPicture.substring(0, 55);
    // console.log(pictureName);

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
        window.location.reload();
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
                            {props.Attendees} intéressé
                        </div>
                    </div>
                </div>
                <div>
                    {/* <p>{props.picture}</p> */}
                    <img className="post-event-image" alt="" src={`http://localhost:8000/Img/${props.picture}`}></img>
                </div>
                <div className="post-event-description">
                    {props.description}
                </div>
                <div className="post-event-buttons">
                    <div>
                    {user.length < 1 ? (
                    <div>
                    Chargement
                    </div>
                    ):(
                        <div>
                        {user[0].user[0].isAdmin ?(
                            <button onClick={deleteEvent} eventId={props.eventId} className="post-event-delete">Supprimer l'évenement</button>
                            ) : (
                            <>

                            </>
                            )}
                        </div>
                    )}
                    </div>
                    <button onClick={isInterested} eventId={props.eventId} className="interested">Interessé</button>
                </div>
            </div>
        </div>
    )
}
