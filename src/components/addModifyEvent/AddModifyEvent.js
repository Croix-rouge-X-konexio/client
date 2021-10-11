import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";
import './AddModifyEvent.css'

export default function AddModifyEvent() {

    const submit = async (e) => {
        e.preventDefault()
        const createPost = {
            title: document.getElementById("title").value,
            education: document.getElementById("education").value,
            description: document.getElementById("description").value,
            date: parseInt(document.getElementById("date").value),
            heure: parseInt(document.getElementById("time").value),
            duration: parseInt(document.getElementById("duration").value),
            place: document.getElementById("place").value,
            // image: document.getElementById("image").value,
        }
        // console.log(time)
        const createPostResponse = await axios.post("http://localhost:8000/event", createPost, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
    }
    //     // console.log();


    return (
        <div>
            <div className="addmodify-window">
                <form onSubmit={submit}>
                    <label>Titre de l'évenement: </label>
                    <input type="text" id="title" required /><br />
                    <label>Formation: </label>
                    <select name="education" id="education" required>
                        <option value="Ambulancier">Ambulancier</option>
                        <option value="Brancardier">Brancardier</option>
                        <option value="Infirmier">Infirmier</option>
                    </select><br />
                    <label>Lieu: </label>
                    <input type="text" id="place" required /><br />
                    <label>Description: </label><br />
                    <textarea id="description" required /><br />
                    <label>Date: </label>
                    <input type="date" id="date" required />
                    <label>Heure: </label>
                    <input type="time" id="time" required /><br />
                    <label>Durée (heure): </label>
                    <input type="number" id="duration" required /><br />
                    <input type="file" id="image" />
                    <div className="create-post-buttons">
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </div>

    )
}