import React, {useState, useEffect, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

export default createContext(null);

import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from '/pages/register/Register';
import NavBar from './components/navbar/NavBar';



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
      <UserContext.Provider value={{ userData, setUserData }}>
        
        <Switch>


              
              <Route exact path="/" component={Home} />
              <Route exact path="/adminValidateUser" component={AdminValidateUser} />
              <Route exact path="/profile" component={Profile} />


              
              <Route exact path="/register" component={Register} />
              <Route exact path="/waitingForValidation" component={WaitingForValiation} />

        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}


