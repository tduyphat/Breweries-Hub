import React from "react";
import Brewery from "../interfaces/Brewery";

const BreweryCard: React.FC<Brewery> = (brewery) => {
  const { name, city } = brewery;

  return (
    <div>
      <p>{name}</p>
      <p>{city}</p>
    </div>
  );
};

export default BreweryCard;
