import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import userContext from './context/userContext';
import './App.css';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import WaitingForValidation from './pages/waitingForValidation/WaitingForValidation';
import Profile from './pages/profile/Profile';
import AdminValidateUser from './pages/adminValidateUser/AdminValidateUser';
import UserView from "./pages/UserView/UserView";

export default function App() {

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

        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/waitingforvalidation" component={WaitingForValidation} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/adminvalidateuser" component={AdminValidateUser} />
        <Route exact path="/adminvalidateuser/UserView/:userId" component={UserView} />
      </Switch>
    </BrowserRouter>
  );
}


