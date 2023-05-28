import alertify from "alertifyjs";
import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./TableRowDetailsModal.css";
import Lottie from "lottie-react";
import animationData from "../../assets/lf20_huqjfxsr.json";
import AuthContext from "../../context/AuthContext";


const TableRowDetailsModal = ({ openModal, closeModal, item }, props) => {

  const { authTokens } = useContext(AuthContext);

  if (!openModal) return null;

  const [modal, setModal] = useState(openModal);


  const deleteDealerShip = () => {

    alertify.confirm("Seçtiğiniz Bayilik silinecektir.", async () => {
      console.log(item.id)
      let response = await fetch(`http://127.0.0.1:8000/company/manage/dealer/${item.id}`, {
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
    <div>
      <Modal size={"lg"} centered={true} isOpen={modal}>
        <p
          className="closeButton d-flex align-self-end text-danger pt-3 pe-4 h5 "
          onClick={closeModal}
        >
          x
        </p>

        <ModalHeader className="text-uppercase d-flex justify-content-center">{item.dealer.name}</ModalHeader>


        <ModalBody className="row p-4">
          <div className=" col-4">
            <img style={{width:"250px", height:"400px",}}
              src={item.dealer.tax_document_pic.pic_url}
              className="img-fluid border border-warning rounded-4 shadow "
            ></img>
          </div>
          <div className=" bg-light rounded-3 col-8 shadow ">

            <div className="d-flex flex-column gap-4">


              <div className="d-flex flex- justify-content-between pt-5">
                <div className="fw-bolder" ><i className="ri-booklet-fill"></i>Bayi Adı:</div>
                <div>{item.dealer.name}</div>
                <div className="bg-dark text-white border-0 p-1 d-flex flex- justify-content-between">
                  <div className="fw-bolder">Bayi Id:</div>
                  <div>#{item.dealer.id}</div>
                </div>
              </div>
              <hr></hr>


              <div className="d-flex justify-content-between ">

                <div className="fw-bolder"><i className="ri-user-2-fill"></i>Bayi Yetkili Adı:</div>
                <div>{item.dealer.owner_name}</div>
                <div className="fw-bolder"> <i className="ri-smartphone-fill"></i>İletişim No:</div>
                <div>{item.dealer.phone_number}</div>
              </div>
              <hr></hr>



              <div className="d-flex justify-content-start ">
                <div className="fw-bolder"><i className="ri-map-pin-fill"></i> Adres: </div>
                <div>{item.dealer.address}</div>
              </div>

            </div>
            <div className='d-flex flex-row-reverse rounded-0 p-2 ' style={{ width: "100%" }}>
              <Lottie onClick={deleteDealerShip} style={{ width: "50px" }} className="delete" animationData={animationData} ></Lottie>
            </div>

          </div>

        </ModalBody>
      </Modal>
    </div>
  );
};

export default TableRowDetailsModal;
