import React, { Fragment, useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { AuthService } from "services";
import { signInSchema } from "utils/schema";

import "css/login.css";

const toastTime = {
  autoClose: 2500,
};

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(false);

  function validateProperty({ key, value }) {
    const obj = { [key]: value };

    const schema = { [key]: signInSchema[key] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  async function validate(loginObj) {
    const options = { abortEarly: false };
    const { error } = Joi.validate(loginObj, signInSchema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  const handleChanage = ({ target: { name: key, value } }) => {
    const errorMessage = validateProperty({ key, value });
    let tempError = { ...error };
    if (errorMessage) {
      if (
        key === "email" &&
        !errorMessage.includes('"Email" is not allowed to be empty')
      ) {
        tempError[key] = "Email is  Invalid";
      } else {
        tempError[key] = errorMessage;
      }
    } else {
      delete tempError[key];
    }
    setError(tempError);
    eval("set" + key + "(value)");
  };

  const handleSignIn = async (e) => {
    setDisabled(true);
    const loginObj = {
      email,
      password,
    };
    const error = await validate(loginObj);

    if (
      error &&
      error.email &&
      !error.email.includes('"Email" is not allowed to be empty')
    ) {
      error.email = "Email is Invalid";
    }

    setError(error ? { ...error } : {});

    if (error) {
      return;
    }

    try {
      const { status } = await AuthService.login(loginObj);
      if (status === 200) {
        toast.info("You have successfully logged in", toastTime);
        props.setIsloggedin(true);
        setDisabled(false);
      }
    } catch (ex) {
      toast.error(ex.response.data, toastTime);
      setDisabled(false);
    }
  };

  return (
    <Fragment>
      <div className="login-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChanage}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChanage}
                />
              </div>
              <button
                className="btn btn-primary btn-sm btn-block"
                onClick={handleSignIn}
              >
                {" "}
                Login{" "}
              </button>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
