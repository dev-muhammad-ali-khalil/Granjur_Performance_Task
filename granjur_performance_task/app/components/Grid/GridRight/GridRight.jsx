import React from "react";
import Box from "@mui/material/Box";
import Exams from "./Exams";
import CreditHistory from "./CreditHistory";

const GridRight = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Exams />
      <CreditHistory />
    </Box>
  );
};

export default GridRight;
