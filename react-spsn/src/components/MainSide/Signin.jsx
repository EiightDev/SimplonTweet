import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
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
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Adresse Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Entrez votre adresse e-mail..."
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Entrez votre mot de passe"
              />
            </div>
            <div className="col-md-12 text-center ">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-danger tx-tfm mb-3"
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
