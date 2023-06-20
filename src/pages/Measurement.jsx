import React, { useEffect, useState, useContext } from 'react'
import MeasurementCard from '../components/MeasurementCard/MeasurementCard'
import WindowsCard from '../components/WindowsComponent/WindowsCard'
import alertify from 'alertifyjs';
import AuthContext from "../context/AuthContext"
import axios from 'axios';


const Measurement = () => {

  const [mess, setMeasurements] = useState({})
  const [customer, setCustomer] = useState()



  const { authTokens } = useContext(AuthContext)

  useEffect(() => {

    getMeasurements()


  }, [])

  console.log(mess.order_status)


  const getMeasurements = async () => {
    let param = window.location.href;
    param = parseInt(param.split("/").pop())

    let response = await fetch(`http://127.0.0.1:8000/measurement/groups/${param}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    if (response.status === 200) {
      setMeasurements(data)
      console.log(data)

    } else if (response.statusText === 'Unauthorized') {

      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }
  }




  // console.log(mess.measurements)

  const placeOrder = async () => {
    let param = window.location.href;
    param = parseInt(param.split("/").pop())

    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };
    console.log(mess)
    await mess.measurements?.map(async (item) => {

      let request_options = {
        body: {

          "status": "active",
          "measurement": item.id,
          "measurement_group": param,
          "customer": mess.customer,
          "company": mess.company

        }
      }

      console.log(item.id)


      await axios.post(`http://127.0.0.1:8000/orders/customer/details/`, {

        // "status": "Aktif",
        "measurement": item.id,
        "measurement_group": param,
        "customer": mess.customer,
        "company": mess.company,
        "status": "active"

      }, config)
        .then(async(res) => {

          const data = {
            "order_status": true
          }

          await axios.patch(`http://127.0.0.1:8000/measurement/groups/${param}/`, data, config)
          window.location.replace(`http://localhost:5173/orders/${param}`)

        }).catch((err) => { console.log(err) })


    })

    alertify.notify("Sipariş Oluşturuldu", "success")
  }


  const card = mess.measurements?.map((item) => {
    return <WindowsCard key={item.id} item={item} canDelete={true} />;
  });

  return (
    <div className='container container-fluid  shadow border rounded-3 p-3 mb-5'>
      <div className="mx-auto">

        <p className='text text-center display-6'>Ölçüler</p>
        <hr />
        <MeasurementCard></MeasurementCard>
      </div>


      <div className="   p-3 mt-3 ">
        <hr className='my-4'></hr>
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          {card}
        </div>


      </div>

      {mess.order_status === true ? null :
        <div className="row align-self-center">
          <div className="btn btn-success border rounded-0 py-3 px-5"
            onClick={() => {
              placeOrder()
            }}
          > Sipariş Oluştur<i class="ri-shopping-cart-2-fill"></i></div>
        </div>
      }


    </div>
  )
}

export default Measurement
