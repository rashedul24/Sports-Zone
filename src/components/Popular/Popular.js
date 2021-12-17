import React from 'react';
const Popular = (props) => {
  const {strSport, strSportThumb, strSportDescription, strFormat} = props.sport
  console.log(props.sport)
  return (
    <div>
      <div className="col-md-12">
      <div className="card">
      <img
            src={strSportThumb}
            className="card-img-top img-thumbnail card-img"
            alt="..."
          />
          {/* card items */}
          <div className="card-body text-center">
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