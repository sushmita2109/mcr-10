import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ProductModal } from "./ProductModal";
import { useInventory } from "../Context/inventoryContext";

export const ProductHeader = ({ departmentName }) => {
  const { inventoryDispatch, inventoryStates } = useInventory();
  const [departments, setDepartments] = useState(departmentName);
  const [sortVariable, setSortVariable] = useState("name");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setDepartments(event.target.value);
    inventoryDispatch({
      type: "DEPARTMENT_VARIABLE",
      payload: event.target.value,
    });
  };

  const handleSortVariable = (e) => {
    setSortVariable(e.target.value);
    inventoryDispatch({ type: "SORT_VARIABLE", payload: e.target.value });
  };

  useEffect(() => {
    inventoryDispatch({
      type: "DEPARTMENT_VARIABLE",
      payload: departments,
    });
    inventoryDispatch({ type: "SORT_VARIABLE", payload: sortVariable });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "10vh",
        justifyContent: "space-between",
        margin: "5px",
      }}
    >
      <Typography variant="body1">Products</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Departments</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={departments}
          label="Departments"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All Departments</MenuItem>
          <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
          <MenuItem value={"Clothing"}>Clothing</MenuItem>
          <MenuItem value={"Toys"}>Toys</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="
Low stock"
          onChange={(e) =>
            inventoryDispatch({
              type: "CHECK_LOW_STOCK",
              payload: e.target.value,
            })
          }
        />
      </FormGroup>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label1">variable</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortVariable}
          label="variable"
          onChange={handleSortVariable}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"price"}>Price</MenuItem>
          <MenuItem value={"stock"}>Stock</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={() => handleOpen()}>New</Button>
      <ProductModal open={open} handleClose={handleClose} />
    </Box>
  );
};
