import React from "react";
import { Table } from "reactstrap";
import "./CompanyDealerOrdersTable.css";

const CompanyDealerOrdersTable = () => {
  return (
    <div className="container mt-5">
      <div class="table-title">
        <div class="table-title-text">Company - Dealer Orders</div>
      </div>
      <Table borderless hover responsive striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sipariş Veren Bayi</th>
            <th>Status</th>
            <th>Oluşturulma Tarihi </th>
            <th>Ürün</th>
            <th>Birim</th>
            <th>Fiyat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Yeni Şirket</td>
            <td>Aktif</td>
            <td>20.06.2023</td>
            <td>Yeni Ürün</td>
            <td>m</td>
            <td>299 ₺</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Deneme Şirket</td>
            <td>Hazırlanıyor</td>
            <td>11.06.2023</td>
            <td>234234</td>
            <td>m2</td>
            <td>689 ₺</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Yeni Şirket</td>
            <td>Tamamlandı</td>
            <td>17.06.2023</td>
            <td>123144</td>
            <td>m</td>
            <td>799 ₺</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CompanyDealerOrdersTable;
