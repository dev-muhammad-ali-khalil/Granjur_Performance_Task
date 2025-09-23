import React from "react";
import Box from "@mui/material/Box";
import Exams from "./Exams";
import CreditHistory from "./CreditHistory";

const GridRight = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "340px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
      }}
    >
      <Exams />
      <CreditHistory />
    </Box>
  );
};

export default GridRight;
