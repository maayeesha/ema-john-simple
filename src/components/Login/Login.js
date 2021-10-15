import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectURL = location.state?.from || "/shop";
  // console.log("came from", location.state.from);

  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectURL);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your E-mail" />
          <br />
          <input type="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-john <Link to="/register">Create Account</Link>
        </p>
        <div>------ or ------</div>
        <br />
        <button className="btn-regular" onClick={handleGoogleLogIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
