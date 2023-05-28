import React from "react";
import { useState, useContext, useEffect } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";
import AuthContext from "../../context/AuthContext";


export default function CustomerDetailsTable(props) {
  const tableItems = [
    {
      id: 1,
      olcu_ismi: "a ölçüsü",
      telefon: "588888",
      kayit_tarihi: "tarih 1",
      olcu_durumu: "ölçü alındı",
      detaylar: "detay1",
    },
    {
      id: 2,
      olcu_ismi: "b ölçüsü",
      telefon: "555 555 5555",
      kayit_tarihi: "tarih 2",
      olcu_durumu: "ölçü alındı",
      detaylar: "detay2",
    }
  ];

  const {authTokens} = useContext(AuthContext)

  const [measurements, setMeasurements] = useState([])
  const [loading, isLoading] = useState(true)
  const [queryParam, setQueryParam] = useState()

  useEffect(()=>{

    getMeasurements();
    isLoading(false);

  },[])

  const getMeasurements =async() =>{
    let param = window.location.href;
    param = parseInt(param.split("/").pop())
    setQueryParam(param)

    let response = await fetch(`http://127.0.0.1:8000/measurement/groups?customer_id=${param}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setMeasurements(data.results)

    } else if (response.statusText === 'Unauthorized') {

      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }

  }

  console.log(measurements)




  const TableRowItem = measurements.map((item) => {
    return <TableRow key={item.id} item={item} />;
  });

  return (
    <div className="m-5">
      <Table hover className=" mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ölçü İsmi</th>
            {/* <th>Telefon</th> */}
            <th>Kayıt Tarihi</th>
            {/* <th>Ölçü Durumu</th> */}
            <th>Detaylar</th>
          </tr>
        </thead>
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
