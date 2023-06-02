import React, { useContext, useRef, useState, useEffect } from 'react'
import NavigationBar from "../components/NavigationBar/NavigationBar"
import Footer from "../components/Footer/Footer"
import TextCard from "../components/TextCard/TextCard"
import "../style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginCard from "../components/LoginCard/LoginCard"
import AuthContext from '../context/AuthContext'
import Lottie from "lottie-react";
import animationData from "../assets/140710-certain-opening-animation.json";
import animationData1 from "../assets/133076-welcome.json"
import animationData2 from "../assets/127798-bussiness-growth.json"


export default function Home() {

  const [isOpen,setOpen]  = useState("")
  const lottieRef = useRef();

  let { user } = useContext(AuthContext);



  useEffect(() => {
    console.log(user)
    if (user) {
      setOpen(true)
    }




  }, [isOpen])


  return (
    <div>
      {isOpen ? <div
        className="d-flex flex-column  justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ width: "80vw" }}
        >
          {/* <TextCard width={"30rem"} /> */}
          <Lottie animationData={animationData2} style={{"transform":"scale(0.60,0.60"}}></Lottie>

          {user ? null : <LoginCard width={"30rem"} />}

        </div>
      </div> : <div>
          <Lottie loop={0} onComplete={() => {

          }} lottieRef={lottieRef} animationData={animationData} className="" style={{ "width": "150vw", "transform": "translate(-25vw,-40vh)", "zIndex": "999" }}></Lottie>



          <Lottie loop={0} onComplete={() => {
            lottieRef.current.destroy()
            setOpen(true)

          }}  lottieRef={lottieRef} animationData={animationData1} className="" style={{ "position":"sticky", "transform": "translateY(-200vh)", "zIndex": "-999" }}></Lottie>

        </div>}

    </div>
  )
}
