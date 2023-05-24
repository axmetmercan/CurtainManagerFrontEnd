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
      <td>{props.item.bayi_adi}</td>
      <td>{props.item.bayi_yetkili_adi}</td>
      <td>{props.item.iletisim_no}</td>
      <td>{props.item.bayi_address} </td>
      <td>
        <Button color="primary" onClick={toggleModal}>
          Detaylar
        </Button>
      </td>
      <TableRowDetailsModal
        openModal={modal}
        closeModal={closeModal}
        item ={props.item}
        // bayi_adi={"a"}
        // bayi_yetkili_adi={props.item.bayi_yetkili_adi}
        // iletisim_no={props.item.iletisim_no}
        // bayi_address={props.item.bayi_address}
      ></TableRowDetailsModal>
    </tr>
  );
}
