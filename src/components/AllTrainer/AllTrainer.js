import React from 'react';
import './AllTrainer.css'

const AllTrainer = (props) => {
  const{img, name, info}=props?.trainer
  return (
    <div>
     <div className="container">
      <div className="card trainer ">
      <img
            src={img}
            className="card-img-top img-thumbnail card-img"
            alt="..."
          />
          
          <div className="card-body text-center">
            <h3 className="card-title">Name: {name}</h3>
            
            <p><span className="fw-bold">Description</span>: {info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTrainer;