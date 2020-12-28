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
  // static login(pseudo, password){

  //   const isAuthenticated = (pseudo == 'test' && password == 'test');

  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       this.isAuthenticated = isAuthenticated;
  //       resolve(isAuthenticated);
  //     }, 1000);
  //   });
  // }
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
            this.login(pseudo, password)
          }
        });
      }
  
  static login(pseudo, password) {
    axios
      .post("http://localhost:3333/user/login", {
        pseudo: pseudo,
        password: password,
      })
      .then((response) => {
        const jwt = response.data;
        window.localStorage.setItem("jwt", jwt);
        if (jwt) {
          let isAuth = true;
          window.localStorage.setItem("isAuthenticated", isAuth);
        }
      })
      .catch((err) => {
        console.error(err);
        let isAuth = false;
        window.localStorage.setItem("isAuthenticated", isAuth);
      });
  }

  static logout() {
    window.localStorage.clear();
  }
}
