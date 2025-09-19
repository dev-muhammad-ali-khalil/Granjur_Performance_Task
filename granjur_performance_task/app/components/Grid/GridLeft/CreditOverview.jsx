import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { iconMapping } from "../../../utils/mapping";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const subjects = [
  {
    name: "Aqidah",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 12,
  },
  {
    name: "Fiqh",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 12,
  },
  {
    name: "Humanities",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 18,
  },
  {
    name: "Qur’an",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 10,
  },
  {
    name: "History",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 18,
  },
  {
    name: "Hadith",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 10,
  },
  {
    name: "Murabbi",
    creditsConsumed: 3,
    totalCredits: 12,
    courses: 8,
  },
];

const CreditOverview = () => {
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
          gap: "20px",
        }}
      >
        {/* ----- Header ----- */}
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
              src={iconMapping["creditOverview"]}
              alt="Credit Overview"
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
            Credit Overview
          </Typography>
        </Box>
        {/* Body */}
        <Grid container spacing="12px">
          {subjects.map((item, index) => (
            <Grid key={index} size={3}>
              <Box
                sx={{
                  backgroundColor: "#F5F6F5",
                  borderRadius: "12px",
                  padding: "12px 12px 16px 12px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    color: "#2B2B2B",
                    fontSize: "14px",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-1.4%",
                  }}
                >
                  {item.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "end",
                      gap: "4px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#944BF6",
                          fontSize: "24px",
                          fontFamily: "Kumbh Sans, sans-serif",
                          fontWeight: 600,
                          lineHeight: "24px",
                          letterSpacing: "-1.9%",
                          display: "inline-block",
                        }}
                      >
                        {item.creditsConsumed}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#2B2B2B",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "24px",
                          letterSpacing: "0.6%",
                          display: "inline-block",
                        }}
                      >
                        /{item.totalCredits}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#8B8C8B",
                        fontSize: "12px",
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontWeight: 400,
                        lineHeight: "16px",
                        letterSpacing: "0%",
                        marginBottom: "2.9px",
                      }}
                    >
                      Credits
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    padding: "2px 6px",
                    borderRadius: "999px",
                    width: "fit-content",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2B2B2B",
                      fontSize: "12px",
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontWeight: 500,
                      lineHeight: "16px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.courses} Courses
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditOverview;
