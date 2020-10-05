import React from "react";

import BadgeProfil from "./NavSide/BadgeProfil";
import ListeFollow from "./NavSide/ListeFollow";

class NavSide extends React.Component {
  render() {
    return (
      <nav className="col-md-4 order-md-1 mb-4 py-3 m">
        <div className="mb-3">
          
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={this.count}
          >
            count
          </button>
          <BadgeProfil />
          <h6>Utilisateurs Suivi</h6>
          <ListeFollow />
          <h6>Utilisateurs à suivre</h6>
          <ListeFollow />
        </div>
      </nav>
    );
  }
}

export default NavSide;
