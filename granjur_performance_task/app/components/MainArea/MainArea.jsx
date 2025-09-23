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
        alignItems: "center",
        flex: "1 0 0",
      }}
    >
      {/* Top Bar + Navigation Bar */}
      <Box
        sx={{
          display: "flex",
          paddingBottom: "8px",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          backgroundColor: "#F5F6F5",
        }}
      >
        <Topbar />
        <NavigationBar />
      </Box>
      {/* Main Area */}
      <GridView />
    </Box>
  );
};

export default MainArea;
