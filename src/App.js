import React, {useState, useEffect, createContext, Profiler, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import userContext from './context/userContext';

import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import WaitingForValidation from './pages/waitingForValidation/WaitingForValidation';
import Profile from './pages/profile/Profile';
import AdminValidateUser from './pages/adminValidateUser/AdminValidateUser';


export default function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  /*
    useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);
  */


  const RestrictedRoute = (props) => {
    const isLoggedIn = useContext(userContext)

    return (
      <>
        <Route {...props}>
          {!isLoggedIn ? props.children : <Redirect to="/home" />}
        </Route>
      </>
    )

  }

  const PrivateRoute = (props) => {
    const isLoggedIn = useContext(userContext)

    return (
      <>
        <Route {...props}>
          {!isLoggedIn ? props.children : <Redirect to="/" />}
        </Route>
      </>
    )

  }

  return (
    <BrowserRouter>
      <Switch>

        <RestrictedRoute exact path="/" component={Login} />
        <RestrictedRoute exact path="/register" component={Register} />
        <RestrictedRoute exact path="/waitingforvalidation" component={WaitingForValidation} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/adminvalidateuser" component={AdminValidateUser} />

      </Switch>
    </BrowserRouter>
  );
}


