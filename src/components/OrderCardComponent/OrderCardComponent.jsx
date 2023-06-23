import React from 'react'

const OrderCardComponent = (props) => {
    return (
        <div className='border rounded-0 shadow  d-flex flex-row m-4'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Firma</th>
                        <td>{props.item.company} cm</td>

                    </tr><tr>
                        <th>Müşteri</th>
                        <td>{props.item.customer}</td>

                    </tr>
                    <tr>
                        <th>Ölçü Grubu</th>
                        <td>{props.item.measurement.measurement_group}</td>

                    </tr>
                    <tr>
                        <th>En</th>
                        <td>{props.item.measurement.width} cm</td>

                    </tr>
                    <tr>
                        <th>Boy</th>
                        <td>{props.item.measurement.height} cm</td>

                    </tr>
                    <tr>
                        <th>Ürün</th>
                        <td>{props.item.measurement.product.code}</td>


                    </tr>
                    <tr>
                        <th>Marka</th>
                        <td>{props.item.measurement.product.brand}</td>

                    </tr>
                    <tr>
                        <th>Renk</th>
                        <td>{props.item.measurement.product.color}</td>

                    </tr>
                    <tr>
                        <th>Marka</th>
                        <td>{props.item.measurement.product.s_price * props.item.measurement.type * props.item.measurement.width / 100} ₺</td>

                    </tr>
                    <tr className='bg-info'>
                        <th>Durum</th>
                        <td>{props.item.long_status}</td>

                    </tr>
                    {/* 
                
                    <th>Fiyat</th>
                    <td>{}</td>

                </tr>
                <tr>
                    <th>Durumu</th>
                    <td>{}</td>

                </tr>
                <tr>
                    <th>Sipariş Tarihi</th>
                    <td>{}</td> */}


                </thead>
                {/* <tbody>
                <tr>
                   <td></td> 
                </tr>
            </tbody> */}
            </table>

        </div>
    )
}

export default OrderCardComponent
