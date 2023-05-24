import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"



export default function Footer(){
    return(
        <div className="bg bg-light d-flex flex-column text-muted mt-5">
            <div className="list-group d-flex flex-row justify-content-center pt-5">
                
                <Link to="/" className="ms-3 me-3 text-muted  nav-link">Anasayfa</Link>
                <Link to="/about" className="ms-3 me-3 text-muted  nav-link">Hakkımızda</Link>
                <Link to="/iletisim" className="ms-3 me-3 text-muted nav-link">İletişim</Link>

            </div>
            <hr className="hrline align-self-center"></hr>
            <p className="pb-3 pt-3 align-self-center">© 2022 Company, Inc</p>
        </div>
    )
}