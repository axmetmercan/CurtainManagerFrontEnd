import React, { useEffect, useContext, useState } from "react";
import { Table } from "reactstrap";
import "./CompanyDealerOrdersTable.css";
import AuthContext from "../../context/AuthContext";
import axios from "axios";


const CompanyDealerOrdersTable = () => {

  const [selfOrders, setSelfOrders] = useState({})
  const [allfOrders, setAllOrders] = useState({})
  const [producerOrders, setProducerOrders] = useState({})


  const { user, authTokens } = useContext(AuthContext)

  useEffect(() => {

    getOrders();
  }, [])

  const getOrders = async () => {

    const options = {
      headers: {
        Authorization: `Bearer ${String(authTokens.access)}`
      },
    }

    for (let i = 1; i <= 3; i++) {
      const url = `http://127.0.0.1:8000/orders/dealer/details/?group=${i}`
      const result = await axios.get(url, options);
      if (i === 1) {
        // console.log(result.data)
        setAllOrders(result.data)
      }
      else if (i === 2) {
        // console.log(result.data)
        setProducerOrders(result.data)
      }
      else {
        // console.log(result.data)
        setSelfOrders(result.data)
      }
    }
  }

  const allOrdersMap = allfOrders.results?.map((item) => {
    return <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>{item.dealer_company}</td>
      <td>{item.status}</td>
      <td>{item.created_date}</td>
      <td>{item.product.code}</td>
      <td>{item.unit_type}</td>
      <td>{item.unit}</td>
      <td >{item.unit_price} ₺</td>

      <td className="fw-bolder">{item.unit * item.unit_price} ₺</td>
    </tr>
  })

  const selfOrdersMap = selfOrders.results?.map((item) => {
    return <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>{item.dealer_company}</td>
      <td>{item.status}</td>
      <td>{item.created_date}</td>
      <td>{item.product.code}</td>
      <td>{item.unit_type}</td>
      <td>{item.unit}</td>
      <td >{item.unit_price} ₺</td>

      <td className="fw-bolder">{item.unit * item.unit_price} ₺</td>
    </tr>
  })

  const producerOrdersMap = producerOrders.results?.map((item) => {
    return <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>{item.dealer_company}</td>
      <td>{item.status}</td>
      <td>{item.created_date}</td>
      <td>{item.product.code}</td>
      <td>{item.unit_type}</td>
      <td>{item.unit}</td>
      <td >{item.unit_price} ₺</td>

      <td className="fw-bolder">{item.unit * item.unit_price} ₺</td>
    </tr>
  })
  return (
    <div className="container mt-5">

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Kendi Siparişlerim</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Üretici Olduğum Siparişlerim</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Bayi Siparişlerim</button>
        </li>
      </ul>
      <div className="table-title">
        <div className="table-title-text">Şirket Bayi Siparişleri</div>
      </div>


      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          {allfOrders.count !== 0 ? <Table borderless hover responsive striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sipariş Veren Bayi</th>
                <th>Status</th>
                <th>Oluşturulma Tarihi </th>
                <th>Ürün</th>
                <th>Birim/Tipi</th>
                <th>Birim</th>
                <th>Birim Fiyatı</th>
                <th>Toplam Fiyatı</th>

              </tr>
            </thead>
            <tbody>

              {allOrdersMap}
            </tbody>
          </Table> :<p className="text-center display-4"> Henüz Sipariş Yok</p>}

        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          {producerOrders.count !== 0 ? <Table borderless hover responsive striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sipariş Veren Bayi</th>
                <th>Status</th>
                <th>Oluşturulma Tarihi </th>
                <th>Ürün</th>
                <th>Birim/Tipi</th>
                <th>Birim</th>
                <th>Birim Fiyatı</th>
                <th>Toplam Fiyatı</th>

              </tr>
            </thead>
            <tbody>
              {producerOrdersMap}
            </tbody>
          </Table> : <p className="text-center display-4"> Henüz Sipariş Yok</p>}

        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          {selfOrders.count !== 0 ? <Table borderless hover responsive striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sipariş Veren Bayi</th>
                <th>Status</th>
                <th>Oluşturulma Tarihi </th>
                <th>Ürün</th>
                <th>Birim/Tipi</th>
                <th>Birim</th>
                <th>Birim Fiyatı</th>
                <th>Toplam Fiyatı</th>

              </tr>
            </thead>
            <tbody>
              {selfOrdersMap}
            </tbody>
          </Table> : <p className="text-center display-4"> Henüz Sipariş Yok</p>}

        </div>
      </div>



    </div>
  );
};

export default CompanyDealerOrdersTable;
