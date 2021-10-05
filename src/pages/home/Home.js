import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/userContext';

import Post from ''

import './Home.css'


export default function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        //faire l'appel au serveur pour récupérer la liste des posts
    }, []);

    const handleCreatePost =()=> {

    }

    return (
        <div className="home">
            <NavBar />
            {userData.user.isAdmin ? (
                <>  
                    <button className="create-post" onClick={handleCreatePost}>Créer un évenement</button>
                </>
            ) : (
                <>
                
                </>
            )}
            <button>Filtre</button>
            {/* expand filter on click */}
            
            {/* show addEvent component */}
            {/* faire map de la liste des posts */}
        </div>
    );
}