import React, { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function TableRow(props) {

  return (
    <tr>
      <th scope="row">{props.item.musteri_ismi}</th>
      <td>{props.item.olcu_ismi}</td>
      <td>{props.item.tarih}</td>


      
    </tr>
  );
}
