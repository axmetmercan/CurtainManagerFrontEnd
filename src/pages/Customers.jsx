import React from "react";
import CustomerTable from "../components/CustomerTable/CustomerTable";
import { Button } from "reactstrap";

const Customers = () => {
  return (
    <div>
      <div className="container container-fluid p-3 shadow border rounded-3 ">
        <div className="d-flex justify-content-end">
          <Button className="btn btn-success">Müşteri Ekle</Button>
        </div>

        <p className="h3 text-center m-4">Customer Sayfası</p>

        <CustomerTable></CustomerTable>
      </div>
    </div>
  );
};

export default Customers;
