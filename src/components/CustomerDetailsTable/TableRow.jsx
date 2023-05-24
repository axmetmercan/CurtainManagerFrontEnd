import React, { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function TableRow(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <tr>
      <th scope="row">{props.item.id}</th>
      <td>{props.item.olcu_ismi}</td>
      <td>{props.item.telefon}</td>
      <td>{props.item.kayit_tarihi}</td>
      <td>{props.item.olcu_durumu}</td>
      <td>
        <Link
          className="btn btn-primary"
          to={`/measurements/${props.item.id}/`}
        >
          Detaylar
        </Link>
      </td>
    </tr>
  );
}
