import React from "react";
import Box from "@mui/material/Box";
import GridLeft from "./GridLeft/GridLeft";
import GridRight from "./GridRight/GridRight";

const GridView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px 24px 24px 24px",
        alignItems: "self-start",
        gap: "16px",
        alignSelf: "stretch",
      }}
    >
      <GridLeft />
      <GridRight />
    </Box>
  );
};

export default GridView;
