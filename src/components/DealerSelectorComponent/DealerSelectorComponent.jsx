import React, { useState, useEffect, useContext } from 'react'
import { Label, Form, FormGroup, Input } from 'reactstrap'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

const DealerSelectorComponent = () => {
    const [dealerList, setDealerList] = useState({})
    const [selectedDealer, setDealer] = useState(0)
    const [companyOrderList, setCompanyOrderList] = useState({})

    const { authTokens } = useContext(AuthContext)


    useEffect(() => {
        getDealers();


        
    }, [])


    const getDealers = async () => {

        const url = "http://127.0.0.1:8000/company/dealers"
        const config = {
            headers: {
                Authorization: `Bearer ${String(authTokens.access)}`
            },
        }

        const res = await axios.get(url, config)
        console.log(res.data)
        setDealerList(res.data)
    }

    const companyOrderDetails = async (e) => {
        const url = `http://127.0.0.1:8000/orders/dealer/details/?dealer=${e.target.value}`
        const config = {
            headers: {
                Authorization: `Bearer ${String(authTokens.access)}`
            },
        }
        const res = await axios.get(url,config)
        // console.log(res.data)
        await setCompanyOrderList(res.data)
        // console.log(e)
        const total  = await calculatePrice(e);
        setDealer(total)


    }

    const calculatePrice = async(e)=>{
        let totalOrder = 0;
        let totalPayment = 0;

        

        companyOrderList.results?.forEach(element => {
            totalOrder = totalOrder + (element.unit * element.unit_price)
            totalPayment = totalPayment + (element.payment)
        });
        let total =  () => {return totalOrder- totalPayment}
        // await setDealer(total)
        return total;
        // console.log(e.target.value)

    }

    const dealerListMap = dealerList.results?.map((item) => {

        return <option key={item.id} value={item.dealer.id}>{item.dealer.name}</option>

    })

    return (
        <div className=' d-flex flex-row  justify-content-center align-items-center border rounded-2 shadow bg-success'>
            <div className='col'>
                <form >
                    <label className='fw-bold px-3 fs-4 ' htmlFor="mySelect">Bayi Seçici:</label>
                    <select id="mySelect" className='form-control' value="..." onChange={(e) => {






                        e.preventDefault();
                        companyOrderDetails(e)







                    }}> <option>Lütfen Bir Bayi Seçin</option>
                        {dealerListMap}
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
