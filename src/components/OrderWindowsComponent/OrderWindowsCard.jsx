import React, { useState, useEffect } from "react";
import "./OrderWindowsCard.css";

import alertify from "alertifyjs";

const OrderWindowsCard = () => {
  const [orderStatus, setOrderStatus] = useState("Sipariş Alındı");

  React.useEffect(() => {}, [orderStatus]);

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

  return (
    <div className="d-flex">
      <div className="card border rounded-3 shadow p-2 windows-card-size align-items-start m-2 d-flex">
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
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="btn btn-dark  mt-2">
          Anlık Sipariş Durumu: {orderStatus}
        </div>
        <div className="d-flex flex-column flex-grow-1 buttons">
          <div
            onClick={() => changeStatus("Onaylandı")}
            className={`btn btn-danger
             mt-1 mb-1 flex-grow-1 `}
          >
            Onaylandı
          </div>
          <div
            onClick={() => changeStatus("Hazırlanıyor")}
            className={`btn btn-danger mt-1 mb-1 flex-grow-1`}
          >
            Hazırlanıyor
          </div>
          <div
            onClick={() => changeStatus("Dikimde")}
            className="btn btn-danger mt-1 mb-1 flex-grow-1"
          >
            Dikimde
          </div>
          <div
            onClick={() => changeStatus("Kontrolde")}
            className="btn btn-danger mt-1 mb-1 flex-grow-1"
          >
            Kontrolde
          </div>
          <div
            onClick={() => changeStatus("Teslime Hazır")}
            className="btn btn-danger mt-1 mb-1 flex-grow-1"
          >
            Teslime Hazır
          </div>
          <div
            onClick={() => changeStatus("Teslim Edildi")}
            className="btn btn-danger mt-1 mb-1 flex-grow-1"
          >
            Teslim Edildi
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderWindowsCard;
