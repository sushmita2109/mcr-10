import { LandingPage } from "../Components/LandingPage";
import { SideBar } from "../Components/SideBar";
import Box from "@mui/material/Box";

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar />
      <LandingPage />
    </Box>
  );
};
