import React from "react";
import Box from "@mui/material/Box";
import { iconMapping } from "../../../utils/mapping";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const DegreeProgress = () => {
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
              src={iconMapping["degreeProgress"]}
              alt="Degree Progress"
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
            Degree Progress
          </Typography>
        </Box>
        {/* Body */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "12px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#F5F6F5",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  marginTop: "4px",
                }}
              >
                <Typography
                  sx={{
                    color: "#2B2B2B",
                    fontSize: "14px",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: 500,
                    lineHeight: "20px",
                    letterSpacing: "0%",
                  }}
                >
                  Associate Degree
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    color: "#484B48",
                    fontSize: "14px",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-0.6%",
                  }}
                >
                  My Credits
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      color: "#944BF6",
                      fontSize: "24px",
                      fontFamily: "Kumbh Sans, sans-serif",
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
                      fontSize: "14px",
                      fontFamily: "Kumbh Sans, sans-serif",
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
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
              }}
            >
              <Divider
                orientation="vertical"
                sx={{
                  color: "#EAEDEB",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "48px",
                }}
              >
                <Typography
                  sx={{
                    color: "#484B48",
                    fontSize: "14px",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-0.6%",
                    wordWrap: "break-word",
                  }}
                >
                  Active Courses
                </Typography>
                <Typography
                  sx={{
                    color: "#2B2B2B",
                    fontSize: "24px",
                    fontFamily: "Kumbh Sans, sans-serif",
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
                sx={{
                  color: "#EAEDEB",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "48px",
                  marginTop: "24px",
                }}
              >
                <Typography
                  sx={{
                    color: "#484B48",
                    fontSize: "14px",
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "-0.6%",
                    wordWrap: "break-word",
                  }}
                >
                  Active Exams
                </Typography>
                <Typography
                  sx={{
                    color: "#2B2B2B",
                    fontSize: "24px",
                    fontFamily: "Kumbh Sans, sans-serif",
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
          <Box
            sx={{
              marginTop: "4px",
              position: "relative",
            }}
          >
            <img
              src="/assets/video-thumbnail.png"
              alt="Video Thumbnail"
              width="184px"
              height="104px"
              style={{ borderRadius: "16px", objectFit: "cover" }}
            />
            <Box
              style={{
                backgroundColor: "#8B8C8B",
                borderRadius: "999px",
                padding: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            >
              <Image
                src={iconMapping["play"]}
                alt="Play Icon"
                width={20}
                height={20}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DegreeProgress;
