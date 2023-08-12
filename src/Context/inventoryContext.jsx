import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { inventoryReducer, initialState } from "../Reducers/inventoryReducer";
import { inventoryData } from "../Data/inVentoryData";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventoryStates, inventoryDispatch] = useReducer(
    inventoryReducer,
    initialState
  );
  const getData = () => {
    inventoryDispatch({ type: "GET_ALL_DATA", payload: inventoryData });
  };

  const applyFilter = (data) => {
    const storedInventory = localStorage.getItem("allinventory");
    let filteredData;
    if (storedInventory) {
      const storedData = JSON.parse(storedInventory);
      filteredData = [...storedData];
    } else {
      filteredData = [...data];
    }

    const sortvalue = inventoryStates?.sortvalue;

    const departmentvalue = inventoryStates?.department;

    const checkedlowStock = inventoryStates?.checkedlowStock;

    if (departmentvalue) {
      if (departmentvalue === "All") {
        filteredData = [...data];
      } else {
        filteredData = filteredData?.filter((data) =>
          data.department.includes(departmentvalue)
        );
      }
    }
    if (checkedlowStock) {
      filteredData = filteredData?.filter((data) => data.stock < 10);
    }
    if (sortvalue) {
      if (sortvalue === "name") {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sortvalue === "price") {
        filteredData.sort((a, b) => a.price - b.price);
      }
      if (sortvalue === "stock") {
        filteredData.sort((a, b) => a.stock - b.stock);
      }
    }
    return filteredData;
  };

  const filteredProducts = applyFilter(inventoryStates?.allinventory);

  useEffect(() => {
    getData();
  }, []);
  return (
    <InventoryContext.Provider
      value={{ inventoryStates, inventoryDispatch, filteredProducts }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
