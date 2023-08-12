import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "8px",
        backgroundColor: "rgb(241 245 249)",
        width: "250px",
        height: "100vh",
      }}
    >
      <Typography variant="body1" gutterBottom onClick={() => navigate("/")}>
        Dashboard
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        onClick={() => navigate("/department")}
      >
        Departments
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        onClick={() => navigate("/product")}
      >
        Products
      </Typography>
    </Box>
  );
};
