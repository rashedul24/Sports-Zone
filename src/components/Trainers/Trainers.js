import React, { useEffect, useState } from "react";
import AllTrainer from "../AllTrainer/AllTrainer";

const Trainer = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("/trainer.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data.trainers));
    console.log(trainers);
  }, []);

  return (
    <div>
      <h1 className="text-center m-5 text-success">Our Trainers</h1>
      <div className="row row-cols-lg-3 row-cols-md-2 g-4">
        {trainers.map((trainer) => (
          <AllTrainer key={trainer.id} trainer={trainer}></AllTrainer>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
