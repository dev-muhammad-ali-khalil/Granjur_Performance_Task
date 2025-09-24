"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from './components/Sidebar/Sidebar';
import MainArea from "./components/MainArea/MainArea";
import theme from "./utils/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}