import React, { useState, useEffect, useContext } from "react";
import WindowsCard from "../components/WindowsComponent/WindowsCard";
import MeasurementCard from "../components/MeasurementCard/MeasurementCard";
import OrderTable from "../components/OrderTable/OrderTable";
import OrderWindowsCard from "../components/OrderWindowsComponent/OrderWindowsCard";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const OrderManagement = () => {

  const { authTokens } = useContext(AuthContext)

  const [isLoading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrdersHandler()


  }, [])

  let cust =     {

    musteri_ismi: "A Bey",
    olcu_ismi: "cocuk odasi olcusu",
    tarih: "01.01.22",
  }

  const customerDataList = orders.results?.map((item) => {
    // console.log(item)
    
    cust = {
        customer: item.customer,
        measurement_group: item.measurement_group,
        created_date: item.created_date,
      }

  })



  const getUrlParam = () => {
    let param = window.location.href;
    param = parseInt(param.split("/").pop())

    return param

  }


  const getOrdersHandler = async () => {
    const url = `http://127.0.0.1:8000/orders/customer/details/?group=${getUrlParam()}`
    const options = {
      headers: {
        Authorization: `Bearer ${String(authTokens.access)}`

      },

    }
    await axios.get(url, options)
      .then((res) => {
        // console.log(res.data)
        setOrders(res.data)

      }).catch((err) => { console.log(err) })



  }



  return (
    <div className="container container-fluid p-3 shadow border rounded-3 ">
      <p className="display-5 text-center p-4">Sipariş Durumu</p>
      <OrderTable customerData={cust} />
      <hr></hr>

      <OrderWindowsCard orders={orders} />
    </div>
  );
};

export default OrderManagement;
