import React, {useContext} from 'react'
import NavigationBar from "../components/NavigationBar/NavigationBar"
import Footer from "../components/Footer/Footer"
import TextCard from "../components/TextCard/TextCard"
import "../style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginCard from "../components/LoginCard/LoginCard"
import AuthContext from '../context/AuthContext'

export default function Home() {

  let {user} = useContext(AuthContext);
  return (
    <div>
      <div
        className="d-flex flex-column  justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ width: "80vw" }}
        >
          <TextCard width={"30rem"} />

          {user ? null : <LoginCard width={"30rem"} /> }
          
        </div>
      </div>
    </div>
  )
}
