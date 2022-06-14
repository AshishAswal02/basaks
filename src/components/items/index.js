import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Grid, Container } from "@mui/material";
import React from "react";
import { items } from "../../data";
import SingleItem from "./SingleItem";

const Items = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderItems = items.map((item) => (
    <Grid
      item
      sm={6}
      md={4}
      key={item.id}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <SingleItem item={item} matches={matches} />
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ sx: 2, md: 3 }}
        justifyContent={"center"}
        column={{ xs: 4, sm: 8, md: 12 }}
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {renderItems}
      </Grid>
    </Container>
  );
};

export default Items;
