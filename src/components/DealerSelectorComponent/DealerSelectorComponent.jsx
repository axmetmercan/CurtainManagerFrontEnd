import React, { useState } from 'react'
import { Label, Form, FormGroup, Input } from 'reactstrap'

const DealerSelectorComponent = () => {
    const [selectedDealer, setDealer] = useState("")


    return (
        <div className=' d-flex flex-row  justify-content-center align-items-center border rounded-2 shadow bg-success'>
            <div className='col'>
                <form>
                    <label className='fw-bold px-3 fs-4' htmlFor="mySelect">Bayi Seçici:</label>
                    <select id="mySelect" value="..." onChange={(e) => {
                        e.preventDefault();
                        setDealer(e.target.value)
                    }}>
                        <option value="0">Lütfen Bayi Seçiniz</option>
                        <option value="1098">Yeni Şirket</option>
                        <option value="Bayi12">Deneme Şirket</option>
                        <option value="Bayi13">afdadsf</option>
                    </select>
                </form>
            </div>

            <div className='col card bg-info text-light shadow text-center p-2'>
                <p className='fs-1'>{selectedDealer} ₺</p>
                <p className='text-light  text-center '>toplam borç</p>
            </div>


        </div>
    )
}

export default DealerSelectorComponent
