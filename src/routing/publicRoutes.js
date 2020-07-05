import React from "react";
import { Route } from "react-router-dom";
import { Login } from "pages";
const publicRoutes = ({ setIsloggedin }) => (
  <>
    <Route path="/" component={() => <Login setIsloggedin={setIsloggedin} />} />
  </>
);

export default publicRoutes;
