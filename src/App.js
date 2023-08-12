import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Department } from "./Pages/Department";
import { Product } from "./Pages/Product";
import { HomePage } from "./Pages/HomePage";
import { DepartmentProduct } from "./Pages/DeparmentProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/department" element={<Department />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:departmentName"
          element={<DepartmentProduct />}
        />
      </Routes>
    </div>
  );
}

export default App;
