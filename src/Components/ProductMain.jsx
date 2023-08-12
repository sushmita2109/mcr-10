import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useInventory } from "../Context/inventoryContext";

export const ProductMain = () => {
  const { filteredProducts, inventoryStates } = useInventory();
  console.log(
    "🚀 ~ file: ProductMain.jsx:12 ~ ProductMain ~ inventoryStates:",
    inventoryStates
  );

  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Supplier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <img src={data.imageUrl} alt="imageurl" width="80px" />
                </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>{data.stock}</TableCell>
                <TableCell>{data.supplier}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
