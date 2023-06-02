import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
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
import Profile from "./pages/Profile"
import PrivateRoute from "./utils/PrivateRoute";
import { AuthContextProvider } from "./context/AuthContext";

import Lottie from "lottie-react";


function App() {
  const [sidebar, setSidebar] = useState(false);
  const [isOpen, setOpen] = useState("");







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
          <AuthContextProvider>
            <NavigationBar2 openSidebar={toggleSidebar} />
            <div style={{}}>

              <Routes>
              // Buna dokunma
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
              // Bu public kalıcak.

                <Route path="/products" element={<PrivateRoute> <Products /></PrivateRoute>} />
                <Route path="/dealers" element={<PrivateRoute><Dealers /></PrivateRoute>} />
                <Route path="/brands" element={<PrivateRoute><Brands /></PrivateRoute>} />
                <Route path="/customers" element={<PrivateRoute><Customers /></PrivateRoute>} />
                <Route path="/orders" element={<PrivateRoute><OrderManagement /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/orders/:id" element={<PrivateRoute><OrderManagement /></PrivateRoute>} />
                <Route path="/customers/:id"
                  element={<PrivateRoute><CustomerDetails /></PrivateRoute>} />
                <Route path="/measurements/:id" element={<PrivateRoute><Measurement /></PrivateRoute>} />
                <Route path="/*" element={<NotFound></NotFound>} />



              </Routes>
            </div>


          </AuthContextProvider>
          <Footer />

        </div>
      </div>







    </div>
  );
}

export default App;
