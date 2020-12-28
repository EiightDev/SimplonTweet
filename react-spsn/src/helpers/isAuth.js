import AuthenticationService from "./services/authentication-service";

const isAuth = () => {
  return AuthenticationService.isAuthenticated();
};

export default isAuth;
