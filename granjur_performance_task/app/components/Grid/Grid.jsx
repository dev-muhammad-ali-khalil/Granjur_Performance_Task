import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GridLeft from "./GridLeft/GridLeft";
import GridRight from "./GridRight/GridRight";

const GridView = () => {
  return (
    <Box
      sx={{
        padding: "12px 16px",
      }}
    >
      <Grid container spacing="16px">
        <Grid size={6}>
          <GridLeft />
        </Grid>
        <Grid size={6}>
          <GridRight />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridView;
