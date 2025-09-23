"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Sidebar from './components/Sidebar/Sidebar';
import MainArea from "./components/MainArea/MainArea";

export default function Home() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexShrink: 0,
        }}
      >
        <Sidebar />
        <MainArea />
      </Box>
    </Container>
  );
}