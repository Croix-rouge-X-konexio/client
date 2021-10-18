import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    let isLogin = false
    if (localStorage.getItem('isLogin') === true || localStorage.getItem('isLogin') === "true") {
        isLogin = true
    }
    console.log(isLogin)

    return (
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : 
                <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;