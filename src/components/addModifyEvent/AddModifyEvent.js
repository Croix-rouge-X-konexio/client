import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './AddModifyEvent.css'

export default function AddModifyEvent () {



    return (
        <div>
            <div className="addmodify-window">
                    <form>
                        <label>Titre de l'évenement: </label>
                        <input type="text" required /><br />
                        <label>Formation: </label>
                        <select name="education" id="education" required>
                            <option value="Ambulancier">Ambulancier</option>
                            <option value="Brancardier">Brancardier</option>
                            <option value="Infirmier">Infirmier</option>
                        </select><br />
                        <label>Description: </label><br />
                        <textarea required /><br />
                        <label>Date: </label>
                        <input type="date" required />
                        <label>Heure: </label>
                        <input type="time" required /><br />
                        <input type="file" />
                        <div className="create-post-buttons">
                            <button type="submit">Valider</button>
                        </div>
                    </form>
        </div>
        </div>
        
    )
}