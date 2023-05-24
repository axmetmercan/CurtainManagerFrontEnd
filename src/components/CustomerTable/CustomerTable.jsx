import React from "react";
import { useState } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";

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

  const TableRowItem = tableItems.map((item) => {
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
            <th>Kayıt Tarihi</th>
            <th>Ölçü Durumu</th>
            <th>Müşteri Detayları</th>
          </tr>
        </thead>
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
