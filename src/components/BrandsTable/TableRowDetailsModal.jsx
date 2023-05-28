import alertify from "alertifyjs";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./TableRowDetailsModal.css";


const TableRowDetailsModal = ({ openModal, closeModal }, props) => {
  if (!openModal) return null;

  const [modal, setModal] = useState(openModal);


  return (
    <div>
      <Modal size={"lg"} centered={true} isOpen={modal}>
        <p
          className="closeButton d-flex align-self-end text-danger pt-3 pe-4 h5 "
          onClick={closeModal}
        >
          x
        </p>

        <ModalHeader className="text-uppercase">asdasd</ModalHeader>
        <p className="text-uppercase text-muted mt-4 text h6 container container-fluid ">
          Subtitle
        </p>
        <hr></hr>

        <ModalBody className="row p-4">
          <div className=" col-4">
            <img
              src="images/profile-pic.jpg"
              className="img-fluid border border-warning rounded-4 shadow "
            ></img>
          </div>
          <div className=" border border-success rounded-3 col-8 shadow ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              perferendis quod praesentium consequatur maxime aliquam, natus cum
              nulla quidem, autem tempore sequi beatae aperiam, rerum inventore
              eveniet molestias! Atque, architecto.
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TableRowDetailsModal;
