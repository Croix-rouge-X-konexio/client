import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, ...rest}) => {

    let isNotLogin = true
    if (localStorage.getItem('isLogin') === true || localStorage.getItem('isLogin') === "true") {
        isNotLogin = false
    }
    console.log(isNotLogin)

    return (
        <Route {...rest} render={props => (
            isNotLogin ?
                <Component {...props} />    
            : 
                <Redirect to="/home" />
        )} />
    );
};


export default PublicRoute;
