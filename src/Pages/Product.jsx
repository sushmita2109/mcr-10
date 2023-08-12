import Box from "@mui/material/Box";
import { SideBar } from "../Components/SideBar";
import { ProductHeader } from "../Components/ProductHeader";
import { ProductMain } from "../Components/ProductMain";
export const Product = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductHeader departmentName={""} />
        <ProductMain />
      </Box>
    </Box>
  );
};
