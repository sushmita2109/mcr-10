import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { useInventory } from "../Context/inventoryContext";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const ProductDetail = () => {
  const { productName } = useParams();
  const { inventoryStates } = useInventory();
  const filteredData = inventoryStates?.allinventory?.find((product) =>
    product.name.includes(productName)
  );

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={filteredData.imageUrl}
          title="green iguana"
        ></CardMedia>
        <CardContent>
          Name: {filteredData.name}
          Stock:{filteredData.stock}
          Price:{filteredData.price}
          Description:{filteredData.description}
        </CardContent>
      </Card>
    </Box>
  );
};
