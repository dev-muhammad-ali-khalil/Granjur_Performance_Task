import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { iconMapping } from "../../utils/mapping";

const Topbar = () => {
  return (
    <Box
      sx={{
        padding: "12px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            padding: "8px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
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
              fontSize: "18px",
              fontFamily: "Kumbh Sans, sans-serif",
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
