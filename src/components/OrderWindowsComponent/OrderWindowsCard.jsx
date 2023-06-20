import React, { useState, useEffect, useContext } from "react";
import "./OrderWindowsCard.css";
import WindowsCard from "../WindowsComponent/WindowsCard";
import axios from "axios";
import AuthContext from "../../context/AuthContext";


import alertify from "alertifyjs";

const OrderWindowsCard = ({ orders, ...rest }, props) => {
  const [orderStatus, setOrderStatus] = useState("Sipariş Alındı");

  const {authTokens} = useContext(AuthContext)

  React.useEffect(() => { }, [orderStatus]);
  function changeStatus(statue) {
    switch (statue) {
      case "Onaylandı":
        setOrderStatus("Onaylandı");
        break;
      case "Hazırlanıyor":
        setOrderStatus("Hazırlanıyor");
        break;
      case "Dikimde":
        setOrderStatus("Dikimde");
        break;
      case "Kontrolde":
        setOrderStatus("Kontrolde");
        break;
      case "Teslime Hazır":
        setOrderStatus("Teslime Hazır");
        break;
      case "Teslim Edildi":
        setOrderStatus("Teslim Edildi");
        break;
    }

  }


  const mesCard = orders.results?.map((item) => {
    return <WindowsCard key={item.measurement.id} item={item.measurement} order_id={item.id} status={item.long_status} canDelete={false}></WindowsCard>
  })


  // const card = orders.results.measurement.map((item) => {
  //   return <WindowsCard key={item.id} item={item} />;
  // });

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {/* <div className="card border rounded-3 shadow p-2 windows-card-size align-items-start m-2 d-flex">
        <div>
          <div className="border rounded-3 img-size align-self-center mt-2 ">
            <img
              className="img img-fluid"
              alt="window-image"
              src="../images/profile-pic.jpg"
            ></img>
          </div>
          <div className="ms-3 py-2 fw-bold border-bottom">
            <i class="ri-layout-grid-line"></i> Oda Adı:
          </div>

          <div className="ms-3 py-2 fw-bold border-bottom">
            <i class="ri-layout-grid-line"></i> Perde Tipi:
          </div>
          <div className="ms-3 py-2 fw-bold border-bottom">
            {" "}
            <i class="ri-layout-grid-line"></i>En:
          </div>
          <div className="ms-3 py-2 fw-bold border-bottom">
            {" "}
            <i class="ri-layout-grid-line"></i>Boy:
          </div>
          <div className="ms-3 py-2 fw-bold border-bottom">
            <i class="ri-layout-grid-line"></i>Ürün Kodu:
          </div>
          <div className="ms-3 py-2 fw-bold border-bottom">
            <i class="ri-booklet-line"></i>Ölçü notu:
          </div>
          <div className="ms-3 py-2 fw-bold border-bottom">
            <i class="ri-price-tag-3-fill"></i>Bireysel Fiyat:
          </div>
          <div
            className="btn btn-danger rounded-0 ms-auto me-auto ps-5 pe-5 my-2 shadow"
            onClick={() => {
              alertify.notify("Ölçü Başarıyla Silindi", "error", 5);
            }}
          >
            Ölçüyü Sil <i class="ri-delete-bin-fill"></i>
          </div>
        </div>
      </div> */}
      {mesCard}

    </div>
  );
};

export default OrderWindowsCard;
