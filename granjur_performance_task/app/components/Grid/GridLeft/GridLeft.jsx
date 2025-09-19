import React from "react";
import Box from "@mui/material/Box";
import DegreeProgress from "./DegreeProgress";
import CreditOverview from "./CreditOverview";

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
      <CreditOverview />
    </Box>
  );
};

export default GridLeft;
