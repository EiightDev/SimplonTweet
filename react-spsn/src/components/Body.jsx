import React from "react";
import Main from "./Main";
import NavSide from "./Nav";

class Test extends React.Component {
  render() {
    return (
      <div className="row body">
        <NavSide />
        <Main />
      </div>
    );
  }
}

export default Test;
