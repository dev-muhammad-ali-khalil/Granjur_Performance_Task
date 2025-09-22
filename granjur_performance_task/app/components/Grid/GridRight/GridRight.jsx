import React from "react";
import Box from "@mui/material/Box";
import Exams from "./Exams";

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
    </Box>
  );
};

export default GridRight;
