import React from "react";

class UpdateUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        } 
    }

    componentDidMount () {
        this.setState({
            nom: 'Mustapha',
            prenom: 'Eiight',
            pseudo:'EiightDev',
            email:'Mustapha@Eiight.com'
        })
    }

    update = (e) => {
        console.log(
            'MAJ'
        )
    }


  onligne = false;
  render() {
      return (
    <div className="col-md-10 mt-5 mx-auto">
        <h2 className="mb-3 col-md-12 text-center">Mettre à jour son profil</h2>
        <form className="needs-validation" noValidate="">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label forhtml="firstName">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Prénom"
                defaultValue={this.state.prenom}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label forhtml="lastName">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Nom"
                defaultValue={this.state.nom}
                />
              
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
                defaultValue={this.state.pseudo}
                />
              
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
              defaultValue={this.state.email}
            />
            
          </div>
          <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">
            Mettre à jour
          </button>
        </form>
      </div>)
  }
}

export default UpdateUser;
