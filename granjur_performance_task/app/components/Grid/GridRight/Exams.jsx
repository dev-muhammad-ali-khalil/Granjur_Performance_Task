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
            justifyContent: "space-between",
            alignItems: "center",
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
                fontSize: "16px",
                fontFamily: "Kumbh Sans, sans-serif",
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
        {/* Body */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Typography
              sx={{
                color: "#8B8C8B",
                fontSize: "12px",
                fontFamily: "Kumbh Sans, sans-serif",
                fontWeight: 600,
                lineHeight: "16px",
                letterSpacing: "0%",
              }}
            >
              Upcoming Exam
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {upcomingExams.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#F5F6F5",
                    borderRadius: "12px",
                    padding: "12px 12px 16px 12px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#2B2B2B",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
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
                        alignItems: "center",
                        gap: "6px",
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
                          fontSize: "12px",
                          fontFamily: "Kumbh Sans, sans-serif",
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
                      backgroundColor: "#FFFFFF",
                      borderRadius: "999px",
                      border: "0.5px solid #EAEDEB",
                      padding: "2px 6px",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
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
                        fontSize: "12px",
                        fontFamily: "Kumbh Sans, sans-serif",
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
              gap: "12px",
            }}
          >
            <Typography
              sx={{
                color: "#8B8C8B",
                fontSize: "12px",
                fontFamily: "Kumbh Sans, sans-serif",
                fontWeight: 600,
                lineHeight: "16px",
                letterSpacing: "0%",
              }}
            >
              Past Exam
            </Typography>
            {pastExams.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#F5F6F5",
                  borderRadius: "12px",
                  padding: "12px 12px 16px 12px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                  }}
                >
                  {item.tags.map((subItem, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: subItem
                          .toLowerCase()
                          .includes("person")
                          ? "#944BF6"
                          : subItem.toLowerCase().includes("ilm")
                          ? "#EBDEFF"
                          : subItem.toLowerCase().includes("demand")
                          ? "#3267E3"
                          : "#944BF6",
                        padding: "2px 6px",
                        borderRadius: "999px",
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
                          fontSize: "12px",
                          fontFamily: "Kumbh Sans, sans-serif",
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#2B2B2B",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
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
                        alignItems: "center",
                        gap: "6px",
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
                          fontSize: "12px",
                          fontFamily: "Kumbh Sans, sans-serif",
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
                                  fontSize: "14px",
                                  fontFamily: "Kumbh Sans, sans-serif",
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
                                  fontSize: "10px",
                                  fontFamily: "Kumbh Sans, sans-serif",
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
                    color: "#EAEDEB",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "999px",
                      border: "0.5px solid #EAEDEB",
                      padding: "2px 6px",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
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
                        fontSize: "12px",
                        fontFamily: "Kumbh Sans, sans-serif",
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
                        backgroundColor: "#EBDEFF",
                        borderRadius: "20px",
                        padding: "2px 8px",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
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
                          fontSize: "12px",
                          fontFamily: "Kumbh Sans, sans-serif",
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
