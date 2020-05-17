import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import Home from "../../modules/home";
import Login from "../../modules/authentication/login";
import Register from "../../modules/authentication/register";

export function ApplicationRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/login' component={Register} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
