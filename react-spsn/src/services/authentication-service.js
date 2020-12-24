export default class AuthenticationService {

  static isAuthenticated= false;

  static login(pseudo, password){
    
    const isAuthenticated = (pseudo == 'test' && password == 'test');
    
    return new Promise(resolve => {
      setTimeout(() => {
        this.isAuthenticated = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }
}

//TO DO
  // const login = () => {
  //   fetch("http://localhost:3333/user/signin", {
  //     pseudo: this.state.pseudo,
  //     password: this.state.password,
  //   }).then((response) => {
  //     console.log(response);
  //     const jwt = response.data; // to rceive the JWT from b/e
  //     const storage = window.localStorage;
  //     storage.setItem("jwt", jwt);
  //     console.log(jwt);
  //     if (jwt) {
  //       this.props.history.push("/");
  //     }
  //   });
  // };