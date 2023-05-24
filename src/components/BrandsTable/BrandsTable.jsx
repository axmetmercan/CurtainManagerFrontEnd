import React from "react";
import { useState } from "react";
import TableRow from "./TableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "reactstrap";

export default function BrandsTable() {
  const tableItems = [
    {
      id: 1,
      baslik_adi: "a",
      olusturma_tarihi: "b",
    },
    {
      id: 2,
      baslik_adi: "c",
      olusturma_tarihi: "d",
    },
    {
      id: 3,
      baslik_adi: "e",
      olusturma_tarihi: "f",
    },
    {
      id: 4,
      baslik_adi: "g",
      olusturma_tarihi: "h",
    },
    {
      id: 5,
      baslik_adi: "i",
      olusturma_tarihi: "j",
    },
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
            <th>Başlık Adı</th>
            <th>Oluşturma Tarihi</th>
            <th>
              Düzenle
            </th>
          </tr>
        </thead>
        <tbody>{TableRowItem}</tbody>
      </Table>
    </div>
  );
}
