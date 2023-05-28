import React, {useContext, useState, useEffect} from "react";
import BayilerTable from "../components/BayilerTable/BayilerTable";
import OneInputFieldComponent from "../components/OneInputFieldComponent/OneInputFieldComponent";

const Dealers = () => {

  

  return (
    <div className="container container-fluid d-flex flex-column align-items-center justify-content-center mb-5 p-3 shadow border rounded-3 " style={{"height":"70vh"}}>
      <p className="h3 text-center m-4">Bayiler Sayfası</p>
      <OneInputFieldComponent
        title={"Baslik"}
        button_title={"Bayi Ekle"}
        placeholder={"#Bayi Idsi giriniz"}

      ></OneInputFieldComponent>
      <BayilerTable></BayilerTable>
    </div>
  );
};

export default Dealers;
