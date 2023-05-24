import alertify from 'alertifyjs';
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ProductsDetailsModal.css"

const ProductDetailsModal = ({ openModal, closeModal }, props) => {

  if (!openModal)
    return null

  const [modal, setModal] = useState(openModal);

  const addItemCard =() => {
    console.log("sepete eklendi")
    alertify.success("Seçtiğiniz Ürün Sepete Eklendi");
  } 

  return (
    <div>
      <Modal size={"lg"} centered={true} isOpen={modal}  >
          <p className='closeButton d-flex align-self-end text-danger pt-3 pe-4 h5 ' onClick={closeModal}>x</p>

        <ModalHeader className='text-uppercase'>asdasd</ModalHeader>
        <p className='text-uppercase text-muted mt-4 text h6 container container-fluid '>Subtitle</p>
        <hr></hr>

        <ModalBody className='row p-4'>
          <div className=" col-4">
            <img src="images/profile-pic.jpg" className='img-fluid border border-warning rounded-4 shadow ' ></img>
          </div>
          <div className=" border border-success rounded-3 col-8 shadow ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis quod praesentium consequatur maxime aliquam, natus cum nulla quidem, autem tempore sequi beatae aperiam, rerum inventore eveniet molestias! Atque, architecto.</p>
          </div>
        </ModalBody>
        <ModalFooter >
          <Button color="success" onClick={() => {addItemCard(), closeModal()}} className="align-self-center" >
            Sepete Ekle
          </Button>
        </ModalFooter>
      </Modal>

    </div>  
  )
}

export default ProductDetailsModal
