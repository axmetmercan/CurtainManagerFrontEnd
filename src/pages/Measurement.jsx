import React, { useEffect, useState, useContext } from 'react'
import MeasurementCard from '../components/MeasurementCard/MeasurementCard'
import WindowsCard from '../components/WindowsComponent/WindowsCard'
import alertify from 'alertifyjs';
import AuthContext from "../context/AuthContext"


const Measurement = () => {

  const [mess, setMeasurements] = useState({})
  const [customer, setCustomer] = useState()

  const { authTokens } = useContext(AuthContext)

  useEffect(() => {

    getMeasurements()


  }, [])



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

    } else if (response.statusText === 'Unauthorized') {

      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }
  }

 
 
 
  console.log(mess.measurements)


  // const allMeasurements = measurements.map((item) => {
  //   return <WindowsCard key={item.id} item={item} />;
  
  // })

  const card = mess.measurements?.map((item) => {
    return <WindowsCard key={item.id} item={item} />;
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
      
          {/* <WindowsCard />
          <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> */}

        </div>


      </div>
      <div className="row align-self-center">
        <div className="btn btn-success border rounded-0 py-3 px-5"
          onClick={() => {
            alertify.notify("Sipariş Oluşturuldu", "success")
          }}
        > Sipariş Ver <i class="ri-shopping-cart-2-fill"></i></div>
      </div>


    </div>
  )
}

export default Measurement
