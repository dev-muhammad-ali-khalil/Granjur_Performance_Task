import React from "react";
import Box from "@mui/material/Box";
import DegreeProgress from "./DegreeProgress";

const GridLeft = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <DegreeProgress />
    </Box>
  );
};

export default GridLeft;
