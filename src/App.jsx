import React from "react";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Products from "./pages/Products";
import NavigationBar2 from "./components/NavigationBar2/NavigationBar2";
import SideBar from "./components/SideBar/SideBar";
import Dealers from "./pages/Dealers";
import Brands from "./pages/Brands";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import Measurement from "./pages/Measurement";
import OrderManagement from "./pages/OrderManagement";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  

  return (
    <div className="App">
      <div className="row">
        <div className={sidebar ? "col-2 pe-0 me-0" : "d-none"}>
          <SideBar sidebar={sidebar} />
        </div>

        <div className={sidebar ? "col-10 ps-0 ms-0 " : "col-12"}>
          <NavigationBar2 openSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/dealers" element={<Dealers></Dealers>}></Route>
            <Route path="/brands" element={<Brands></Brands>}></Route>
            <Route path="/customers" element={<Customers></Customers>}></Route>
            <Route path="/orders" element={<OrderManagement />}></Route>
            <Route
              path="/customers/:id"
              element={<CustomerDetails></CustomerDetails>}
            ></Route>
            <Route path="/measurements/:id" element={<Measurement />}></Route>

            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
