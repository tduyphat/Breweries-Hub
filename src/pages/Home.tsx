import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";

import Brewery from "../interfaces/Brewery";
import BreweryCard from "../components/BreweryCard";
import SearchBox from "../components/SearchBox";

function Home() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    const filtered = breweries?.filter((brewery) =>
      brewery.name.toLowerCase().includes(searchField)
    );
    setFilteredBreweries(filtered);
  }, [breweries, searchField]);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://api.openbrewerydb.org/v1/breweries"
      );
      setBreweries(result.data);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    }
    setLoading(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchField(searchTerm);
  };

  return (
    <>
      <SearchBox handleSearch={handleSearch} />
      {error && !loading && <p>There is an error!</p>}

      {!error && loading && <p>Loading...</p>}

      {filteredBreweries &&
        !loading &&
        !error &&
        filteredBreweries.map((brewery) => (
          <Link to={`${brewery.id}`} key={brewery.id}>
            <BreweryCard {...brewery} />
          </Link>
        ))}
    </>
  );
}

export default Home;