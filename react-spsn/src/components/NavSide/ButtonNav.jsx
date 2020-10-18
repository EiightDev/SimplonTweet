import React from "react";

class ButtonNav extends React.Component {
  onligne = 1;

  render() {
    if (this.onligne)
      return (
        <button className="btn btn-danger btn-block">Se déconnecter</button>
      );
    else
      return (
        <div className="d-flex justify-content-around">
          <button onClick={() => window.location.href='/signin'} className="btn btn-primary col-md-5" href='/signin'> Se connecter</button>
          <button onClick={() => window.location.href='/register'}className="btn btn-danger col-md-5">S'inscrire</button>
        </div>
      );
  }
}

export default ButtonNav;
