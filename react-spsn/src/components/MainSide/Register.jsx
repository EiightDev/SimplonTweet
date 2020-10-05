import React from "react";
import {Link} from "react-router-dom"

class Register extends React.Component {
  render() {
    return (
      <div className="mx-5">
        <h4 className="mb-3">S'inscrire</h4>
        <form className="needs-validation" noValidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label forhtml="firstName">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""for
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label forhtml="lastName">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label forhtml="username">Pseudo</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                required=""
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="mb-3">
            <label forhtml="email">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue to checkout
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
