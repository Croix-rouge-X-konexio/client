import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from "axios";
import userContext from './context/userContext'; // ?
import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import WaitingForValidation from './pages/waitingForValidation/WaitingForValidation';
import Profile from './pages/profile/Profile';
import AdminValidateUser from './pages/adminValidateUser/AdminValidateUser';
import UserView from "./pages/UserView/UserView";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


export default function App() {

  const [isLogIn, setisLogIn] = useState(false)

  //On vérifie (au démarrage) avec le serveur, si l'utilisateur est bien connecté
  useEffect(() => {
      console.log("UseEFFECT MARCHE")
      axios.get(process.env.REACT_APP_API_URL + "/home/logIn", { withCredentials: true })
          .then((res) => {
            localStorage.setItem("isLogin", res.data.logStatus);
            setisLogIn("true")
            console.log(res.data.logStatus)
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);
 
    return (
      isLogIn ? (
        <BrowserRouter>
          <Switch>

            <PublicRoute exact path="/" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/waitingforvalidation" component={WaitingForValidation} />

            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/adminvalidateuser" component={AdminValidateUser} />
            <PrivateRoute exact path="/adminvalidateuser/UserView/:userId" component={UserView} />

          </Switch>
        </BrowserRouter>
      ) : (
        <div>Chargement</div>
      )
    )

}