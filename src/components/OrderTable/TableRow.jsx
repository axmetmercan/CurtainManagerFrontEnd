import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function TableRow(props) {



  return (
    <tr>
      <th scope="row">asdsa {props.item.customer}</th>
      <td>{props.measurement_group}</td>
      <td>{props.created_date
}</td>


      
    </tr>
  );
}
