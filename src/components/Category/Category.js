import React, { useEffect, useState } from "react";
import AllSports from "../AllSports/AllSports";

const Category = () => {
  const [allSports, setAllSports] = useState([]);

  useEffect(() => {
    fetch("/sportsDb.json")
      .then((res) => res.json())
      .then((data) => setAllSports(data.sports));
  }, []);
  return (
    <div>
      <div className=" text-center m-5 text-success">
        <h1>Sports Category</h1>
      </div>
      <div className="col-md-12 p-5">
        <div className="row row-cols-lg-4 row-cols-md-3 g-4">
          {allSports.map((singleSport) => (
            <AllSports
              key={singleSport.idSport}
              singleSport={singleSport}
            ></AllSports>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
