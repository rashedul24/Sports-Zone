import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCategory = () => {
  const { id } = useParams()
  const [sportDetails, setSportDetails] = useState([])
  useEffect(() => {
    fetch("/sportsDb.json")
      .then(res => res.json())
    .then(data=>setSportDetails(data.sports))
  }, [])
  useEffect(() => {
    const sportInfo = sportDetails.find(sport => sport.idSport === id)
    console.log(sportInfo)
  }, [])
  
  return (
    <div>
      
    </div>
  );
};

export default SingleCategory;