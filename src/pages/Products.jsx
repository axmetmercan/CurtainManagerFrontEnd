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
    
    const [productList, setProducts] = useState([])

    useEffect(()=>{
        getProducts();
    }, [])
    console.log(productList);

    let getProducts = async ()=>{

        let response = await fetch('http://127.0.0.1:8000/product/products/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ String(authTokens.access)
            }
        })
        let data = await response.json()
        
        if (response.status === 200){
            setProducts(data.results)

        }else if (response.statusText === 'Unauthorized'){
            //logoutUser()
            console.log("Ürünler Getirilemedi response 200 dönmedi")
        }
    }
    


    return (
        <div className='container container-fluid' style={{"zIndex":"1"}}>
            <div className="d-flex flex-row justify-content-center flex-wrap pt-5 pb-5">
                {productList.map( (product) => (

                    <ProductCard key={product.id}
                        width={"19rem"}
                        title={product.code}
                        subtitle={product.brand}
                        img={product.img1.pic_url}
                        product = {product}
                    ></ProductCard>


                 ))}

            
            </div>




        </div>
    )
}

export default Products
