import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useInventory } from "../Context/inventoryContext";

export const LandingPage = () => {
  const { inventoryStates } = useInventory();
  const totalStock = inventoryStates?.allinventory?.reduce(
    (acc, curr) => curr.stock + acc,
    0
  );

  const totalDelivered = inventoryStates?.allinventory?.reduce(
    (acc, curr) => curr.delivered + acc,
    0
  );

  const lowStockItem = inventoryStates?.allinventory?.reduce(
    (acc, curr) => (curr.stock > 10 ? acc : acc + 1),
    0
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        padding: "8px",
        margin: "2px",
      }}
    >
      <Card sx={{ height: "150px", width: "200px" }}>
        <Typography variant="h4" gutterBottom sx={{ color: "green" }}>
          {totalStock}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Total stock
        </Typography>
      </Card>
      <Card sx={{ height: "150px", width: "200px" }}>
        <Typography variant="h4" gutterBottom sx={{ color: "orange" }}>
          {totalDelivered}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Total Delivered
        </Typography>
      </Card>
      <Card sx={{ height: "150px", width: "200px" }}>
        <Typography variant="h4" gutterBottom sx={{ color: "red" }}>
          {lowStockItem}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Low Stock Item
        </Typography>
      </Card>
    </Box>
  );
};
