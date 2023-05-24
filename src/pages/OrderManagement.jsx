import React from "react";
import WindowsCard from "../components/WindowsComponent/WindowsCard";
import MeasurementCard from "../components/MeasurementCard/MeasurementCard";
import OrderTable from "../components/OrderTable/OrderTable";
import OrderWindowsCard from "../components/OrderWindowsComponent/OrderWindowsCard";

const OrderManagement = () => {
  return (
    <div className="container container-fluid p-3 shadow border rounded-3 ">
      <OrderTable />
      <hr></hr>

      <OrderWindowsCard />
    </div>
  );
};

export default OrderManagement;
