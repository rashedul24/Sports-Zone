import React, { useEffect, useState } from "react";
import Popular from "../Popular/Popular";
import "./Home.css";
const Home = () => {
  // state declaration
  const [sports, setSports] = useState([]);
  // loading data
  useEffect(() => {
    fetch("/homeSportsDb.json")
      .then((res) => res.json())
      .then((data) => setSports(data.sports));
  }, []);
  return (
    <div>
      {/* home page */}
      <div className="home-heading text-center m-5 p-5 rounded">
        <h1>
          Welcome to <span className="brand">Sports Zone</span>
        </h1>
        <h4>We helps any athlete remove limits and reach new levels.</h4>
      </div>
      <div>
        <h1 className="text-center m-5 text-primary">Popular Sports</h1>
      </div>
      <div className="col-md-12 p-5">
        <div className="row row-cols-lg-3 row-cols-md-2 g-4">
          {/* mapping array */}
          {sports.map((sport) => (
            <Popular key={sport.idSport} sport={sport}></Popular>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
