"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { iconMapping } from "../../../utils/mapping";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    name: "My Degree",
    defaultIcon: iconMapping["myDegreeLight"],
    activeIcon: iconMapping["myDegreeLight"],
  },
  {
    name: "Exams",
    defaultIcon: iconMapping["examsDark"],
    activeIcon: iconMapping["examsLight"],
  },
];

const MenuBar = (props) => {
  const { isCollapsed, setIsCollapsed } = props;
  const [isHovered, setIsHovered] = useState({});

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        padding: "24px 20px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 16px 0px #EAEDEB",
        position: "relative",
        zIndex: 0,
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "1px",
          height: "100%",
          backgroundColor: "#EAEDEB",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "3px",
            alignSelf: "stretch",
          }}
        >
          <Link
            href="#"
            style={{
              textDecoration: "none",
              marginRight: "29.48px",
            }}
          >
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
        </Box>
        {/* Divider */}
        <Box>
          <Divider
            orientation="horizontal"
            sx={{
              borderWidth: "1px",
              borderColor: "#EAEDEB",
              alignSelf: "stretch",
            }}
          />
        </Box>
        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          {menuItems.map((item, index) => (
            <Link key={index} href="#" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    padding: "12px",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                    borderRadius: "16px",
                    backgroundColor: index === 0 ? "#212121" : "transparent",
                    color: index === 0 ? "#FFFFFF" : "#484B48",
                    transition: "background-color 0.1s, color 0.1s",
                    "&:hover": {
                      backgroundColor: "#212121",
                      color: "#FFFFFF",
                    },
                  }}
                  onMouseEnter={() => setIsHovered({ [index]: true })}
                  onMouseLeave={() => setIsHovered({ [index]: false })}
                >
                  <Image
                    src={isHovered[index] ? item.activeIcon : item.defaultIcon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "100%",
                      letterSpacing: "-1.9%",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      {/* Sidebar Collapse Button */}
      <IconButton
        sx={{
          backgroundColor: "#EAEDEB",
          padding: "6px",
          boxSizing: "border-box",
          borderRadius: "999px",
          position: "absolute",
          top: "24px",
          right: 0,
          transform: "translateX(50%)",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "#EAEDEB",
          },
        }}
        onClick={handleCollapse}
      >
        <Image
          src={iconMapping["collapse"]}
          alt="Collapse"
          width={20}
          height={20}
          style={{
            transition: "transform 0.3s",
            transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default MenuBar;
