import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
