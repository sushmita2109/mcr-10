import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useInventory } from "../Context/inventoryContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export const ProductModal = ({ open, handleClose }) => {
  const departments = ["Kitchen", "  Clothing", "Toys"];
  const [newProduct, setNewProduct] = useState({
    id: uuidv4(),
    department: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: "",
  });
  const { inventoryDispatch } = useInventory();
  const handleSave = () => {
    inventoryDispatch({ type: "ADD_NEW_PRODUCT", payload: newProduct });
    inventoryDispatch({ type: "ADD_TO_LOCAL_STORAGE" });
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Product
        </Typography>
        <TextField
          helperText="Select department"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, department: e.target.value }))
          }
        ></TextField>
        <TextField
          id="outlined-basic-1"
          label="Name"
          variant="outlined"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-2"
          label="Descriprion"
          variant="outlined"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-3"
          label="Price"
          variant="outlined"
          defaultValue="0"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-4"
          label="Stock"
          variant="outlined"
          defaultValue="0"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, stock: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-5"
          label="SKU"
          variant="outlined"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, sku: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-6"
          label="Supplier"
          variant="outlined"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, supplier: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-7"
          label="Delivered"
          variant="outlined"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, delivered: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-8"
          label="ImageUrl"
          variant="outlined"
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
        />
        <Button onClick={() => handleSave()}>Save</Button>
        <Button onClick={() => handleClose()}>Cancel</Button>
      </Box>
    </Modal>
  );
};
