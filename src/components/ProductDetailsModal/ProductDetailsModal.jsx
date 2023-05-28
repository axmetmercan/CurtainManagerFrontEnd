import React, { useState, useContext } from 'react'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ProductsDetailsModal.css"
import Lottie from "lottie-react";
import animationData from "../../assets/lf20_huqjfxsr.json";
import alertify from 'alertifyjs';
import AuthContext from '../../context/AuthContext';



const ProductDetailsModal = ({ openModal, closeModal, product }, props) => {
  if (!openModal)
    return null

  const [modal, setModal] = useState(openModal);
  const {authTokens} = useContext(AuthContext)

  const deleteProduct = () => {
    alertify.confirm("Seçtiğiniz ürün sizden ve tüm bayilerinizden silinecektir. Emin misiniz ?", async () => {
      console.log(product.id)
      let response = await fetch(`http://127.0.0.1:8000/product/products/${product.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access)
        }
      })
      console.log(response)
      if (response.status === 204) {
        alertify.warning('Ürün Silindi')
        window.location.reload(true)

      }
    })

    
  }
  console.log(product)
  return (
    <div>
      <Modal size={"lg"} centered={true} isOpen={modal}  >
        <p className='closeButton d-flex align-self-end text-danger pt-3 pe-4 h5 ' onClick={closeModal}>x</p>

        <ModalHeader className='text-uppercase d-flex justify-content-center'>{product.code}</ModalHeader>
        <p className='d-flex justify-content-center text-uppercase text-muted mt-4 text h6 container container-fluid '>{product.brand_company}</p>
        <hr></hr>

        <ModalBody className='row p-4'>
          <div className=" col-4">
            <img src={product.img1.pic_url} style={{ "width": "250px", "height": "400px" }} className='img-fluid border border-warning rounded-4 shadow ' ></img>
          </div>
          <div className=" rounded-3 col-8 shadow d-flex flex-row py-2">


            <div className='col-6  d-flex flex-column justify-content-center px-1'>
              <p className='fs-5 text-center  text pb-2 fw-bolder'>Perde Bilgileri</p>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Marka</p>
                <p className='fs-6 '>{product.brand}</p>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Marka Sahibi</p>
                <p className='fs-6 '>{product.brand_company}</p>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Barkod</p>
                <p className='fs-6 '>{product.code}</p>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Varyant</p>
                <p className='fs-6 '>{product.variant}</p>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Renk</p>
                <p className='fs-6 '>{product.color}</p>
              </div>
              <hr></hr><div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Kategori</p>
                <p className='fs-6 '>{product.category}</p>
              </div>



            </div>
            <div className='col-6  d-flex flex-column justify-content-center px-1'>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Gramaj</p>
                <p className='fs-6 '>{product.weight} gr.</p>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between px-1'>
                <p className='fs-6 fw-bold text-mu'><i className="ri-arrow-right-circle-fill"></i>Renk</p>
                <p className='fs-6 '>{product.color}</p>
              </div>
              <hr></hr>
              <div className='d-flex flex-column align-content-center justify-content-center px-1'>
                <p className='fs-4 fw-bold text-center'><i class="ri-price-tag-3-fill"></i>Fiyat</p>
                <p className='fs-3 text-center text-white bg-dark '>{product.s_price}₺</p>
              </div>
            </div>


          </div>
        </ModalBody>
        <ModalFooter >
         
          <Lottie onClick={deleteProduct} style={{ width: "50px" }} className="delete" animationData={animationData} ></Lottie>

        </ModalFooter>
      </Modal>

    </div>
  )
}

export default ProductDetailsModal
