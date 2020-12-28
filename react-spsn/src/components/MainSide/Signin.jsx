import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import AuthenticationService from "../../services/authentication-service";

const SignIn = () => {
  const history = useHistory();

  const [message, setMessage] = useState("Vous êtes déconnecté");

  const [form, setForm] = useState({
    pseudo: { value: "" },
    password: { value: "" },
  });
  const validateForm = () => {
    //si pseudo ne coreespondent pas return false
    return true;
  };
  const handleChange = (e) => {
    const newField = { [e.target.name]: { value: e.target.value } };
    console.info(newField);
    setForm({ ...form, ...newField });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(form);

    const isFormValid = validateForm();

    if (isFormValid) {
      setMessage("👉 Tentative de connexion en cours ...");
      AuthenticationService.login(form.pseudo.value, form.password.value);

      if (AuthenticationService.isAuthenticated === false) {
        setMessage("🔐 Identifiant ou mot de passe incorrect.");
        return;
      }
      history.push("/post");
    }
  };

  return (
    <div className="col-md-10 mt-5 mx-auto">
      <div id="first">
        <div className="myform form ">
          <div className="col-md-12 text-center">
            <h2>Se connecter</h2>
          </div>
        </div>
        {/* Form message */}
        {message && (
          <div className="form-group">
            <div className="card-panel grey lighten-5">{message}</div>
          </div>
        )}
        <form name="login" onSubmit={(e) => handleSubmit(e)}>
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
                name="pseudo"
                placeholder="MonPseudo"
                required=""
                onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-12 text-center ">
            <button
              type="submit"
              className=" btn btn-block mybtn btn-danger tx-tfm mb-3"
              onChange={(e) => handleSubmit(e)}
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
};

export default SignIn;
