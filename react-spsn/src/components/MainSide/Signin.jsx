import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      password: "",
    };
  }
  login = () => {
    fetch("http://localhost:3333/user/signin", {
      pseudo: this.state.pseudo,
      password: this.state.password,
    }).then((response) => {
      console.log(response);
      const jwt = response.data; // to rceive the JWT from b/e
      const storage = window.localStorage;
      storage.setItem("jwt", jwt);
      console.log(jwt);
      if (jwt) {
        this.props.history.push("/");
      }
    });
  };
  handleChange = (event) => {
    let key = event.target.id;
    let value = event.target.value;
    this.setState({ [key]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // this.login()
  };

  render() {
    return (
      <div className="col-md-10 mt-5 mx-auto">
        <div id="first">
          <div className="myform form ">
            <div className="col-md-12 text-center">
              <h2>Se connecter</h2>
            </div>
          </div>
          <form name="login">
            <div className="mb-3">
              <label htmlFor="pseudo">Pseudonyme</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="pseudo"
                  placeholder="MonPseudo"
                  required=""
                  onChange={this.handleChange}
                />
                <div className="invalid-feedback">
                  Un pseudo valide est requis.
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Entrez votre mot de passe"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-12 text-center ">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-danger tx-tfm mb-3"
                onChange={this.handleSubmit}
              >
                Se connecter
              </button>
            </div>
            <div className="form-group">
              <p className="text-center">
                Vous n'avez pas de compte ?<br />
                <Link to="/register">Enregistrez-vous !</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
