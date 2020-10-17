import React from "react";
import {Link} from "react-router-dom"

class Register extends React.Component {
  render() {
    return (
      <div className="col-md-10 mt-5 mx-auto">
        <h2 className="mb-3 col-md-12 text-center">S'inscrire</h2>
        <form className="needs-validation" noValidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label forhtml="firstName">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Prénom"
                value=""
                required=""for
              />
              <div className="invalid-feedback">
                Un prénom valide est requis
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label forhtml="lastName">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Nom"
                value=""
                required=""
              />
              <div className="invalid-feedback">
              Un nom valide est requis
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label forhtml="username">Pseudonyme</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="MonPseudo"
                required=""
              />
              <div className="invalid-feedback">Un pseudo valide est requis.</div>
            </div>
          </div>

          <div className="mb-3">
            <label forhtml="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@exemple.com"
            />
            <div className="invalid-feedback">
              Merci d'entrer un e-mail valide.
            </div>
          </div>
          <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">
            Valider
          </button>
        </form>
        <div className="form-group">
                <p className="text-center">
                  Vous avez déja un compte ?<br />
                  <Link to='/signin'>
                    Connectez-vous !
                  </Link>
                </p>
              </div>
      </div>
    );
  }
}

export default Register;
