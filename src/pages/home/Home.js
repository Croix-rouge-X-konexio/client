import React, { useState, useEffect, } from 'react';
import Modal from 'react-modal';
import NavBar from '../../components/navbar/NavBar'
import PostEvent from '../../components/post/PostEvent';
import AddModifyEvent from '../../components/addModifyEvent/AddModifyEvent';


import './Home.css'


export default function Home (props) {

    const [toggleFilter, setToggleFilter] = useState(false)
    const [toggleCreatePost, setToggleCreatePost] = useState(false)

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //faire l'appel au serveur pour récupérer la liste des posts
    }, []);



    const handleFilter =()=> {
        if (toggleFilter) {
            setToggleFilter(false)

        } else {
            setToggleFilter(true)

        }
    }

    const handleCreatePost =()=> {
        if (toggleCreatePost) {
            setToggleCreatePost(false)

        } else {
            setToggleCreatePost(true)

        }
    }

    const createPostModalCustomStyles = {
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
            <NavBar />
                <div className="home">
                    <div className="newsfeed">
                        <div className="newsfeed-button">
                            {toggleFilter ? (
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
                                            
                                        </select>
                                    </div>
                                    <div className="filter-education">
                                        <label>Formation(s): </label>
                                        <input type="checkbox" id="all" name="all" value="toutes les formations" />
                                        <label>Toutes les formations</label>
                                        <input type="checkbox" id="Ambulancier" name="Ambulancier" value="Ambulancier" />
                                        <label>Ambulancier</label>
                                        <input type="checkbox" id="Brancardier" name="Brancardier" value="Brancardier" />
                                        <label>Brancardier</label>
                                        <input type="checkbox" id="Infirmier" name="Infirmier" value="Infirmier" />
                                        <label>Infirmier</label>
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
                            ):(
                                <>
                                <button className="filter-button" onClick={handleFilter}>Filtre</button>
                                <button className="create-post" onClick={handleCreatePost}>Créer un évenement</button>
                                </>
                            )}
                            
                        </div>
                        
                        <Modal isOpen={toggleCreatePost} style={createPostModalCustomStyles}  onRequestClose={()=> setToggleCreatePost(false)}>
                            <button onClick={handleCreatePost}>x</button>
                            <AddModifyEvent/>
                        </Modal>
                        
			            {posts.map((post) => (
                            <>
                            <div key={post.id} className="post-event">

                                <div className="post-event-header">
                                
                                    <div className="post-event-header-detail">
                                        <div className="post-event-header-title">
                                        {post.title}
                                        </div>
                                        <div className="post-event-header-time">
                                        {post.date}
                                        </div>
                                        <div className="post-event-header-location">
                                        {post.place}
                                        </div>
                                        <div className="post-event-header-interested-count">
                                        0 interessé(s)
                                        </div>
                                    </div>
                                </div>

                                <div> 
                                    <img className="post-event-image" src={} alt="" />
                                </div>

                                <div className="post-event-description">
                                {post.description}   
                                </div>

                                <div className="post-event-buttons">
                                    <div>
                                        <button className="post-event-delete">Supprimer l'évenement</button>
                                    </div>
                                    <button className="interested">Interessé</button>
                                </div>
                            </div>
                            </>
			            ))}
                        
                        <PostEvent />
                    </div>
                </div>
            
        </div>
    );
}