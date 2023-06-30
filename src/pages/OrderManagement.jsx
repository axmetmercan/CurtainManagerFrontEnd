import React, { useState, useEffect, useContext } from "react";
import WindowsCard from "../components/WindowsComponent/WindowsCard";
import MeasurementCard from "../components/MeasurementCard/MeasurementCard";
import OrderTable from "../components/OrderTable/OrderTable";
import OrderWindowsCard from "../components/OrderWindowsComponent/OrderWindowsCard";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import alertify from "alertifyjs";

const OrderManagement = () => {

  const { authTokens, user } = useContext(AuthContext)

  const [isLoading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrdersHandler()


  }, [])

  let cust = {

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
        // console.log(res.data)

      }).catch((err) => { console.log(err) })



  }

  const wholeSaleHandler = async (e) => {
    let dealer = await getCurrentCompany();


    //alertify.confirm("Toptancı Siparişi", "Gerekli ürünlerin sipariş işlemleri gerçekleştiriliecektir. Devam etmek istiyor musunuz ?", () => { alertify.success('Devam Et') }, () => {alertify.error('İptal')})
    
    (orders.results).forEach(element => {
      if (element.measurement.type === 1) {

      }

      const data = {
        "status": "active",
        "unit_type": 1,
        "unit": element.measurement.product.w_price * element.measurement.type,
        "unit_price": element.measurement.product.w_price,
        "payment": 0,
        "product": element.measurement.product.id,
        "dealer_company": dealer,
        "product_company": element.measurement.product.brand_company
      }

      console.log(data)
      postOrder(data);
      

    });


  }


  const getCurrentCompany = async () => {
    const url = `http://127.0.0.1:8000/company/details/`

    const config = {
      headers: {
        Authorization: `Bearer ${String(authTokens.access)}`
      }
    }

    const res = await axios.get(url, config)
    // console.log(res.data[0]?.id)
    return res.data[0]?.id
  }

  const postOrder = async (data) => {
    console.log("set order")

    const url = `http://127.0.0.1:8000/orders/dealer/details/`

    const config = {
      headers: {
        Authorization: `Bearer ${String(authTokens.access)}`
      }
    }

    const respopnse = await axios.post(url, data, config)
    console.log(respopnse.data)
    alertify.success("Sipariş Oluşturuldu")
  }



  return (
    <div className="container container-fluid p-3 shadow border rounded-3 ">
      <p className="display-5 text-center p-4">Sipariş Durumu</p>
      <OrderTable customerData={cust} />
      <div className="col d-flex justify-content-end">
        <div className="btn btn-success" onClick={wholeSaleHandler}>Toptancı Siparişi Oluştur</div>
      </div>
      <hr></hr>

      <OrderWindowsCard orders={orders} />
    </div>
  );
};

export default OrderManagement;
