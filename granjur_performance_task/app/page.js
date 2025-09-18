import Box from "@mui/material/Box";
import Sidebar from './components/Sidebar/Sidebar';
import MainArea from "./components/MainArea/MainArea";

export default function Home() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sidebar />
      <MainArea />
    </Box>
  );
}