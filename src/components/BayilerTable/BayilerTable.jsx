import React from "react";
import { useState, useEffect, useContext } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";
import AuthContext from "../../context/AuthContext";
export default function BayilerTable() {

  const {authTokens} = useContext(AuthContext);

  const [dealer, setDealers] = useState([])

  useEffect(()=>{

    getDealers();

  }, [])
  console.log(dealer);

  const getDealers  = async()=>{
    let response = await fetch('http://127.0.0.1:8000/company/dealers/',{
      method:'GET',
      headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+ String(authTokens.access)
      }
  })
  let data = await response.json()
  
  if (response.status === 200){
      setDealers(data.results)

  }else if (response.statusText === 'Unauthorized'){
      //logoutUser()
      console.log("Ürünler Getirilemedi response 200 dönmedi")
  }
  }




  const tableItems = [
    {
      id: 1,
      bayi_adi: "Mercan Perde",
      bayi_yetkili_adi: "Ahmet",
      iletisim_no: "555 555 55 55",
      bayi_address: "cart curt mh.",
    },
    {
      id: 2,
      bayi_adi: "ABC Perde",
      bayi_yetkili_adi: "ABC",
      iletisim_no: "555 555 33 33",
      bayi_address: "x mh.",
    },
    {
      id: 3,
      bayi_adi: "QWE Perde",
      bayi_yetkili_adi: "QWE",
      iletisim_no: "555 555 22 22",
      bayi_address: "y mh.",
    },
    {
      id: 4,
      bayi_adi: "KLM Perde",
      bayi_yetkili_adi: "KLM",
      iletisim_no: "555 555 11 22",
      bayi_address: "z mh.",
    },
  ];

  const TableRowItem = dealer.map((item) => {
    return <TableRow key={item.id} item={item} />;
  });

  // dealer.map((item) => {
  //   console.log(item)
  // })

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
