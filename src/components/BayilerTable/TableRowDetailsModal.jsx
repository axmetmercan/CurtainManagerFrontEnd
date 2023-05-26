import alertify from "alertifyjs";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./TableRowDetailsModal.css";

const TableRowDetailsModal = ({ openModal, closeModal, item }, props) => {
  if (!openModal) return null;

  const [modal, setModal] = useState(openModal);

  const addItemCard = () => {
    console.log("sepete eklendi");
    alertify.success("Seçtiğiniz Ürün Sepete Eklendi");
  };

  return (
    <div>
      <Modal size={"lg"} centered={true} isOpen={modal}>
        <p
          className="closeButton d-flex align-self-end text-danger pt-3 pe-4 h5 "
          onClick={closeModal}
        >
          x
        </p>

        <ModalHeader className="text-uppercase">{item.dealer.name}</ModalHeader>
        

        <ModalBody className="row p-4">
          <div className=" col-4">
            <img
              src={item.dealer.tax_document_pic.pic_url}
              className="img-fluid border border-warning rounded-4 shadow "
            ></img>
          </div>
          <div className=" border border-success rounded-3 col-8 shadow ">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex justify-content-between">
                <div>Bayi Adı:</div>
                <div>{item.dealer.name}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Bayi Yetkili Adı:</div>
                <div>{item.dealer.owner_name}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>İletişim No:</div>
                <div>{item.dealer.phone_number}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Adres:</div>
                <div>{item.dealer.address}</div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TableRowDetailsModal;
