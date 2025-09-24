"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconBar from "./IconBar/IconBar";
import MenuBar from "./MenuBar/MenuBar";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Box
      sx={{
        display: { md: "none", lg: "flex" },
        flexDirection: "row",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <IconBar isCollapsed={isCollapsed} />
      <MenuBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </Box>
  );
};

export default Sidebar;
