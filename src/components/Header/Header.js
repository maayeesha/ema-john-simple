import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // const { user, logout } = useFirebase();  --->dorkar nai
  const { user, logout } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <NavLink to="/shipping">Shipping </NavLink>
        {user.email && (
          <span style={{ color: "white", paddingRight: "10px" }}>
            Hello {user.displayName}
          </span>
        )}
        {user.email ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
