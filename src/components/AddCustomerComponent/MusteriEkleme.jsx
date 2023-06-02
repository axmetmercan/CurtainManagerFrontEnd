import React, { useState } from "react";
import "./MusteriEkleme.css"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function MusteriEkleme() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="mb-3 ">
      <Form
        className="border shadow-sm rounded-3 p-4"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className=" p-3 rounded-3 display-6 text-center">Müşteri Ekleme Formu</div>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Ad:</Form.Label>
            <Form.Control required type="text" placeholder="Ad" />
            <Form.Control.Feedback>Tamamlandı!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Soyad:</Form.Label>
            <Form.Control required type="text" placeholder="Soyad" />
            <Form.Control.Feedback>Tamamlandı!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Telefon:</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+90</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Telefon"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Lütfen telefon numarnızı giriniz.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control type="email" placeholder="E-mail" required />
            <Form.Control.Feedback type="invalid">
              Lütfen e-mail adresinizi giriniz.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>TC Kimlik No:</Form.Label>
            <Form.Control type="text" placeholder="TC" required />
            <Form.Control.Feedback type="invalid">
              Lütfen TC kimlik numaranızı giriniz.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Adres: </Form.Label>

            <Form.Control as="textarea" placeholder="Adres" />
            <Form.Control.Feedback type="invalid">
              Lütfen adresinizi giriniz.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Müşteri Ekle</Button>
      </Form>
    </div>
  );
}

export default MusteriEkleme
