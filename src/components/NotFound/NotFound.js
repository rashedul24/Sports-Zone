import React from "react";
import "./NotFound.css";
import logo from "../../images/page-not-found-cartoon.png";

const NotFound = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <img src={logo} alt="" />
          </div>
          <div className="col text-center">
            <h1 className="not-found">404 - Page Not Found</h1>
            <br />
            <p>Whoops! Sorry, but this page doesn't exist.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
