import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const SirketBilgileri = () => {
  return (
    <div>
      <div className="form-header">Şirket Bilgileri</div>
      <Form className="sirket-bilgileri-form p-4">
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
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Şirket Sahibi:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            className="mb-3"
            defaultValue={""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>TC Kimlik No:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            className="mb-3"
            defaultValue={""}
          />
        </Form.Group>
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
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Tax No:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            className="mb-3"
            defaultValue={""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Tax Municipilaty:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            className="mb-3"
            defaultValue={""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom06">
          <Form.Label>Adres: </Form.Label>

          <Form.Control
            as="textarea"
            placeholder="Adres"
            className="mb-3"
            defaultValue={""}
          />
        </Form.Group>
        <a className="fs-4 fw-medium" href="#">
          Vergi Levhasını Göster
        </a>
        <br></br>
        <br></br>
        <Button type="submit">Güncelle</Button>
      </Form>
    </div>
  );
};

export default SirketBilgileri;
