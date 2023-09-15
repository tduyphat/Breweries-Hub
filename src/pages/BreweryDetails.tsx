import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";

import Brewery from "../interfaces/Brewery";

const BreweryDetails = () => {
  const [brewery, setBrewery] = useState<Brewery>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchSingleBrewery = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api.openbrewerydb.org/v1/breweries/${id}`
      );
      setBrewery(result.data);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleBrewery();
  }, []);

  return (
    <>
      {error && !loading && <p>There is an error!</p>}

      {!error && loading && <p>Loading...</p>}

      {brewery && !error && !loading && (
        <div>
          <p>{brewery.name}</p>
          <p>{brewery.city}</p>
        </div>
      )}
    </>
  );
};

export default BreweryDetails;
