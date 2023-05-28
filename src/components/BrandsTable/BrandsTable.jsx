import React, { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";
import AuthContext from "../../context/AuthContext";
import Lottie from "lottie-react";
import animationData from "../../assets/84667-background-animation.json";

export default function BrandsTable() {


  const { authTokens } = useContext(AuthContext);

  const [brands, setBrands] = useState([]);

  useEffect(() => {

    getProducts();

  }, []);



  const getProducts = async () => {
    let response = await fetch('http://127.0.0.1:8000/product/brands/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setBrands(data.results)

    } else if (response.statusText === 'Unauthorized') {

      console.log("Ürünler Getirilemedi response 200 dönmedi")
    }


  }



  const TableRowItem = brands.map((item) => {
    return <TableRow key={item.id} item={item} />;
  });

  return (
    <div className="mb-5">
      <div className="m-5"
           style={{"zIndex":"100"}}
        >
        <Table hover className=" mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Başlık Adı</th>
              <th>Marka Sahibi</th>
              <th>
                Sil
              </th>
            </tr>
          </thead>
          <tbody>{TableRowItem}</tbody>
        </Table>
      </div>
      {/* <Lottie animationData={animationData}
        style={{"position":"absolute", "bottom": "50px", "left": "0","right": "0", "zIndex": "-999" }}
      ></Lottie> */}
    </div>

  );
}
