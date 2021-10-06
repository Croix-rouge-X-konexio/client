import React, {useState, useEffect, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';



import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';



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

  return (
    <BrowserRouter>
     
        
      <Switch>

        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
              
      </Switch>
  
    </BrowserRouter>
  );
}


