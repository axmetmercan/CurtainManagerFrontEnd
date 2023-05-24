import React from "react";
import BayilerTable from "../components/BayilerTable/BayilerTable";
import OneInputFieldComponent from "../components/OneInputFieldComponent/OneInputFieldComponent";

const Dealers = () => {
  return (
    <div className="container container-fluid p-3 shadow border rounded-3 ">
      <p className="h3 text-center m-4">Bayiler Sayfası</p>
      <OneInputFieldComponent
        title={"Baslik"}
        button_title={"Bayi Ekle"}
        placeholder={"#Bayi Idsi giriniz"}
        // id = {"id"}
        // type={"input type"}
      ></OneInputFieldComponent>
      <BayilerTable></BayilerTable>
    </div>
  );
};

export default Dealers;
