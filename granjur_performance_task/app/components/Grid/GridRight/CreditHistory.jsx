"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { iconMapping } from "../../../utils/mapping";
import Image from "next/image";
import Link from "next/link";

const creditListing = [
  {
    source: "/assets/a-heart-serene.png",
    tags: ["Live Virtual"],
    title: "A Heart Serene",
    user: "Suleiman Hani",
    credits: 3,
    subject: "Humanities",
    date: "Dec 31,2024",
  },
  {
    source: "/assets/deception.png",
    tags: ["In-Person", "Double Weekend"],
    title: "Deception",
    user: "Suleiman Hani",
    credits: 3,
    subject: "Humanities",
    date: "Dec 31,2024",
  },
  {
    source: "/assets/tarbiyah.png",
    tags: ["On-Demand"],
    title: "Deception",
    user: "Suleiman Hani",
    credits: 3,
    subject: "Humanities",
    date: "Dec 31,2024",
  },
];

const CreditHistory = () => {
  return (
    <Box
      sx={{
        padding: "20px 20px 24px 20px",
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        boxShadow: "0px 2px 16px 0px #EAEDEB",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
      }}
    >
      {/* ----- Header ----- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          alignSelf: "stretch",
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
              gap: "8px",
            }}
          >
            <Image
              src={iconMapping["starOutline"]}
              alt="Star Outline"
              width={20}
              height={20}
            />
          </Box>
          <Typography
            sx={{
              color: "#2B2B2B",
              textAlign: "center",
              fontSize: "16px",
              fontFamily: "Kumbh Sans, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "24px",
              letterSpacing: "-0.6%",
            }}
          >
            Credit History
          </Typography>
        </Box>
        <Link href="#">
          <Box
            sx={{
              backgroundColor: "#EBDEFF",
              borderRadius: "20px",
              padding: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={iconMapping["arrowRight"]}
              alt="Arrow Right"
              width={16}
              height={16}
            />
          </Box>
        </Link>
      </Box>
      {/* ----- Body ----- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          alignSelf: "stretch",
        }}
      >
        {creditListing.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              padding: "12px 12px 16px 12px",
              alignItems: "flex-end",
              gap: "12px",
              alignSelf: "stretch",
              borderRadius: "12px",
              backgroundColor: "#F5F6F5",
            }}
          >
            <img src={item.source} alt={item.title} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
                flex: "1 0 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {item.tags.map((subItem, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      padding: "2px 6px",
                      alignItems: "center",
                      gap: "2px",
                      borderRadius: "999px",
                      backgroundColor: subItem.toLowerCase().includes("live")
                        ? "#FBBF24"
                        : subItem.toLowerCase().includes("person")
                        ? "#944BF6"
                        : subItem.toLowerCase().includes("weekend")
                        ? "#E9DBFF"
                        : subItem.toLowerCase().includes("demand")
                        ? "#3267E3"
                        : "#944BF6",
                    }}
                  >
                    <Typography
                      sx={{
                        color: subItem.toLowerCase().includes("live")
                          ? "#212121"
                          : subItem.toLowerCase().includes("person")
                          ? "#FFFFFF"
                          : subItem.toLowerCase().includes("weekend")
                          ? "#944BF6"
                          : subItem.toLowerCase().includes("demand")
                          ? "#FFFFFF"
                          : "#FFFFFF",
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "16px",
                        letterSpacing: "0%",
                      }}
                    >
                      {subItem}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2B2B2B",
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "-0.6%",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        padding: "2px 6px",
                        alignItems: "center",
                        gap: "2px",
                        borderRadius: "999px",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <Image
                        src={iconMapping["user"]}
                        alt="User"
                        width={12}
                        height={12}
                      />
                      <Typography
                        sx={{
                          color: "#2B2B2B",
                          fontFamily: "Kumbh Sans, sans-serif",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "16px",
                          letterSpacing: "0%",
                        }}
                      >
                        {item.user}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "2px 6px",
                        alignItems: "center",
                        gap: "2px",
                        borderRadius: "999px",
                        border: "0.5px solid #EAEDEB",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <Image
                        src={iconMapping["star"]}
                        alt="Star"
                        width={12}
                        height={12}
                      />
                      <Typography
                        sx={{
                          color: "#2B2B2B",
                          fontFamily: "Kumbh Sans, sans-serif",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "16px",
                          letterSpacing: "0%",
                        }}
                      >
                        {item.credits}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider
                  orientation="horizontal"
                  sx={{ borderColor: "#EAEDEB" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      padding: "2px 6px",
                      alignItems: "center",
                      gap: "2px",
                      borderRadius: "999px",
                      border: "0.5px solid #EAEDEB",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#2B2B2B",
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "16px",
                        letterSpacing: "0%",
                      }}
                    >
                      {item.subject}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      padding: "2px 6px",
                      alignItems: "center",
                      gap: "2px",
                      borderRadius: "999px",
                      border: "0.5px solid #EAEDEB",
                    }}
                  >
                    <Image
                      src={iconMapping["calendarDark"]}
                      alt="Calendar Dark"
                      width={12}
                      height={12}
                    />
                    <Typography
                      sx={{
                        color: "#2B2B2B",
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "16px",
                        letterSpacing: "0%",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreditHistory;
