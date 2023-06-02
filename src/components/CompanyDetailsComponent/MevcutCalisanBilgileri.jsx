import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const MevcutCalisanBilgileri = () => {
  return (
    <div>
      <div className="form-header">Mevcut Çalışan Bilgileri</div>
      <Form className="mevcut-calisan-bilgileri-form p-4">
        <Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Ad:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Soyad:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formDropdown04">
            <Form.Label>Statü:</Form.Label>
            <Form.Select defaultValue={""} className="mb-3">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Şirket Adı:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Telefon:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>TC Kimlik No:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="validationCustom04">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
              required
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Maaş:</Form.Label>
            <Form.Control
              required
              disabled
              type="text"
              placeholder=""
              className="mb-3"
              value="3500₺"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Oluşturuldu:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Güncellendi:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              defaultValue={""}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Son Giriş:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            className="mb-3"
            defaultValue={""}
          />
        </Form.Group>

        <Button type="submit">Güncelle</Button>
      </Form>
    </div>
  );
}

export default MevcutCalisanBilgileri
