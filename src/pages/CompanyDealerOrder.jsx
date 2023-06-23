import React from 'react'
import CompanyDealerOrders from "../components/CompanyDealersOrderComponent/CompanyDealerOrdersTable";
import DealerSelectorComponent from '../components/DealerSelectorComponent/DealerSelectorComponent';
const CompanyDealerOrder = () => {
    return (
        <div className='container container-fluid p-5 my-5 border rounded-2'>
            <p className='display-6 text-center'>Bayi Siparişleri</p>
            <DealerSelectorComponent/>
            <CompanyDealerOrders/>
        </div>
    )
}

export default CompanyDealerOrder
