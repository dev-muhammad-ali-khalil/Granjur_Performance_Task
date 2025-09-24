import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { iconMapping } from "../../../utils/mapping";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const DegreeProgress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "8px 8px 12px 8px", md: "20px 20px 24px 20px" },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        alignSelf: "stretch",
        borderRadius: { xs: "16px", md: "24px" },
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
          alignSelf: { xs: "stretch", md: "unset" },
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
            src={iconMapping["degreeProgress"]}
            alt="Degree Progress"
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
          Degree Progress
        </Typography>
      </Box>
      {/* Body */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-end",
          gap: "20px",
          alignSelf: "stretch",
        }}
      >
        {/* Summary */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { md: "space-between" },
            alignItems: "flex-start",
            flex: { md: "1 0 0" },
            gap: { xs: "12px", md: "20px" },
            alignSelf: { xs: "stretch", md: "unset" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "19px",
              alignSelf: "stretch",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "4px 12px",
                alignItems: "center",
                gap: "2px",
                borderRadius: "999px",
                backgroundColor: "#F5F6F5",
              }}
            >
              <Typography
                sx={{
                  color: "#2B2B2B",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0%",
                }}
              >
                Associate Degree
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", md: "unset" },
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: { md: "12px" },
              alignSelf: "stretch",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "space-between", md: "unset" },
                alignItems: "flex-start",
                gap: { md: "4px" },
                flex: { md: "1 0 0" },
                alignSelf: { xs: "stretch", md: "unset" },
              }}
            >
              <Typography
                sx={{
                  color: "#484B48",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "-0.6%",
                  alignSelf: "stretch",
                }}
              >
                My Credits
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#944BF6",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                    letterSpacing: "-0.6%",
                    display: "inline-block",
                  }}
                >
                  33
                </Typography>
                <Typography
                  sx={{
                    color: "#484B48",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "32px",
                    letterSpacing: "-0.6%",
                    display: "inline-block",
                  }}
                >
                  /60
                </Typography>
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderWidth: "1px",
                borderColor: "#EAEDEB",
                alignSelf: "stretch",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "4px",
                flex: { md: "1 0 0" },
              }}
            >
              <Typography
                sx={{
                  color: "#484B48",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "-0.6%",
                  alignSelf: "stretch",
                }}
              >
                Active Courses
              </Typography>
              <Typography
                sx={{
                  color: "#2B2B2B",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "24px",
                  fontStyle: "mormal",
                  fontWeight: 600,
                  lineHeight: "32px",
                  letterSpacing: "-1.9%",
                }}
              >
                4
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderWidth: "1px",
                borderColor: "#EAEDEB",
                alignSelf: "stretch",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "4px",
                flex: { md: "1 0 0" },
              }}
            >
              <Typography
                sx={{
                  color: "#484B48",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  letterSpacing: "-0.6%",
                  alignSelf: "stretch",
                }}
              >
                Active Exams
              </Typography>
              <Typography
                sx={{
                  color: "#2B2B2B",
                  fontFamily: "Kumbh Sans, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "32px",
                  letterSpacing: "-1.9%",
                }}
              >
                8
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Video */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
          }}
        >
          <Box
            component="img"
            src="/assets/video-thumbnail.png"
            alt="Video Thumbnail"
            sx={{
              width: { xs: "100%", md: "184px" },
              borderRadius: "16px",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              gap: "8px",
              borderRadius: "999px",
              background: {
                xs: "#00000033",
                md: "linear-gradient(0deg, #8B8C8B 0%, #8B8C8B 100%), #8B8C8B",
              },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          >
            <Button
              style={{
                all: "unset",
                display: "flex",
                borderRadius: "999px",
              }}
            >
              <Image
                src={iconMapping["play"]}
                alt="Play"
                width={20}
                height={20}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DegreeProgress;
