import React from "react";
import { useState, useContext, useEffect } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";
import AuthContext from "../../context/AuthContext"


export default function CustomerTable
() {
  const tableItems = [
    {
      id: 1,
      isim: "Ahmet",
      soyisim: "AAA",
      kayit_tarihi: "tarih 1",
      olcu_durumu: "ölçü alındı",
    },
    {
      id: 2,
      isim: "Mehmet",
      soyisim: "BBBBB",
      kayit_tarihi: "tarih 2",
      olcu_durumu: "ölçü alınacak",
    },
    {
      id: 3,
      isim: "Ali",
      soyisim: "CCC",
      kayit_tarihi: "tarih 3",
      olcu_durumu: "ölçü alındı",
    },
    {
      id: 4,
      isim: "Veli",
      soyisim: "DDD",
      kayit_tarihi: "tarih 4",
      olcu_durumu: "ölçü alınacak",
    }
  ];


  const {user, authTokens} = useContext(AuthContext)
  const [customers, setCustomers] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(()=>{

    getCustomers();
    setLoading(false)

  }, [])


  const getCustomers = async () =>{
    let response = await fetch('http://127.0.0.1:8000/customer/customers/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setCustomers(data.results)

    } else if (response.statusText === 'Unauthorized') {

      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }

  }


  const TableRowItem = customers.map((item) => {
    return <TableRow key={item.id} item={item} />;
  });

  return (
    <div className="m-5">
      <Table hover className=" mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Telefon Numarası</th>
            <th>Email</th>
            <th>Müşteri Detayları</th>
          </tr>
        </thead>
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
