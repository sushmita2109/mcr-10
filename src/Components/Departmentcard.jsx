import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";

export const Departmentcard = () => {
  const departments = ["Kitchen", "  Clothing", "Toys"];
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", padding: "8px", gap: "5px" }}
    >
      {departments?.map((department, idx) => (
        <Card key={idx} sx={{ height: "100px", width: "200px" }}>
          <Typography
            variant="h5"
            gutterBottom
            onClick={() => navigate(`/product/${department}`)}
          >
            {department}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};
