import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { ProductHeader } from "../Components/ProductHeader";
import { ProductMain } from "../Components/ProductMain";

export const DepartmentProduct = () => {
  const { departmentName } = useParams();

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductHeader departmentName={departmentName} />
        <ProductMain />
      </Box>
    </Box>
  );
};
