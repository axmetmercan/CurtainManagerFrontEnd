import React, { useState, useEffect } from 'react'
import Table from "react-bootstrap/Table";

const SirketinDigerCalisanlari = (props) => {

  const [employees, setEmployees] = useState()

  useEffect(() => {
    setEmployees(props.companyEmployees)
  }, [])



  // console.log(props.companyEmployees.results)
  const employeeRow = props.companyEmployees.results?.map((item) => {
    return <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.type}</td>
      <td>{item.company}</td>
      <td>{item.phone_number}</td>
      <td>{item.tc_number}</td>
      <td>{item.email}</td>
      <td>{item.salary}</td>
      <td>{item.created_at}</td>
      {/* <td>{item.updated_at}</td>
      <td>{item.last_login}</td> */}








    </tr>

  })


  return (
    <div>
      <div className="form-header table-responsive">Şirketin Diğer Çalışanları</div>

      <table hover className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Statü</th>
            <th>Şirket Adı</th>
            <th>Telefon</th>
            <th>TC Kimlik No</th>
            <th>E-mail</th>
            <th>Maaş</th>
            <th>Oluşturuldu</th>
            {/* <th>Güncellendi</th>
            <th>Son Giriş</th> */}
          </tr>
        </thead>

        <tbody>
          <tr>

            <form method="post" action="">
              <td><label>Hello</label>
                <input type="text" name="job_num" />
              </td>

            </form>
          </tr>

          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
          </tr>  */}

          {employeeRow}

        </tbody>
      </table>
    </div>
  );
}

export default SirketinDigerCalisanlari
