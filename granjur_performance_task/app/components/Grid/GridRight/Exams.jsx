"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { iconMapping } from "../../../utils/mapping";
import Image from "next/image";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const upcomingExams = [
  {
    title: "Timeless Expression",
    date: "Wed 14th June, 2023",
    rating: 3,
  },
  {
    title: "Purity of the Heart",
    date: "Wed 14th June, 2023",
    rating: 3,
  },
];

const pastExams = [
  {
    tags: ["In-Person", "Ilm-Fest"],
    title: "Valley of the Seekers",
    date: "Wed 14th June, 2023",
    chartData: [
      {
        name: "filled",
        value: 98,
      },
      {
        name: "remaining",
        value: 2,
      },
    ],
    credits: 3,
  },
  {
    tags: ["On-Demand"],
    title: "Valley of the Seekers",
    date: "Wed 14th June, 2023",
    chartData: [
      {
        name: "filled",
        value: 98,
      },
      {
        name: "remaining",
        value: 2,
      },
    ],
    credits: 3,
  },
];

const COLORS = ["#4CA054", "#EAEDEB"];

const Exams = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "8px 8px 12px 8px", md: "20px 20px 24px 20px" },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
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
              src={iconMapping["examsDark"]}
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
            Exams
          </Typography>
        </Box>
        <Link href="#">
          <Box
            sx={{
              display: "flex",
              padding: "8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              aspectRatio: "1/1",
              borderRadius: "20px",
              backgroundColor: "#E9DBFF",
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
      {/* Body */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              color: "#8B8C8B",
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "16px",
              letterSpacing: "0%",
              alignSelf: "stretch",
            }}
          >
            Upcoming Exam
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row", lg: "column" },
              gap: "12px",
              alignSelf: "stretch",
            }}
          >
            {upcomingExams.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  padding: "12px 12px 16px 12px",
                  alignItems: "center",
                  gap: "8px",
                  flex: { md: "1 0 0", lg: "none" },
                  alignSelf: { xs: "stretch", md: "unset", lg: "stretch" },
                  borderRadius: "12px",
                  backgroundColor: "#F5F6F5",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2B2B2B",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "24px",
                      letterSpacing: "-0.6%",
                      alignSelf: "stretch",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      alignSelf: "stretch",
                    }}
                  >
                    <Image
                      src={iconMapping["calendar"]}
                      alt="Calendar"
                      width={16}
                      height={16}
                    />
                    <Typography
                      sx={{
                        color: "#8B8C8B",
                        fontFamily: "Kumbh Sans, sans-serif",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "16px",
                        letterSpacing: "0%",
                      }}
                    >
                      {item.date}
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
                      color: "#212121",
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "16px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.rating}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              color: "#8B8C8B",
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "16px",
              letterSpacing: "0%",
              alignSelf: "stretch",
            }}
          >
            Past Exam
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row", lg: "column" },
              gap: "12px",
              alignSelf: "stretch",
            }}
          >
            {pastExams.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  padding: "12px 12px 16px 12px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  gap: "12px",
                  flex: { md: "1 0 0", lg: "none" },
                  alignSelf: { xs: "stretch", md: "unset", lg: "stretch" },
                  borderRadius: "12px",
                  backgroundColor: "#F5F6F5",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  {item.tags.map((subItem, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          padding: "2px 6px",
                          alignItems: "center",
                          gap: "2px",
                          borderRadius: "999px",
                          backgroundColor: subItem
                            .toLowerCase()
                            .includes("person")
                            ? "#944BF6"
                            : subItem.toLowerCase().includes("ilm")
                            ? "#EBDEFF"
                            : subItem.toLowerCase().includes("demand")
                            ? "#3267E3"
                            : "#944BF6",
                        }}
                      >
                        <Typography
                          sx={{
                            color: subItem.toLowerCase().includes("person")
                              ? "#FFFFFF"
                              : subItem.toLowerCase().includes("ilm")
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
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                      flex: "1 0 0",
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
                        alignSelf: "stretch",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        alignSelf: "stretch",
                      }}
                    >
                      <Image
                        src={iconMapping["calendar"]}
                        alt="Calendar"
                        width={16}
                        height={16}
                      />
                      <Typography
                        sx={{
                          color: "#8B8C8B",
                          fontFamily: "Kumbh Sans, sans-serif",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "16px",
                          letterSpacing: "0%",
                        }}
                      >
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <ResponsiveContainer width={89} height={50}>
                      <PieChart>
                        <Pie
                          data={item.chartData}
                          startAngle={180}
                          endAngle={0}
                          innerRadius={36}
                          outerRadius={43}
                          dataKey="value"
                          stroke="none"
                          cx="50%"
                          cy="100%"
                        >
                          {item.chartData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    {/* Chart Label */}
                    <Box
                      sx={{
                        marginTop: -2.6,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.chartData.map(
                        (entry, index) =>
                          entry.name.toLowerCase().includes("filled") && (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#2B2B2B",
                                  textAlign: "center",
                                  fontFamily: "Kumbh Sans, sans-serif",
                                  fontSize: "14px",
                                  fontStyle: "normal",
                                  fontWeight: 600,
                                  lineHeight: "16px",
                                  letterSpacing: "0%",
                                }}
                              >
                                {entry.value}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#2B2B2B",
                                  fontFamily: "Kumbh Sans, sans-serif",
                                  fontSize: "10px",
                                  fontStyle: "normal",
                                  fontWeight: 600,
                                  lineHeight: "16px",
                                  letterSpacing: "0%",
                                }}
                              >
                                %
                              </Typography>
                            </Box>
                          )
                      )}
                    </Box>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    borderWidth: "1px",
                    borderColor: "#EAEDEB",
                    alignSelf: "stretch",
                  }}
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
                      {item.credits} Credits
                    </Typography>
                  </Box>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "2px 8px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "20px",
                        backgroundColor: "#E9DBFF",
                      }}
                    >
                      <Image
                        src={iconMapping["speedoMeter"]}
                        alt="SpeedoMeter"
                        width={20}
                        height={20}
                      />
                      <Typography
                        sx={{
                          color: "#944BF6",
                          fontFamily: "Kumbh Sans, sans-serif",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "100%",
                          letterSpacing: "-1.9%",
                        }}
                      >
                        Apply Retake
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Exams;
