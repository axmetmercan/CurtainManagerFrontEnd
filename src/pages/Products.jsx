import React, {useEffect, useState, useContext} from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import AuthContext from '../context/AuthContext'


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
    let {authTokens, logoutUser} = useContext(AuthContext)
    
    const [productList, setProducts] = useState({})

    useEffect(()=>{
        getProducts()
        console.log("calisti")

    }, [])

    // let getProducts = async ()=>{

    //     let response = await fetch('http://127.0.0.1:8000/product/products/',{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':'Bearer '+ String(authTokens.access)
    //         }
    //     })
    //     let data = await response.json()
        
    //     if (response.status === 200){
    //         console.log(response.status)
    //         return data;

    //     }else if (response.statusText === 'Unauthorized'){
    //         //logoutUser()
    //         console.log("Ürünler Getirilemedi response 200 dönmedi")
    //     }
    // }
    let getProducts =  ()=>{

        let response =  1
        fetch('http://127.0.0.1:8000/product/products/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ String(authTokens.access)
            }
        }).then((response) => response.json())
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
        // let data =  response.json()

        // if (response.status === 200){
        //     console.log(response.status)
        //     return data;

        // }else if (response.statusText === 'Unauthorized'){
        //     //logoutUser()
        //     console.log("Ürünler Getirilemedi response 200 dönmedi")
        // }
    }


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
