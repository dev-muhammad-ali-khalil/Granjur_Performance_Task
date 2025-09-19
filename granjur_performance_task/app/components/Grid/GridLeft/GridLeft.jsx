import React from "react";
import Box from "@mui/material/Box";
import DegreeProgress from "./DegreeProgress";
import CreditOverview from "./CreditOverview";
import ExamStats from "./ExamStats";

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
      <ExamStats />
    </Box>
  );
};

export default GridLeft;
