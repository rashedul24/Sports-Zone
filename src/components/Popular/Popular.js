import React from "react";
const Popular = (props) => {
  const { strSport, strSportThumb, strSportIconGreen, strFormat } = props.sport;
  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
