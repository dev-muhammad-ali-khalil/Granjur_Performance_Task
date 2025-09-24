import React from "react";
import Box from "@mui/material/Box";
import GridLeft from "./GridLeft/GridLeft";
import GridRight from "./GridRight/GridRight";

const GridView = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        padding: "20px 24px 24px 24px",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
        [theme.breakpoints.up("lg")]: {
          padding: "12px 16px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "20px 24px 24px 24px",
        },
      })}
    >
      <GridLeft />
      <GridRight />
    </Box>
  );
};

export default GridView;
