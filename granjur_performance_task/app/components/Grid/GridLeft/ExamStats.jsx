"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { iconMapping } from "../../../utils/mapping";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const menuOptions = [
  {
    label: "All Time",
    value: "all-time",
  },
  {
    label: "Other",
    value: "other",
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

const ExamStats = () => {
  const [option, setOption] = useState(menuOptions[0]["value"]);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: "20px 20px 24px 20px",
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        boxShadow: "0px 2px 16px 0px #EAEDEB",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* ----- Header ----- */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#EAEDEB",
                borderRadius: "12px",
                padding: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={iconMapping["examStats"]}
                alt="Exam Stats"
                width={20}
                height={20}
              />
            </Box>
            <Typography
              sx={{
                color: "#2B2B2B",
                fontSize: "16px",
                fontFamily: "Kumbh Sans, sans-serif",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.6%",
              }}
            >
              Exam Stats
            </Typography>
          </Box>
          <Box
            sx={{
              width: "200px",
              border: "0.5px solid #EAEDEB",
              padding: "8px 16px 4px 16px",
              boxSizing: "border-box",
              borderRadius: "999px",
            }}
          >
            <FormControl fullWidth>
              <Select
                id="exam-stats-select"
                value={option}
                variant="standard"
                disableUnderline
                IconComponent={DropDownArrow}
                sx={{
                  "& .MuiSelect-select": {
                    padding: 0,
                    minHeight: "unset !important",
                    color: "#2B2B2B",
                    fontSize: "14px",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: 500,
                    lineHeight: "16px",
                    letterSpacing: "-0%",
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
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#2B2B2B",
                        lineHeight: "16px",
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
                {menuOptions.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        {/* Body */}
      </Box>
    </Box>
  );
};

export default ExamStats;
