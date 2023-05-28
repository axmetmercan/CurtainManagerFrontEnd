import React from 'react'
import BrandsTable from '../components/BrandsTable/BrandsTable';
import OneInputFieldComponent from '../components/OneInputFieldComponent/OneInputFieldComponent';


const Brands = () => {
  return (
    <div  className='pb-5' >
      <div style={{"zIndex":"1"}} className="container container-fluid p-3 shadow border rounded-3 ">

        <p className="h3 text-center m-4">Brands Sayfası</p>
        <OneInputFieldComponent
          title={"Brands"}
          button_title={"Başlık Ekle"}
          placeholder={"Başlık İsmi Giriniz"}
        // id = {"id"}
        // type={"input type"}
        ></OneInputFieldComponent>
        <BrandsTable />

      </div>
    </div>
  );
}

export default Brands
