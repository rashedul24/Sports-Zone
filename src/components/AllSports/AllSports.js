import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AllSports.css";

const AllSports = (props) => {
  // destructuring
  const { strSport, strSportThumb, strSportIconGreen, strFormat, idSport, strPrice } =props.singleSport;
  return (
    <div>
      {/* displaying sports in category section */}
      <div className="col-md-12">
        <div className="card">
          <img
            src={strSportThumb}
            className="card-img-top img-thumbnail card-img"
            alt="..."
          />

          <div className="card-body text-center">
            <h3>
              Icon: <img src={strSportIconGreen} alt="" />
            </h3>
            <h4 className="card-title">Name: {strSport}</h4>
            <p>
              <span className="fw-bold">Format</span>: {strFormat}
            </p>
            <h5>Charge per month: ${strPrice }</h5>
            <Button variant="primary">
              <NavLink to={`/category/${idSport}`} className="single-sport">
                Details
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSports;
