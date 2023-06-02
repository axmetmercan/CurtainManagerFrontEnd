import React from "react";
import { useState, useEffect, } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";

export default function OrderTable(props) {


  useEffect(() => {

  }, [])







  // const TableRowItem = tableItems.map((item) => {
  //   return <TableRow key={item.tarih} item={item} />;  });


  return (
    <div className="m-5">
      <Table hover className=" mt-3">
        <thead>
          <tr>
            <th>Müşteri İsmi</th>
            <th>Ölçü İsmi</th>
            <th>Tarih</th>
          </tr>
        </thead>
        {<tbody>
          <tr>
            <td>{props.customerData.customer}</td>
            <td>{props.customerData.measurement_group}</td>
            <td>{props.customerData.created_date}</td>
          </tr>

        </tbody>}
      </Table>
    </div>
  );
}
