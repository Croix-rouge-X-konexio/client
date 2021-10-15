import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({component: Component, ...rest}) => {
    //component: Component -> pour respecté la convention majuscule au Component on renomme l'élément reçu (eg: {home}).
    // On aurait pu supprimer ": Component" et mettre directement component ligne 12
    return (
        <Route {...rest} component = {
            localStorage.getItem('isLogin') ?
                <Redirect to="/home" />
            :
                <Component />
        } />
    );
};

export default RestrictedRoute;