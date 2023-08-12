import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Department } from "./Pages/Department";
import { Product } from "./Pages/Product";
import { HomePage } from "./Pages/HomePage";
import { DepartmentProduct } from "./Pages/DeparmentProduct";
import { ProductDetail } from "./Pages/ProductDetail";

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
        <Route path="/productDetail/:productName" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
