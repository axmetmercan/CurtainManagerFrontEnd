import React, { useEffect, useState } from 'react'
import TrackOrderComponenet from '../components/OrdersComponent/TrackOrderComponenet';

const OrderTrack = () => {

    const [id, setId] = useState(null);
    const [firmaId, setfirmaId] = useState(null);
    const [isHidden, setHidden] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        setId(e.target.id.value)
        setfirmaId(e.target.firmaId.value)
        setHidden(!isHidden)
    }

    return (
        <div className='container container-fluid border rounded-3 d-flex flex-column justify-content-center align-items-center p-2 ' style={{ minHeight: "700px" }}>
            <div hidden={isHidden} >
                <form onSubmit={onSubmit} style={{width:"500px"}} className='form form-control m-5 p-3 d-flex align-items-center flex-column'>
                    <p className='text-center display-6 py-3'>Sipariş Durumu Sorgulama</p>

                    <label>FirmaId:</label>
                    <input className='form form-control  py-2 my-2' placeholder="Firma ID" name='firmaId'></input>
                    <label>Sipariş Id:</label>
                    <input className='form form-control  py-2 my-2' name='id' placeholder="Sipariş ID"></input>
                    <button className='btn btn-warning py-2 my-2' type='submit'>Sorgula</button>
                </form>
            </div>

            <TrackOrderComponenet isHidden={!isHidden} firmaId={firmaId} id={id}></TrackOrderComponenet>
        </div>
    )
}

export default OrderTrack
