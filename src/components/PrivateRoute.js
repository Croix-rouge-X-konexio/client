import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    //component: Component -> pour respecté la convention majuscule au Component on renomme l'élément reçu (eg: {home}).
    // On aurait pu supprimer ": Component" et mettre directement component ligne 10
    return (
        <Route {...rest} component = {
            localStorage.getItem('isLogin') ?
                <Component />
            :
                <Redirect to="/" />
        } />
    );
};

export default PrivateRoute;