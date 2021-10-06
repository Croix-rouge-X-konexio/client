import React, { useEffect, } from 'react';

import NavBar from '../../components/navbar/NavBar'
import Post from '../../components/post/PostEvent';

import './Home.css'


export default function Home () {


    useEffect(() => {
        //faire l'appel au serveur pour récupérer la liste des posts
    }, []);

    const handleCreatePost =()=> {

    }

    return (
        <div className="home">
            <NavBar />
            {/* {userData.user.isAdmin ? (
                <>  
                    <button className="create-post" onClick={handleCreatePost}>Créer un évenement</button>
                </>
            ) : (
                <>
                
                </>
            )} */}
            <button>Filtre</button>
            {/* expand filter on click */}

            {/* show addEvent component */}
            {/* faire map de la liste des posts */}
            <Post />
        </div>
    );
}