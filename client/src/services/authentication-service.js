import axios from "axios";

export default class AuthenticationService {
  static isAuthenticated = () => {
    const stateAuth = window.localStorage.getItem("isAuthenticated");
    if (stateAuth !== "true") {
      return false;
    } else {
      return true;
    }
  };

  static register(nom, prenom, mail, pseudo, password) {
    axios
      .post("http://localhost:3333/user/register", {
        nom: nom,
        prenom: prenom,
        pseudo: pseudo,
        mail: mail,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.login(pseudo, password);
        }
      });
  }

  static login(pseudo = null, password = null) {
    const stateAuth = {};
    while (pseudo !== null && password !== null) {
      axios
        .post("http://localhost:3333/user/login", {
          pseudo: pseudo,
          password: password,
        })
        .then((response) => {
          const jwt = response.data;
          window.localStorage.setItem("jwt", jwt);
          if (jwt) {
            stateAuth.isAuthenticated = true;
            stateAuth.jwt = jwt;
            stateAuth.id = window.localStorage.setItem(
              "isAuthenticated",
              this.isAuthenticated
            );
          }
          return stateAuth
        })
        .catch((err) => {
          console.error(err);
          window.localStorage.setItem("isAuthenticated", false);
        });
    }
    return stateAuth;
  }

  static logout() {
    window.localStorage.clear();
  }
}
