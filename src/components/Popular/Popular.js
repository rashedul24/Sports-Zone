import React from "react";
const Popular = (props) => {
  // destructuring
  const { strSport, strSportThumb, strSportIconGreen, strFormat, strPrice } = props.sport;
  return (
    <div>
      {/* display home iteams */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
