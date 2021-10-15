import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
import RestrictedRoute from './components/RestrictedRoute';

export default function App() {


  //On vérifie (au démarrage) avec le serveur, si l'utilisateur est bien connecté
  useEffect(() => {
      console.log("UseEFFECT MARCHE")
      axios.get(process.env.REACT_APP_API_URL /* + "/event" */, { withCredentials: true }) //determiner le chemin "Faire la route côté Back"
          .then((res) => {
              localStorage.setItem("isLogin", res.logStatus); //Mettre le true or false dans la reponse en logStatus: true ou logStatus: false
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);

  return (
    <BrowserRouter>
      <Switch>

        <RestrictedRoute exact path="/" component={Login} />
        <RestrictedRoute exact path="/register" component={Register} />
        <RestrictedRoute exact path="/waitingforvalidation" component={WaitingForValidation} />

        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/adminvalidateuser" component={AdminValidateUser} />
        <PrivateRoute exact path="/adminvalidateuser/UserView/:userId" component={UserView} />

      </Switch>
    </BrowserRouter>
  );
}


