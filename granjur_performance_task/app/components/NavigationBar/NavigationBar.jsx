import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const menuItems = [
  {
    name: "Overview",
  },
  {
    name: "Degree Map",
  },
  {
    name: "Credit History",
  },
  {
    name: "Degree Audit",
  },
];

const NavigationBar = () => {
  return (
    <Box
      sx={{
        padding: "12px 16px 8px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#EAEDEB",
          padding: "4px",
          borderRadius: "24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          gap: "4px",
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: index === 0 ? "#FFFFFF" : "transparent",
              padding: "6px 25px",
              boxSizing: "border-box",
              borderRadius: "16px",
              cursor: "pointer",
              transition: "background-color 0.1s",
              "&:hover": { backgroundColor: "#FFFFFF" },
            }}
          >
            <Typography
              sx={{
                color: "#2B2B2B",
                fontSize: "14px",
                fontFamily: "Kumbh Sans, sans-serif",
                fontWeight: 600,
                lineHeight: "20px",
                letterSpacing: "0%",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NavigationBar;
