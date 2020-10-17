import React from "react";

import BadgeProfil from "./NavSide/BadgeProfil";
import ListeFollow from "./NavSide/ListeFollow";
import ListeSuggestion from "./NavSide/ListeSuggestion";
import ButtonNav from "./NavSide/ButtonNav";

class NavSide extends React.Component {
  render() {
    return (
      <nav
        id="navside"
        className="sticky-top col-md-4 order-md-1 mb-4 py-3 m "
      >
        <div className="mb-3">
        <ButtonNav />
          <BadgeProfil />
          <ListeFollow />
          <ListeSuggestion />
        </div>
      </nav>
    );
  }
}

export default NavSide;
