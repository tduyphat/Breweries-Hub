import React from "react";
import { Grid, Container } from "@mui/material";

const CardsContainer = (props: any) => {
  const { children } = props;

  return (
    <Container>
      <Grid container spacing={2}>
        {React.Children.map(children, (child, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {child}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsContainer;
