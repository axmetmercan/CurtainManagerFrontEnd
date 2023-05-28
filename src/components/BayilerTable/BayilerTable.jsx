import React from "react";
import { useState, useEffect, useContext } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";
import AuthContext from "../../context/AuthContext";





export default function BayilerTable() {

  const { authTokens } = useContext(AuthContext);

  const [dealer, setDealers] = useState([])

  useEffect(() => {

    getDealers();

  }, [])
  console.log(dealer);

  const getDealers = async () => {
    let response = await fetch('http://127.0.0.1:8000/company/dealers/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setDealers(data.results)

    } else if (response.statusText === 'Unauthorized') {
      //logoutUser()
      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }
  }






  const TableRowItem = dealer.map((item) => {
    return <TableRow key={item.id} item={item} />;
  });

  return (
    <div className="m-5">
      <Table hover className=" mt-3">
        <thead>
          <tr>
            <th>Bayi ID</th>
            <th>Bayi Adı</th>
            <th>Bayi Yetkili Adı</th>
            <th>İletişim No</th>
            <th>Bayi Adresi</th>
            <th>Bayi Detayları</th>
          </tr>
        </thead>
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
