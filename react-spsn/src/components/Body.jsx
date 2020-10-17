import React from "react";
import Main from "./Main";
import NavSide from "./Nav";
import Header from "./Header";

class Test extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <div className="row">
        <NavSide />
        <Main />
      </div>
      </div>
    );
  }
}

export default Test;
