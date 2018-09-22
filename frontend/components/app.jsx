import React from "react";
import { Switch, HashRouter, Route, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionFormContainer from "./session_form_container";
import WelcomePageContainer from "./welcome_page_container";
import AccountContainer from "./account_container";
import AddJobFormContainer from "./add_job_form_container";
import Navbar from "./navbar";

const App = () => (
  <div className="app-component">
    <Navbar />
    <Switch>
      <AuthRoute path="/login/admin" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup/admin" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/account" component={AccountContainer} />
      <ProtectedRoute path="/add_job" component={AddJobFormContainer} />
      <Route path="/" component={WelcomePageContainer} />
    </Switch>
  </div>
);

export default App;
