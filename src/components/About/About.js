import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faCoffee,
  faDollarSign,
  faMoneyBillAlt,
  faMoneyBillWave,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import athlet from "../../images/athlete.png";

const About = () => {
  const element = <FontAwesomeIcon icon={faShoppingBag} />;
  return (
    <div>
      <div>
        <div>
          <div className=" container my-3 about-img">
            <img src={athlet} alt="" />
          </div>
          <div className="text-center m-5">
            <h1 className="text-success">WE BUILD BETTER ATHLETES</h1>
            <br />
            <p>
              Over 10 years ago we broke open the doors of elite sports for you.
              Sports Zone gave athletes of all levels entry into elite training
              facilities with access to top-level speed training and coaching
              techniques. Any athlete, if they were willing to put in the work,
              could benefit and improve their speed and performance with our
              proven methodology.
            </p>
          </div>
          <div>
            <div className="payment text-center fs-1 my-3 text-danger">
              {element} Payment
            </div>
            <p className="text-center">
              Every coaching session can be booked in minutes through Sports
              Zone and all financial transactions are securely processed online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
