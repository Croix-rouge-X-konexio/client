import React, { useState, useEffect, } from 'react';

import NavBar from '../../components/navbar/NavBar'
import PostEvent from '../../components/post/PostEvent';

import './Home.css'


export default function Home () {

    const [toggleFilter, setToggleFilter] = useState(false)
    const [toggleCreatePost, setToggleCreatePost] = useState(false)

    useEffect(() => {
        //faire l'appel au serveur pour récupérer la liste des posts
    }, []);



    const handleFilter =()=> {
        if (toggleFilter) {
            setToggleFilter(false)
        } else {
            setToggleFilter(true)
            setToggleCreatePost(false)
        }
    }

    const handleCreatePost =()=> {
        if (toggleCreatePost) {
            setToggleCreatePost(false)
        } else {
            setToggleCreatePost(true)
            setToggleFilter(false)
        }
    }

    return (
        <div>
            <NavBar />
                <div className="home">
                    <div className="newsfeed">
                    <div className="newsfeed-button">
                        {toggleFilter ? 
                        (
                            <>
                            <form className="filter-window">
                                <div className="filter-area">
                                    <label>Région: </label>
                                    <select name="area" id="area">
                                        <option value="Toutes les régions">Toutes les régions</option>
                                        <option value="Auvergne-Rhône-Alpe">Auvergne-Rhône-Alpes</option>
                                        <option value="Bourgogne-Franche-Compté">Bourgogne-Franche-Compté</option>
                                        <option value="Bretagne">Bretagne</option>
                                        <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                                        <option value="Grand Est">Grand Est</option>
                                        <option value="Hauts-de-France">Hauts-de-France</option>
                                        <option value="Ile-de-France">Ile-de-France</option>
                                        <option value="Normandie">Normandie</option>
                                        <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                                        <option value="Occitanie">Occitanie</option>
                                        <option value="Pays-de-la-Loire">Pays-de-la-Loire</option>
                                        <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
                                    </select>
                                </div>
                                <div className="filter-type">
                                <label>Type de posts: </label>
                                    <select name="education" id="education">
                                        <option value="Tous les posts">Tous les posts</option>
                                        <option value="event">Evenement</option>
                                        <option value="job">Offre d'emploi</option>
                                        
                                    </select>
                                </div>
                                <div className="filter-education">
                                    <label>Formation: </label>
                                    <select name="education" id="education">
                                        <option value="Toutes les formations">Toutes les formations</option>
                                        <option value="Infirmier">Infirmier</option>
                                        <option value="Ambulancier">Ambulancier</option>
                                        
                                    </select>
                                </div>
                                <div className="filter-date">
                                    <label>Date: </label>
                                    Entre <input type="date" /> et <input type="date" />
                                </div>
                                <div>
                                    <button onClick={handleFilter}>Annuler</button>
                                    <button type="submit" onClick={handleFilter}>Appliquer le filtre</button>
                                </div>
                                
                            </form>
                        
                            </>
                        ) : (
                            <>
                            <button className="filter-button" onClick={handleFilter}>Filtre</button>
                            </>
                        )
                        }
                        
                        {toggleCreatePost ? (
                            <>
                            <div className="create-post-window">
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
                                    <input type="time" required />
                                        
                                    <div className="">
                                        <button onClick={handleCreatePost}>Annuler</button>
                                        <button type="submit" onClick={handleCreatePost}>Créer</button>
                                    </div>
                                </form>
                            </div>
                            </>
                        ) : (
                            <>
                            <button className="create-post" onClick={handleCreatePost}>Créer un évenement</button>
                            </>
                        )}
                        
                        
                    </div>
                        {/* {userData.user.isAdmin ? (
                        <>  
                            <button className="create-post" onClick={handleCreatePost}>Créer un évenement</button>
                        </>
                        ) : (
                        <>
                        
                        </>
                        )} */}
                        
                        {/* expand filter on click */}

                        {/* show addEvent component */}
                       
                        {/* faire map de la liste des posts */}
                        <PostEvent />
                    </div>
                </div>
            
        </div>
    );
}