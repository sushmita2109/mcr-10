import Box from "@mui/material/Box";
import { SideBar } from "../Components/SideBar";
import { Departmentcard } from "../Components/Departmentcard";
export const Department = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar />
      <Departmentcard />
    </Box>
  );
};
