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
      sx={(theme) => ({
        display: "flex",
        padding: "12px 24px 0px 24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        alignSelf: "stretch",
        [theme.breakpoints.up("lg")]: {
          padding: "12px 16px 0px 16px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "12px 24px 0px 24px",
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          width: "600px",
          padding: "4px",
          alignItems: "center",
          gap: "4px",
          borderRadius: "24px",
          backgroundColor: "#EAEDEB",
          [theme.breakpoints.up("lg")]: {
            width: "480px",
          },
          [theme.breakpoints.up("xl")]: {
            width: "600px",
          },
        })}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              height: "32px",
              padding: "0px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              flex: "1 0 0",
              borderRadius: "16px",
              backgroundColor: index === 0 ? "#FFFFFF" : "transparent",
              cursor: "pointer",
              transition: "background-color 0.1s",
              "&:hover": { backgroundColor: "#FFFFFF" },
            }}
          >
            <Typography
              sx={{
                color: "#2B2B2B",
                fontFamily: "Kumbh Sans, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
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
