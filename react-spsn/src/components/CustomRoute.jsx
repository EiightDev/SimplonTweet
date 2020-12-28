import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';

//Route Privée pour Utilisateur Authentifié
export const PrivateRoute = ({Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (AuthenticationService.isAuthenticated() === false) {    
      return <Redirect to='/' />
    }
    return <Component {...props} />
  }} />
);

export const OnLigneRoute = ({Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (AuthenticationService.isAuthenticated()) {    
      return <Redirect to={'/post' } />
    }
    return <Component {...props} />
  }} />
);

