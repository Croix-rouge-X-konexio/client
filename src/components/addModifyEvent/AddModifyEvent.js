import React from 'react';
import axios from "axios";
import './AddModifyEvent.css'

export default function AddModifyEvent(props) {

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
        await axios.post("http://localhost:8000/event", createPost, { withCredentials: true })
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
                    <input className="addmodify-window-element" type="text" id="title" required /><br />
                    <div>
                        <div className="rows">
                            <label className="addmodify-window-element">Formation: </label><br />
                            <select className="addmodify-window-element" name="education" id="education" required>
                                <option value="Ambulancier">Ambulancier</option>
                                <option value="Brancardier">Brancardier</option>
                                <option value="Infirmier">Infirmier</option>
                            </select><br />
                            <label className="addmodify-window-element">Lieu: </label><br />
                            <input className="addmodify-window-element" type="text" id="place" required /><br />
                        </div>
                        <div className="rows">
                            <label className="addmodify-window-element">Date: </label><br />
                            <input className="addmodify-window-element" type="date" id="date" required /><br />
                            <label className="addmodify-window-element">Heure: </label><br />
                            <input className="addmodify-window-element" type="time" id="time" required /><br />
                            <label className="addmodify-window-element">Durée (heure): </label><br />
                            <input className="addmodify-window-element" type="number" id="duration" required /><br />
                        </div>
                    </div>


                    {/* <input type="file" id="image" /> */}
                    <label className="addmodify-window-element">Description: </label><br />
                    <textarea id="description" required /><br />
                    <button className="create-post-button" type="submit">Valider</button>
                </form>
            </div>
        </div>

    )
}