import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Box from "@mui/material/Box";

import Brewery from "../interfaces/Brewery";
import BreweryCard from "../components/BreweryCard";
import SearchBox from "../components/SearchBox";
import FiltersContainer from "../components/FiltersContainer";
import CardsContainer from "../components/CardsContainer";
import AppPagination from "../components/AppPagination";

function Home() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredBreweries.length / 8);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <FiltersContainer>
        <SearchBox handleSearch={handleSearch} />
      </FiltersContainer>
      {error && !loading && <p>There is an error!</p>}

      {!error && loading && <p>Loading...</p>}

      {filteredBreweries.length === 0 && !loading && !error && (
        <Box sx={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
          <i>No results matched your search.</i>
        </Box>
      )}

      {filteredBreweries.length > 0 && !loading && !error && (
        <>
          <CardsContainer>
            {filteredBreweries
              .slice((currentPage - 1) * 8, currentPage * 8)
              .map((brewery) => (
                <BreweryCard key={brewery.id} {...brewery} />
              ))}
          </CardsContainer>
          <AppPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default Home;
