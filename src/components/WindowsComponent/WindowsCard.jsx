import React, { useState, useEffect, useContext } from 'react'
import "./WindowsCard.css";
import AuthContext from '../../context/AuthContext';

import alertify from 'alertifyjs';

const WindowsCard = ({ item, canDelete, ...rest }, props) => {

    const { authTokens } = useContext(AuthContext)

    useEffect(() => {
    }, [])

    const deleteProduct = async () => {
        alertify.confirm("Seçtiğiniz ürün ölçüsü silinecektir. Emin misiniz ?", async () => {
            let response = await fetch(`http://127.0.0.1:8000/measurement/measurements/${item.id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            console.log(response)
            if (response.status === 204) {
                alertify.warning('Ürün Silindi')
                window.location.reload(true)

            }
        })

    }

    return (
        <div className="d-flex flex-row  p-3">
            <div className='card  rounded-3 shadow p-2 windows-card-size align-items-start m-2'>
                <div className="row rounded-3 img-size align-self-center mt-2 ">
                    {item.room_pic ? <img className='img img-fluid' alt='window-image' src={item.room_pic}></img> : null}
                </div>



                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th className="ms-3 py-2 fw-bold "><i className="ri-layout-grid-line"></i>
                                Oda Adı:
                            </th>
                            <td className="fs-6 fw-regular">
                                {item.room_name}
                            </td>
                        </tr>
                        <tr>
                            <th className="ms-3 py-2 fw-bold "><i className="ri-layout-grid-line"></i>
                                Perde Tipi:
                            </th>
                            <td className="fs-6 fw-regular">
                                {item.product.category}
                            </td>
                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold"> <i className="ri-layout-grid-line"></i>
                                En:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.width} cm
                            </td>

                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold "> <i className="ri-layout-grid-line"></i>
                                Boy:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.height} cm
                            </td>

                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold"><i className="ri-layout-grid-line"></i>
                                Ürün Kodu:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.product.code}
                            </td>

                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold"><i className="ri-layout-grid-line"></i>
                                Ürün Varyantı:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.product.variant}
                            </td>

                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold"><i className="ri-layout-grid-line"></i>
                                Ürün Rengi:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.product.color}
                            </td>

                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold "><i className="ri-booklet-line"></i>
                                Ölçü notu:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.note ? item.note : "Not Yok"}
                            </td>
                        </tr>
                        <tr >
                            <th className="ms-3 py-2 fw-bold "><i className="ri-price-tag-3-fill"></i>
                                Bireysel Fiyat:

                            </th>
                            <td className="fs-6 fw-regular">
                                {item.product.s_price} ₺
                            </td>
                        </tr>
                        <tr>

                        </tr>

                    </tbody>
                </table>
                {canDelete ? <th className="btn btn-danger rounded-0 ms-auto me-auto ps-5 pe-5 my-2 shadow" onClick={deleteProduct}>

                    Ölçüyü Sil <i className="ri-delete-bin-fill"></i>
                </th>
                    : null}
            </div>


            {canDelete ? null :
            <div className="d-flex flex-column justify-content-between">
                <div className="btn btn-dark  mt-2">
                    Anlık Sipariş Durumu:
                </div>
                <div className="d-flex flex-column flex-grow-1 buttons">
                    <div
                        onClick={() => changeStatus("Onaylandı")}
                        className={`btn btn-danger
             mt-1 mb-1 flex-grow-1 `}
                    >
                        Onaylandı
                    </div>
                    <div
                        onClick={() => changeStatus("Hazırlanıyor")}
                        className={`btn btn-danger mt-1 mb-1 flex-grow-1`}
                    >
                        Hazırlanıyor
                    </div>
                    <div
                        onClick={() => changeStatus("Dikimde")}
                        className="btn btn-danger mt-1 mb-1 flex-grow-1"
                    >
                        Dikimde
                    </div>
                    <div
                        onClick={() => changeStatus("Kontrolde")}
                        className="btn btn-danger mt-1 mb-1 flex-grow-1"
                    >
                        Kontrolde
                    </div>
                    <div
                        onClick={() => changeStatus("Teslime Hazır")}
                        className="btn btn-danger mt-1 mb-1 flex-grow-1"
                    >
                        Teslime Hazır
                    </div>
                    <div
                        onClick={() => changeStatus("Teslim Edildi")}
                        className="btn btn-danger mt-1 mb-1 flex-grow-1"
                    >
                        Teslim Edildi
                    </div>
                </div>
            </div>
            }


        </div>
    )
}

export default WindowsCard
