import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { iconMapping } from "../../utils/mapping";

const Topbar = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        padding: "12px 16px",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#F5F6F5",
        [theme.breakpoints.up("lg")]: {
          padding: "12px 16px",
        },
        [theme.breakpoints.up("xl")]: {
          padding: "12px 24px",
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flex: "1 0 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "0 12px",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <Image
            src={iconMapping["myDegreeDark"]}
            alt="My Degree"
            width={24}
            height={24}
          />
          <Typography
            sx={{
              color: "#2B2B2B",
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "-1.4%",
            }}
          >
            My Degree
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
