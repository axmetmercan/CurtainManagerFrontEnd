import React, {useState} from 'react'
import { Button } from "reactstrap";
import TableRowDetailsModal from './TableRowDetailsModal';

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
      <td>{props.item.baslik_adi}</td>
      <td>{props.item.olusturma_tarihi}</td>
      <td>
        <Button color="danger" >
          Sil
        </Button>
      </td>
      <TableRowDetailsModal
        openModal={modal}
        closeModal={closeModal}
      ></TableRowDetailsModal>
    </tr>
  );
}
