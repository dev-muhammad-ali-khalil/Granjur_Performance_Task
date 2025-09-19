import React from "react";
import Box from "@mui/material/Box";
import Topbar from "../Topbar/Topbar";
import NavigationBar from "../NavigationBar/NavigationBar";
import GridView from "../Grid/Grid";

const MainArea = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Topbar />
      <NavigationBar />
      <GridView />
    </Box>
  );
};

export default MainArea;
