import React from "react";
import AuthenticationService from "../../services/authentication-service";
import { useHistory } from "react-router-dom";

const ButtonNav = () => {
  const history = useHistory();
  const isAuth = AuthenticationService.isAuthenticated();

  const handleLogOut = () => {
    
    AuthenticationService.logout();
    history.push("/");
  };

  return isAuth ? (
    <button
      onClick={(e) => handleLogOut(e)}
      className="btn btn-danger btn-block"
    >
      Se déconnecter
    </button>
  ) : (
    <div className="d-flex justify-content-around">
      <button
        onClick={() => history.push("/signin")}
        className="btn btn-primary col-md-5"
      >
        Se connecter
      </button>
      <button
        onClick={() => history.push("/register")}
        className="btn btn-danger col-md-5"
      >
        S'inscrire
      </button>
    </div>
  );
};

export default ButtonNav;
