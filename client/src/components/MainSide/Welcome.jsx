import React from "react";
import { Redirect } from "react-router-dom";
import AuthenticationService from "../../services/authentication-service";

const Welcome = () => {
  const isAuth = AuthenticationService.isAuthenticated();
  
  return isAuth === true ? (
    <Redirect to="/post" />
  ) : (
    <div className="cover-container d-flex w-100 h-100 align-items-center p-3 mx-auto mt-5 flex-column">
      <h1>Bienvenue sur SimplonTweet</h1>
      <p>Enregistre-toi ou Inscris-toi pour pouvoir poster des STweet !!! </p>
    </div>
  );
};

export default Welcome;
