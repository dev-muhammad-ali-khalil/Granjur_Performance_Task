import React from "react";
import Box from "@mui/material/Box";
import DegreeProgress from "./DegreeProgress";
import Exams from "../GridRight/Exams";
import CreditOverview from "./CreditOverview";
import CreditHistory from "../GridRight/CreditHistory";
import ExamStats from "./ExamStats";

const GridLeft = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        flex: "1 0 0",
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
      <DegreeProgress />
      <Box
        sx={{
          display: { md: "block", lg: "none" },
        }}
      >
        <Exams />
      </Box>
      <CreditOverview />
      <Box
        sx={{
          display: { md: "block", lg: "none" },
        }}
      >
        <CreditHistory />
      </Box>
      <ExamStats />
    </Box>
  );
};

export default GridLeft;
