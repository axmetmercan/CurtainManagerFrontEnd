import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const Products = () => {

    const products = [
        {
            id: 1,
            title: "Product1",
            subtitle: "Subtitle1",
            img: "images/profile-pic.jpg"
        },
        {
            id: 2,
            title: "Product2",
            subtitle: "Subtitle2",
            img: "images/profile-pic.jpg"
        },
        {
            id: 3,
            title: "Product3",
            subtitle: "Subtitle3",
            img: "images/profile-pic.jpg"
        },
        {
            id: 4,
            title: "Product4",
            subtitle: "Subtitle4",
            img: "images/profile-pic.jpg"
        },
        {
            id: 5,
            title: "Product5",
            subtitle: "Subtitle5",
            img: "images/profile-pic.jpg"
        },
    ]


    return (
        <div className='container container-fluid'>
            <div className="d-flex flex-row justify-content-center flex-wrap pt-5 pb-5">
                {products.map( (product, index) => (

                    <ProductCard key={index}
                        width={"19rem"}
                        title={product.title}
                        subtitle={product.subtitle}
                        img={product.img}
                    ></ProductCard>


                ))}

            </div>



            {/* <ProductCard
                width={"17rem"}
                title={"Example Product"}
                subtitle={"Deneme Subtitle"}
                img={"images/profile-pic.jpg"}
            ></ProductCard> */}


        </div>
    )
}

export default Products
