"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconBar from "./IconBar/IconBar";
import MenuBar from "./MenuBar/MenuBar";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        position: "sticky",
        top: 0,
        flexShrink: 0,
      }}
    >
      <IconBar isCollapsed={isCollapsed} />
      <MenuBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    </Box>
  );
};

export default Sidebar;
