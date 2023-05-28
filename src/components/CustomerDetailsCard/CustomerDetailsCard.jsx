import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'

// 

const CustomerDetailsCard = () => {

  const { authTokens } = useContext(AuthContext)

  const [customer, setCustomer] = useState([])
  const [param, setQueryParam] = useState("")

  useEffect(() => {
    getCustomer();


  }, [])
  const getCustomer = async () => {
    let param = window.location.href;
    param = parseInt(param.split("/").pop())
    setQueryParam(param)

    let response = await fetch(`http://127.0.0.1:8000/customer/customers/${param}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    console.log(response.status)
    if (response.status === 200) {
      setCustomer(data)

    } else if (response.statusText === 'Unauthorized') {

      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }

  }

  return (
    <div className=' border rounded-3 shadow p-3'>
      <p className='text text-center display-6'>Müşteri Bilgileri</p>
      <hr></hr>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nitelik</th>
              <th>Bilgi</th>
            </tr>
          </thead>
          <tbody>


            <tr>
              <th> İsim:</th>
              <td>{customer.name}</td>
            </tr>


            <tr>
              <th>Soyisim:</th>
              <td>{customer.surname}</td>
            </tr>
            <tr>
              <th>Telefon Numaras:</th>
              <td>{customer.phone}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{customer.email}</td>
            </tr>
            <tr>
              <th>TC Kimlik No:</th>
              <td>{customer.tc_no}</td>
            </tr>
            <tr>
              <th>Adres:</th>
              <td>{customer.address}</td>
            </tr>

          </tbody>
        </table>

      </div>


    </div>
  )
}

export default CustomerDetailsCard
