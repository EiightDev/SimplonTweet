import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';

//Route Privée pour Utilisateur Authentifié
export const PrivateRoute = ({Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = AuthenticationService.isAuthenticated;
    if (!isAuthenticated) {    
      return <Redirect to={{ pathname: '/' }} />
    }
    return <Component {...props} />
  }} />
);

export const OnLigneRoute = ({Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = AuthenticationService.isAuthenticated;
    if (isAuthenticated) {    
      return <Redirect to={{ pathname: '/post' }} />
    }
    return <Component {...props} />
  }} />
);

