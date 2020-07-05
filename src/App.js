import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthRoutes, PublicRoutes } from "routing";
import { isNull } from "lodash";
import {} from "serviceWorker";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [isLoggedin, setIsloggedin] = useState(false);
  const [loaderFlag, setLoaderFlag] = useState(false);
  useEffect(() => {
    if (!isNull(localStorage.getItem("x-auth-token"))) {
      fetchingAllCat();
    }
    async function fetchingAllCat() {
      setLoaderFlag(true);
      try {
        // const { status } = await CategoryService.getAllCategories();
        // if (status === 200) {
        // }
        setIsloggedin(true);
        setLoaderFlag(false);
      } catch (ex) {
        setLoaderFlag(false);
        setIsloggedin(false);
      }
    }
  }, []);
  return (
    <React.Fragment>
      <Router>
        {isLoggedin ? (
          <AuthRoutes setIsloggedin={setIsloggedin} />
        ) : (
          <PublicRoutes setIsloggedin={setIsloggedin} />
        )}
      </Router>
    </React.Fragment>
  );
};

export default App;
