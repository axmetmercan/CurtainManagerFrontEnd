import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function TableRow(props) {
  const [modal, setModal] = useState(false);
  const [measuremets ,setMeasurements] = useState([])

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(()=>{
    setMeasurements(props.item);
  },)

  return (
    <tr>
      <th scope="row">{props.item.id}</th>
      <td>{props.item.name}</td>
      {/* <td>{}</td> */}
      <td>{props.item.created_date}</td>
      {/* <td>{props.item.olcu_durumu}</td> */}
      <td>
        <Link
          className="btn btn-primary"
          to={`/measurements/${props.item.id}`}
        >
          Detaylar
        </Link>
      </td>
    </tr>
  );
}
