import React from "react";
import AuthenticationService from "../services/authentication-service";

export const userContext = createContext({
  id: "",
  isAuthenticated: false,
  jwt: "",
  setAuth: () => {},
});

class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      isAuthenticated: false,
      jwt: "",
      setAuth: () => {},
    };
  }

  setAuth = (id, isAuth, jwt) => {
    this.setState({ id: id, isAuthenticated: isAuth, jwt: jwt });
  };
  render = () => {
    return (
      <UserProvider.Provider value={this.state}>
        {this.props.children}
      </UserProvider.Provider>
    );
  };
}
