import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, CreateTask } from "pages";
import { MenuBar } from "components";

const AuthRoutes = () => {
  return (
    <Fragment>
      <MenuBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task/:id?" exact component={CreateTask} />
      </Switch>
    </Fragment>
  );
};

export default AuthRoutes;
