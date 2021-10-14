import React, { useState } from 'react';
import axios from "axios";
import './AddModifyEvent.css';


export default function AddModifyEvent(props) {

    const formData = new FormData(); // On crée/rend accessible le formData

    const handleChange = (e) => {
        formData.append("image", e.target.files[0]);
        console.log("handlechange", formData);
    }

    const submit = async (e) => {
        e.preventDefault()
        formData.append("title", document.getElementById("title").value)
        formData.append("education", document.getElementById("education").value)
        formData.append("description", document.getElementById("description").value)
        formData.append("date", parseInt(document.getElementById("date").value))
        formData.append("heure", parseInt(document.getElementById("time").value))
        formData.append("duration", parseInt(document.getElementById("duration").value))
        formData.append("place", document.getElementById("place").value)
        console.log("Submit", formData);

        await axios.post("http://localhost:8000/event", formData, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("coté front   ", err);
            });
        props.handleCloseModal()
        window.location.reload();
    }



    return (
        <div>
            <div className="addmodify-window">
                <form onSubmit={submit}>
                    <label className="addmodify-window-element">Titre de l'évenement: </label><br />
                    <input className="addmodify-window-element event-title" type="text" id="title" required /><br />
                    <div>
                        <div className="rows">
                            <div>
                                <label className="addmodify-window-element">Formation: </label><br />
                                <select className="addmodify-window-element" name="education" id="education" required>
                                    <option value="Ambulancier">Ambulancier</option>
                                    <option value="Brancardier">Brancardier</option>
                                    <option value="Infirmier">Infirmier</option>
                                </select><br />
                            </div>
                            <div>
                                <label className="addmodify-window-element">Lieu: </label><br />
                                <input className="addmodify-window-element" type="text" id="place" required /><br />
                            </div>
                        </div>
                        <div className="rows">
                            <div>
                                <label className="addmodify-window-element">Date: </label><br />
                                <input className="addmodify-window-element date" type="date" id="date" required /><br />
                            </div>
                            <div>
                                <label className="addmodify-window-element">Heure: </label><br />
                                <input className="addmodify-window-element time" type="time" id="time" required /><br />
                            </div>
                            <div>
                                <label className="addmodify-window-element">Durée: </label><br />
                                <input className="addmodify-window-element duration" type="text" id="duration" required /><br />
                            </div>
                        </div>
                    </div>


                    <div>
                        <label className="addmodify-window-element">Description: </label><br />
                        <textarea className="addmodify-window-element" id="description" required /><br />
                    </div>
                    <div>
                        <input type="file" onChange={handleChange} />
                    </div>
                    <button className="create-post-button addmodify-window-element" type="submit">Valider</button>
                </form>
            </div>
        </div>

    )
}