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
            <i className="ri-home-line"></i>Anasayfa
          </li>
        </Link>

        <Link className="sidebar--links" to={"/products"}>
          <li>
            <i className="ri-store-line"></i>Ürünler
          </li>
        </Link>
        <Link className="sidebar--links" to={"/dealers"}>
          <li>
            <i className="ri-team-line"></i>Bayiler
          </li>
        </Link>
        <Link className="sidebar--links" to={"/brands"}>
          <li>
            <i className="ri-price-tag-3-line"></i>
            Markalar</li>
        </Link>
        <Link className="sidebar--links" to={"/customers"}>
          <li>
            <i className="ri-user-line"></i>Müşteriler</li>
        </Link>

        <Link className="sidebar--links" to={"/orders/dealers"}>
          <li>
            <i className="ri-team-line"></i>Bayi Sipariş Yönetimi</li>
        </Link>
        
        <Link className="sidebar--links" to={"/profile"}>
          <li>
            <i className="ri-user-line"></i>Profil</li>
        </Link>
        <Link className="sidebar--links" to={"/about"}>
          <li>
            <i className="ri-information-line"></i>Hakkımızda
          </li>
        </Link>
      </div>
    </div>
  );
}
