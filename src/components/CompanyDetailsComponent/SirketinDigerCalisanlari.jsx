import React from 'react'
import Table from "react-bootstrap/Table";

const SirketinDigerCalisanlari = () => {
  return (
    <div>
      <div className="form-header">Şirketin Diğer Çalışanları</div>
      <Table hover>
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
            <th>Güncellendi</th>
            <th>Son Giriş</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
            <td>@</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SirketinDigerCalisanlari
