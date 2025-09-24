import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { iconMapping } from "../../utils/mapping";

const Topbar = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#F5F6F5",
        [theme.breakpoints.up("xs")]: {
          padding: "6px 0px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "12px 24px",
        },
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
          gap: { xs: "6px", md: "8px", lg: "16px" },
          flex: { lg: "1 0 0" },
          flexShrink: { md: "0", lg: "unset" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: { lg: "0 12px" },
            alignItems: "center",
            gap: { md: "32px", lg: "8px" },
            alignSelf: { lg: "stretch" },
            flexShrink: { md: "0", lg: "unset" },
          }}
        >
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <Link
              href="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={154}
                height={40}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Image
              src={iconMapping["myDegreeDark"]}
              alt="My Degree"
              width={24}
              height={24}
            />
          </Box>
          <Typography
            sx={{
              color: "#2B2B2B",
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "-1.4%",
              display: { xs: "none", lg: "block" },
            }}
          >
            My Degree
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "flex", lg: "none" },
          justifyContent: "flex-end",
          alignItems: "center",
          gap: { xs: "12px", md: "40px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { md: "12px" },
          }}
        >
          <Button
            sx={{
              all: "unset",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                aspectRatio: "1/1",
                borderRadius: "999px",
                backgroundColor: "#EAEDEB",
              }}
            >
              <Image
                src={iconMapping["hamburger"]}
                alt="Hamburger"
                width={20}
                height={20}
              />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
