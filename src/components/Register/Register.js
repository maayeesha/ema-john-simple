import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "../Login/Login.css";

const Register = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form action="" onSubmit="">
          <input type="email" placeholder="Your E-mail" />
          <br />
          <input type="password" placeholder="Enter password" />
          <br />
          <input type="password" placeholder="Re-enter password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an account? <Link to="/login"></Link>
        </p>
        <div>-------- or --------</div>
        <br />
        <button onclick={signInUsingGoogle} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
