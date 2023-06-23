import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OrderCardComponent from '../OrderCardComponent/OrderCardComponent'


const TrackOrderComponenet = (props) => {

    const [orders, setOrders] = useState({})
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getOrderDetails();
    }, [ props])

    console.log(orders)
    const getOrderDetails = async () => {
        if (props.id !== null && props.firmaId !== null) {
            const url = `http://127.0.0.1:8000/orders/customer/details/?group=${props.id}&company=${props.firmaId}`
            const res = await axios.get(url)
            // console.log(res)
            let current_total = 0;

            res.data.results?.forEach(element => {
                current_total = current_total + (element.measurement.width / 100 * element.measurement.type * element.measurement.unit_price )
    
            });
            setTotal(current_total)
            console.log("bu çalıştı")
            setOrders(res.data)
        }


    }


    const ordersMap = orders.results?.map((item) => {
        return <OrderCardComponent key={item.id} item={item} />
    })

    return (
        <div hidden={props.isHidden} className="container container-fluid">
            <p className='text-center display-5'>Sipariş Takibi</p>
            {ordersMap}
            <div className='bg-success border p-3 m-3 text-white text-center fs-3'>Toplam Tutar: {total} ₺</div>



        </div>
    )
}

export default TrackOrderComponenet
