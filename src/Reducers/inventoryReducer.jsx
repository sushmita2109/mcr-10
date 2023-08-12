export const initialState = {
  allinventory: [],
  checkedlowStock: "",
  department: "",
  sortvalue: "",
};
export const inventoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state,
        allinventory: action.payload,
      };
    case "CHECK_LOW_STOCK":
      return {
        ...state,
        checkedlowStock: action.payload,
      };
    case "DEPARTMENT_VARIABLE": {
      return {
        ...state,
        department: action.payload,
      };
    }
    case "SORT_VARIABLE":
      return {
        ...state,
        sortvalue: action.payload,
      };
    case "ADD_NEW_PRODUCT": {
      return {
        ...state,
        allinventory: [...state.allinventory, action.payload],
      };
    }
    case "ADD_TO_LOCAL_STORAGE":
      const updatedInventory = [...state.allinventory];
      localStorage.setItem("allinventory", JSON.stringify(updatedInventory));
      return {
        ...state,
      };
    default:
      return state;
  }
};
