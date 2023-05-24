import React from "react";
import CustomerDetailsTable from "../components/CustomerDetailsTable/CustomerDetailsTable";
import CustomerDetailsCard from "../components/CustomerDetailsCard/CustomerDetailsCard";

const CustomerDetails = () => {
  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="shadow border rounded-3 p-3 col-8">
          <p className="h3 text-center m-4">Müşteri Ölçüleri</p>
          <div className="d-flex justify-content-end">
            <div className="btn btn-success">Müşteri Ekle</div>
          </div>
          <CustomerDetailsTable />
        </div>
        <div className="col-4 d-flex align-items-center">
          <CustomerDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
