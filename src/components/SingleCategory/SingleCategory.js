import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const { id } = useParams();
  const [sportsDetails, setSportsDetails] = useState([]);
  const [singleSport, setSingleSport] = useState({});
  // loading data
  useEffect(() => {
    fetch("/sportsDb.json")
      .then((res) => res.json())
      .then((data) => setSportsDetails(data.sports));
  }, []);
  // matching id
  useEffect(() => {
    const game = sportsDetails.find(
      (sportDetails) => sportDetails?.idSport === id
    );
    setSingleSport(game);
  }, [id, sportsDetails]);

  return (
    <div>
      {/* single sport section */}
      <div className="container">
        <div className="card">
          <img
            src={singleSport?.strSportThumb}
            className="card-img-top img-thumbnail card-img"
            alt="..."
          />

          <div className="card-body text-center">
            <h3 className="card-title">Name: {singleSport?.strSport}</h3>
            <h4>
              Icon: <img src={singleSport?.strSportIconGreen} alt="" />
            </h4>
            <p>
              <span className="fw-bold">Format</span>: {singleSport?.strFormat}
            </p>
            <h5 className="pb-2">Charge per month: ${singleSport?.strPrice}</h5>
            <p>
              <span className="fw-bold">Description: </span>
              {singleSport?.strSportDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
