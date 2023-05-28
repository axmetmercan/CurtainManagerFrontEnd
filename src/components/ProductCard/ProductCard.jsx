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
    console.log(props.product)


    return (
        <div className='p-2'>
            <Card className='border rounded-2 shadow' style={{ width: width }}>

                <img src={props.img} onClick={toggleModal} style={{"width":"250px", "height":"400px"}} className="py-3  img-fluid rounded mx-auto my-auto d-block pointerCursor img-size" alt='perde-fotografi '></img>

                <CardHeader onClick={toggleModal}>
                    <p className='text-center text-dark h6' >{props.title}</p>
                </CardHeader>

                <CardBody>
                    <CardSubtitle className='text-center text-muted'>{props.subtitle}</CardSubtitle>
                    <hr></hr>
                    <div className="bg-success text-center text-dark h5 pt-2 pb-2 rounded-1" >{props.product.s_price} ₺</div>
                </CardBody>
            </Card>


            <ProductDetailsModal 
                openModal={modal} 
                closeModal={closeModal} 
                product = {props.product}
                
            >

            </ProductDetailsModal>
  


        </div>
    )
}

export default ProductCard
