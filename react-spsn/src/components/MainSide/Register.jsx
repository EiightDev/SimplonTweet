import React from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authentication-service";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      pseudo: "",
      mail: "",
      password: "",
    };
  }
  register = () => {
    AuthenticationService.register(
      this.state.nom,
      this.state.prenom,
      this.state.mail,
      this.state.pseudo,
      this.state.password,
    )
    this.props.history.push('/post')
  };
  
  handleChange = (event) => {
    let key = event.target.id
    let value = event.target.value
    this.setState({[key]:value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.register()
  }

  render() {
    return (
      <div className="col-md-10 mt-5 mx-auto">
        <h2 className="mb-3 col-md-12 text-center">S'inscrire</h2>
        <form className="needs-validation" noValidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label forhtml="prenom">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Prénom"
                required=""
                onChange ={this.handleChange}
              />
              <div className="invalid-feedback">
                Un prénom valide est requis
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label forhtml="nom">Nom</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Nom"
                required=""
                onChange ={this.handleChange}
              />
              <div className="invalid-feedback">Un nom valide est requis</div>
            </div>
          </div>

          <div className="mb-3">
            <label forhtml="pseudo">Pseudonyme</label>
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
                onChange ={this.handleChange}
              />
              <div className="invalid-feedback">
                Un pseudo valide est requis.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label forhtml="mail">Email</label>
            <input
              type="email"
              className="form-control"
              id="mail"
              placeholder="email@exemple.com"
              onChange ={this.handleChange}
            />
            <div className="invalid-feedback">
              Merci d'entrer un e-mail valide.
            </div>
          </div>
          <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="emailHelp"
                minLength="8"
                maxLength="16"
                placeholder="Entrez un mot de passe (entre 8 et 16 characteres)"
                onChange ={this.handleChange}
              />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-3"
            type="submit"
            onClick={this.handleSubmit}
          >
            Valider
          </button>
        </form>
        <div className="form-group">
          <p className="text-center">
            Vous avez déja un compte ?<br />
            <Link to="/signin">Connectez-vous !</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
