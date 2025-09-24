import React from "react";
import Box from "@mui/material/Box";
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
        display: "flex",
        padding: "20px 20px 24px 20px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        alignSelf: "stretch",
        borderRadius: "24px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 16px 0px #EAEDEB",
      }}
    >
      {/* ----- Header ----- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flex: "1 0 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "6px",
              alignItems: "center",
              gap: "8px",
              borderRadius: "12px",
              backgroundColor: "#EAEDEB",
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
              textAlign: "center",
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "-0.6%",
            }}
          >
            Credit Overview
          </Typography>
        </Box>
      </Box>
      {/* Body */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          gap: "12px",
          alignSelf: "stretch",
          flexWrap: "wrap",
        }}
      >
        {subjects.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              width: "128px",
              minWidth: "128px",
              padding: "12px 24px 16px 12px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              borderRadius: "12px",
              backgroundColor: "#F5F6F5",
              boxSizing: "border-box",
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
                letterSpacing: "-1.4%",
                alignSelf: "stretch",
              }}
            >
              {item.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#944BF6",
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "32px",
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
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "0.6%",
                      textTransform: "uppercase",
                      display: "inline-block",
                    }}
                  >
                    /{item.totalCredits}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#8B8C8B",
                    textAlign: "center",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "16px",
                    letterSpacing: "0%",
                    marginBottom: "-9px",
                  }}
                >
                  Credits
                </Typography>
              </Box>
            </Box>
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
                {item.courses} Courses
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreditOverview;
