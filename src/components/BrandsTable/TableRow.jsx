import React, {useState, useContext} from 'react'
import { Button } from "reactstrap";
import TableRowDetailsModal from './TableRowDetailsModal';
import Lottie from "lottie-react";
import animationData from "../../assets/lf20_huqjfxsr.json";
import alertify from 'alertifyjs';
import AuthContext from '../../context/AuthContext';


export default function TableRow(props) {

    const {authTokens } = useContext(AuthContext)


    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(true);
    };

    const closeModal = () => {
      setModal(false);
    };

    const deleteBrand = () => {

      alertify.confirm(`Seçtiğiniz marka ${props.item.title} ve altında bulunan ürünler silinecektir. Emin misiniz ?`, async () => {
        console.log(props.item.id)
        let response = await fetch(`http://127.0.0.1:8000/product/brands/${props.item.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
          }
        })
        console.log(response)
        if (response.status === 204) {
          alertify.warning('Bayilik Silindi')
          window.location.reload(true)
  
        }
      })
  
    }

    

  return (
    <tr>
      <th scope="row">{props.item.id}</th>
      <td>{props.item.title}</td>
      <td>{props.item.owner}</td>
      {/* <td>
        <Button color="danger" >
        <Lottie onClick={deleteBrand} style={{ width: "30px" }} className="delete" animationData={animationData} ></Lottie>
        </Button>
      </td> */}
      <TableRowDetailsModal
        // openModal={modal}
        // closeModal={closeModal}
      ></TableRowDetailsModal>
    </tr>
  );
}
