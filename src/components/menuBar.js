import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link to="/" className="nav-link">
            <li className="nav-item">Home</li>
          </Link>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <li className="nav-item">All Daily Tasks</li>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <li className="nav-item">Friends Daily Tasks</li>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/task">
              Create New Task{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
