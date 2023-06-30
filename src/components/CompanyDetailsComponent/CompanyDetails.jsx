import React, { useState, useContext, useEffect } from "react";
import "./CompanyDetails.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SirketBilgileri from "./SirketBilgileri";
import MevcutCalisanBilgileri from "./MevcutCalisanBilgileri";
import SirketinDigerCalisanlari from "./SirketinDigerCalisanlari";
import axios from 'axios';
import AuthContext from "../../context/AuthContext"
import YeniKullanıcı from "./YeniKullanıcı";

const CompanyDetails = () => {

  const [companyDetail, setCompanyDetail] = useState({})
  const [companyEmployees, setCompanyEmployees] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [employeeTypes, setEmpoyeeTypes] = useState({})




  const { authTokens, user } = useContext(AuthContext)


  useEffect(() => {
    currentCompanyInfo()
    currentCompanyEmployees()
    currentCompanyEmployee()
    employeeTypesHandler()

  }, [])



  const config = {
    headers: { Authorization: `Bearer ${String(authTokens.access)}` }
  };

  //şirket bilgilerini çek

  const currentCompanyInfo = () => {
    axios.get('http://127.0.0.1:8000/company/details/', config)
      .then((res) => {
        setCompanyDetail(res.data)
      }).catch((err) => { console.log(err) })

  }



  //mevcut çalışan bilgilerini çek
  const currentCompanyEmployee = () => {
    axios.get(`http://127.0.0.1:8000/employee/employee/${user.user_id}`, config)
      .then((res) => {
        setCurrentUser(res.data)
      }).catch((err) => { console.log(err) })
  }

  // diğer çalışan bilgilerini çek


  const currentCompanyEmployees = () => {
    axios.get('http://127.0.0.1:8000/employee/employee/', config)
      .then((res) => {
        setCompanyEmployees(res.data)
      }).catch((err) => { console.log(err) })
  }

  const employeeTypesHandler = () => {
    axios.get('http://127.0.0.1:8000/employee/types/', config)
      .then((res) => {
        setEmpoyeeTypes(res.data.results)
      }).catch((err) => { console.log(err) })
  }

  return (
    <div className="p-5 border rounded-3 m-5">
      <p className='text-center display-4'>Şirket Profili</p>
      <hr></hr>
      <Row className="d-flex align-items-center mb-3">
        <Col>
          <SirketBilgileri company={companyDetail} currentUser={currentUser} />
        </Col>
        <Col>
          <MevcutCalisanBilgileri currentUser={currentUser} employeeTypes={employeeTypes} />
        </Col>
      </Row>
      <Row>
  
        <YeniKullanıcı />


      </Row>

      <Row>
        <SirketinDigerCalisanlari companyEmployees={companyEmployees} employeeTypes={employeeTypes} />
      </Row>
    </div>
  );
};

export default CompanyDetails;
