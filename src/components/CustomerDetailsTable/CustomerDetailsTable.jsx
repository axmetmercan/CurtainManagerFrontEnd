import React from "react";
import { useState } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";

export default function CustomerDetailsTable
() {
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

  const TableRowItem = tableItems.map((item) => {
    return <TableRow key={item.id} item={item} />;
  });

  return (
    <div className="m-5">
      <Table hover className=" mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ölçü İsmi</th>
            <th>Telefon</th>
            <th>Kayıt Tarihi</th>
            <th>Ölçü Durumu</th>
            <th>Detaylar</th>
          </tr>
        </thead>
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
