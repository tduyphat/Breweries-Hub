import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Card
            key={id}
            sx={{
              width: 500,
              height: 400,
              backgroundColor: "#F5F5F5",
              borderRadius: "0.5em",
            }}
          >
            <CardMedia
              sx={{ height: 140, backgroundColor: "grey" }}
              image={`https://robohash.org/${brewery.name}.png?size=200x200`}
              title={brewery.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {brewery.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {brewery.address_1}, {brewery.city}, {brewery.state},{" "}
                {brewery.country}
                <br />
                Postal Code: {brewery.postal_code}
                <br />
                Type: {brewery.brewery_type}
                <br />
                Longtitude: {brewery.longtitude || "N/A"}
                <br />
                Latitude: {brewery.latitude || "N/A"}
                <br />
                Phone: {brewery.phone || "N/A"}
                <br />
                Website:{" "}
                {brewery.website_url ? (
                  <Link href={brewery.website_url} color="inherit">
                    {brewery.website_url}
                  </Link>
                ) : (
                  "N/A"
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default BreweryDetails;
