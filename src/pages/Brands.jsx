import React from 'react'
import BrandsTable from '../components/BrandsTable/BrandsTable';
import OneInputFieldComponent from '../components/OneInputFieldComponent/OneInputFieldComponent';

const Brands = () => {
  return (
    <div className="container container-fluid p-3 shadow border rounded-3 ">
      <p className="h3 text-center m-4">Brands Sayfası</p>
      <OneInputFieldComponent
        title={"Brands"}
        button_title={"Başlık Ekle"}
        placeholder={"Başlık Id'si Giriniz"}
        // id = {"id"}
        // type={"input type"}
      ></OneInputFieldComponent>
      <BrandsTable />
    </div>
  );
}

export default Brands
