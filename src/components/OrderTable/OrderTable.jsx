import React from "react";
import { useState } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";

export default function OrderTable() {
  const tableItems = [
    {

      musteri_ismi: "A Bey",
      olcu_ismi: "cocuk odasi olcusu",
      tarih: "01.01.22",
    },
    {
      musteri_ismi: "B Hanım",
      olcu_ismi: "mutfak olcusu",
      tarih: "02.04.23",
    },
    {
      musteri_ismi: "C Bey",
      olcu_ismi: "Ahmet",
      tarih: "20.03.23",
    },
  ];

  const TableRowItem = tableItems.map((item) => {
    return <TableRow key={item.tarih} item={item} />;
  });

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
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
