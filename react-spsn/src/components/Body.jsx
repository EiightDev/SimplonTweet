import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./MainSide/NotFound";
import Register from "./MainSide/Register";
import Welcome from "./MainSide/Welcome";
import Post from "./MainSide/Post";
import SignIn from "./MainSide/Signin";
import UpdateUser from "./MainSide/UpdateUser";

import NavSide from "./Nav";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="row">
          <NavSide />
          <main className="col-md-8 order-md-2">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/update/:id" component={UpdateUser} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/" component={Welcome} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Body;
