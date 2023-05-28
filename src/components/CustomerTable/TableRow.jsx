import React, { useState } from "react";
import { Button } from "reactstrap";
import TableRowDetailsModal from "./TableRowDetailsModal";
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
      <td>{props.item.name}</td>
      <td>{props.item.surname}</td>
      <td>{props.item.phone}</td>
      <td>{props.item.email}</td>
      <td>
        <Link className="btn btn-primary" to={`/customers/${props.item.id}`}>
          Detaylar
        </Link>
      </td>

      <TableRowDetailsModal
        openModal={modal}
        closeModal={closeModal}
      ></TableRowDetailsModal>
    </tr>
  );
}
