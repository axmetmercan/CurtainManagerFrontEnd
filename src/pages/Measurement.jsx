import React from 'react'
import MeasurementCard from '../components/MeasurementCard/MeasurementCard'
import WindowsCard from '../components/WindowsComponent/WindowsCard'
import alertify from 'alertifyjs';


const Measurement = () => {
  return (
    <div className='container container-fluid card shadow border rounded-3 p-3'>
      <div className="mx-auto">

        <p className='text text-center display-6'>Measurements</p>
        <hr />
        <MeasurementCard></MeasurementCard>
      </div>


      <div className="   p-3 mt-3 ">
        <hr className='my-4'></hr>
        <div className="d-flex justify-content-around align-items-center flex-wrap">


          <WindowsCard />
          <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard /> <WindowsCard />

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
