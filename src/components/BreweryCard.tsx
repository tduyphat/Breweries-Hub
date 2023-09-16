import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Brewery from "../interfaces/Brewery";

const BreweryCard: React.FC<Brewery> = (brewery) => {
  const { name, city, id, state } = brewery;
  const navigate = useNavigate();

  return (
    <Card
      key={id}
      sx={{
        maxWidth: 345,
        height: 350,
        backgroundColor: "#F5F5F5",
        borderRadius: "0.5em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <CardMedia
        sx={{ height: 140, backgroundColor: "grey" }}
        image={`https://robohash.org/${name}.png?size=200x200`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {city}, {state}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`${id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BreweryCard;
