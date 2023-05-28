import React from "react";
import CustomerDetailsTable from "../components/CustomerDetailsTable/CustomerDetailsTable";
import CustomerDetailsCard from "../components/CustomerDetailsCard/CustomerDetailsCard";
import OneInputFieldComponent from "../components/OneInputFieldComponent/OneInputFieldComponent";
import { titleize } from "i/lib/methods";
const CustomerDetails = () => {
  return (
    <div className="container container-fluid pb-5">
      <div className="row">
        <div className="shadow border rounded-3 p-3 col-8">
          <p className="h3 text-center m-4">Müşteri Ölçüleri</p>
          <div className="d-flex justify-content-center px-2">
            <OneInputFieldComponent placeholder={"Ölçü Adı"} button_title={"Ölçü Grubu Oluştur"} ></OneInputFieldComponent>

          </div>
          <CustomerDetailsTable  />
        </div>
        <div className="col-4 d-flex align-items-center">
          <CustomerDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
