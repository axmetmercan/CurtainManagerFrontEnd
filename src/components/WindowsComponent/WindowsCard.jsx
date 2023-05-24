import React from 'react'
import "./WindowsCard.css";

import alertify from 'alertifyjs';

const WindowsCard = () => {
    return (
        <div className='card border rounded-3 shadow p-2 windows-card-size align-items-start m-2'>
            <div className="row border rounded-3 img-size align-self-center mt-2 ">
                <img className='img img-fluid'alt='window-image' src='../images/profile-pic.jpg'></img>

            </div>
            <div className="ms-3 py-2 fw-bold border-bottom"><i class="ri-layout-grid-line"></i> Oda Adı:</div>

            <div className="ms-3 py-2 fw-bold border-bottom"><i class="ri-layout-grid-line"></i> Perde Tipi:</div>
            <div className="ms-3 py-2 fw-bold border-bottom"> <i class="ri-layout-grid-line"></i>En:</div>
            <div className="ms-3 py-2 fw-bold border-bottom"> <i class="ri-layout-grid-line"></i>Boy:</div>
            <div className="ms-3 py-2 fw-bold border-bottom"><i class="ri-layout-grid-line"></i>Ürün Kodu:</div>
            <div className="ms-3 py-2 fw-bold border-bottom"><i class="ri-booklet-line"></i>Ölçü notu:</div>
            <div className="ms-3 py-2 fw-bold border-bottom"><i class="ri-price-tag-3-fill"></i>Bireysel Fiyat:</div>
            <div className="btn btn-danger rounded-0 ms-auto me-auto ps-5 pe-5 my-2 shadow" onClick={() => { alertify.notify("Ölçü Başarıyla Silindi", "error", 5) }}>Ölçüyü Sil <i class="ri-delete-bin-fill"></i> </div>

        </div>
    )
}

export default WindowsCard
