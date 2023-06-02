import React from "react";
import CustomerTable from "../components/CustomerTable/CustomerTable";
import { Button } from "reactstrap";
import MusteriEkleme from "../components/AddCustomerComponent/MusteriEkleme";

const Customers = () => {
  return (
    <div>
      <div className="container container-fluid p-3 shadow border rounded-3 mb-5">
        <div className="d-flex justify-content-center mt-3">
          <MusteriEkleme></MusteriEkleme>
        </div>

        <p className="display-6 text-center m-4">Müşteriler Sayfası</p>

        <CustomerTable></CustomerTable>
      </div>
    </div>
  );
};

export default Customers;
