import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle } from 'reactstrap'
import ProductDetailsModal from '../ProductDetailsModal/ProductDetailsModal';
import "./ProductCard.css";

const ProductCard = (props) => {

    const [width, setWith] = useState("18rem");

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(true);
    }
    
    const closeModal =() =>{
        setModal(false);
    }

    const Product = {
        title : "Example Title",
        subtitle: "Example Subtitle",
        img: props.img,
        price:9999,


    }


    return (
        <div className='p-2'>
            <Card className='border rounded-2 shadow' style={{ width: width }}>

                <img src={props.img} onClick={toggleModal} className="  img-fluid rounded mx-auto my-auto d-block pointerCursor img-size" alt='perde-fotografi '></img>

                <CardHeader onClick={toggleModal}>
                    <p className='text-center text-dark h6' >{props.title}</p>
                </CardHeader>

                <CardBody>
                    <CardSubtitle className='text-center text-muted'>Product Alt baslik</CardSubtitle>
                    <hr></hr>
                    <div className="bg-success text-center text-dark h5 pt-2 pb-2 rounded-1" >185 ₺</div>
                </CardBody>
            </Card>


            <ProductDetailsModal 
                openModal={modal} 
                closeModal={closeModal} 
                product = {Product}
                
            >

            </ProductDetailsModal>
  


        </div>
    )
}

export default ProductCard
