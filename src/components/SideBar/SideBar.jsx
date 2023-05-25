import React from "react";
import "./SideBar.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Customers from "../../pages/Customers";

export default function SideBar(props) {
  return (
    <div className={props.sidebar ? "side-bar sidebar--open" : "side-bar"}>
      <div className="sidebar-items">
        <Link className="sidebar--links" to={"/"}>
          <li>
            <i className="ri-home-line"></i>Home
          </li>
        </Link>
        <Link className="sidebar--links" to={"/about"}>
          <li>
            <i className="ri-information-line"></i>About Us
          </li>
        </Link>
        <Link className="sidebar--links" to={"/products"}>
          <li>
            <i className="ri-store-line"></i>Products
          </li>
        </Link>
        <Link className="sidebar--links" to={"/dealers"}>
          <li>
            <i className="ri-team-line"></i>Dealers
          </li>
        </Link>
        <Link className="sidebar--links" to={"/brands"}>
          <li>Brands</li>
        </Link>
        <Link className="sidebar--links" to={"/customers"}>
          <li>Customers</li>
        </Link>
      </div>
    </div>
  );
}
