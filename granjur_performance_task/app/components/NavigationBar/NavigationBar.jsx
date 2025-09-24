import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const menuItems = [
  {
    name: "Overview",
    value: "overview",
  },
  {
    name: "Degree Map",
    value: "degree-map",
  },
  {
    name: "Credit History",
    value: "credit-history",
  },
  {
    name: "Degree Audit",
    value: "degree-audit",
  },
];

const DropDownArrow = (props) => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.354 1.35378L6.35403 6.35378C6.30759 6.40027 6.25245 6.43715 6.19175 6.46231C6.13105 6.48748 6.06599 6.50043 6.00028 6.50043C5.93457 6.50043 5.86951 6.48748 5.80881 6.46231C5.74811 6.43715 5.69296 6.40027 5.64653 6.35378L0.646528 1.35378C0.552708 1.25996 0.5 1.13272 0.5 1.00003C0.5 0.867352 0.552708 0.740104 0.646528 0.646284C0.740348 0.552463 0.867596 0.499756 1.00028 0.499756C1.13296 0.499756 1.26021 0.552463 1.35403 0.646284L6.00028 5.29316L10.6465 0.646284C10.693 0.599829 10.7481 0.562978 10.8088 0.537837C10.8695 0.512696 10.9346 0.499756 11.0003 0.499756C11.066 0.499756 11.131 0.512696 11.1917 0.537837C11.2524 0.562978 11.3076 0.599829 11.354 0.646284C11.4005 0.692739 11.4373 0.747889 11.4625 0.808586C11.4876 0.869282 11.5006 0.934336 11.5006 1.00003C11.5006 1.06573 11.4876 1.13079 11.4625 1.19148C11.4373 1.25218 11.4005 1.30733 11.354 1.35378Z"
      fill="#2B2B2B"
    />
  </svg>
);

const NavigationBar = () => {
  const [menuItem, setMenuItem] = useState(menuItems[0]["value"]);

  const handleChange = (event) => {
    setMenuItem(event.target.value);
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: { xs: "8px", md: "20px" },
        alignSelf: "stretch",
        [theme.breakpoints.up("xs")]: {
          padding: "0px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "12px 24px 0px 24px",
        },
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
          display: { xs: "none", md: "flex" },
          padding: "4px",
          alignItems: "center",
          gap: "4px",
          alignSelf: { md: "stretch", lg: "auto" },
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
      {/* Mobile Menu */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          padding: "8px 12px",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: "24px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <FormControl fullWidth>
          <Select
            id="menu-select"
            value={menuItem}
            variant="standard"
            disableUnderline
            IconComponent={DropDownArrow}
            sx={{
              "& .MuiSelect-select": {
                color: "#2B2B2B",
                fontFamily: "Kumbh Sans, sans-serif",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "16px",
                letterSpacing: "0%",
                padding: 0,
                minHeight: "unset !important",
              },
              "& .MuiSelect-icon": {
                top: "30%",
              },
            }}
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: "10px",
                  boxShadow: "0px 2px 16px 0px #EAEDEB",
                  "& .MuiList-root": {
                    paddingY: "3px",
                    paddingX: "8px",
                  },
                  "& .MuiMenuItem-root": {
                    color: "#2B2B2B",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0%",
                    marginY: "6px",
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#DDE2DF !important",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#EAEDEB !important",
                    },
                  },
                },
              },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default NavigationBar;
