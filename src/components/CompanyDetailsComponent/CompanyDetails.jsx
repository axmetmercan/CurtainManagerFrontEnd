import React, { useState } from "react";
import "./CompanyDetails.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SirketBilgileri from "./SirketBilgileri";
import MevcutCalisanBilgileri from "./MevcutCalisanBilgileri";
import SirketinDigerCalisanlari from "./SirketinDigerCalisanlari";

const CompanyDetails = () => {
  return (
    <div className="p-5 border rounded-3 m-5">
      <p className='text-center display-4'>Şirket Profili</p>
<hr></hr>
      <Row className="d-flex align-items-center mb-3">
        <Col>
          <SirketBilgileri />
        </Col>
        <Col>
          <MevcutCalisanBilgileri />
        </Col>
      </Row>
      <Row>
        <SirketinDigerCalisanlari />
      </Row>
    </div>
  );
};

export default CompanyDetails;
