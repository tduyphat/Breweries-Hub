import React from "react";
import Brewery from "../interface/Brewery";

const BreweryCard: React.FC<Brewery> = (brewery) => {
  const { id, name, city } = brewery;

  return (
    <div key={id}>
      <p>{name}</p>
      <p>{city}</p>
    </div>
  );
};

export default BreweryCard;
