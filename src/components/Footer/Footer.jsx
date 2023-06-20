import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import Lottie from "lottie-react";
import animationData from "../../assets/84667-background-animation.json";




export default function Footer() {
    return (
        <div style={{"position":"relative", "zIndex":"-1000",  "bottom": "0"}}>

            <Lottie animationData={animationData}
                style={{ "position": "absolute", "bottom": "60px", "left": "0", "right": "0", "zIndex": "-999" }}
            ></Lottie>

            <div className="bg bg-light d-flex flex-column text-muted">

                <div className="list-group d-flex flex-row justify-content-center pt-5">

                    <Link to="/" className="ms-3 me-3 text-muted  nav-link">Anasayfa</Link>
                    <Link to="/about" className="ms-3 me-3 text-muted  nav-link">Hakkımızda</Link>
                    <Link to="/iletisim" className="ms-3 me-3 text-muted nav-link">İletişim</Link>

                </div>
                <hr className="hrline align-self-center"></hr>
                <p className="pb-3 pt-3 align-self-center">© 2023 Dropself Company, Inc</p>
            </div>
        </div>

    )
}