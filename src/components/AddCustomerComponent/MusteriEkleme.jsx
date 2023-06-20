import React, { useState, useContext } from "react";
import "./MusteriEkleme.css"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

function MusteriEkleme() {
  const [validated, setValidated] = useState(false);

  const { authTokens } = useContext(AuthContext)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    postCustomerHandler(event);

    setValidated(true);
  };



  const postCustomerHandler = (e) => {
    e.preventDefault();

    console.log(e.target.name.value)
    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };

    const body = {
      // "customer_of": res.id,
      "name": String(e.target.name.value),
      "surname": String(e.target.surname.value),
      "phone": parseInt(e.target.phone.value),
      "email": String(e.target.email.value),
      "address": String(e.target.email.value),
      "tc_no": parseInt(e.target.tc_no.value)
    }


    axios.post(`http://127.0.0.1:8000/customer/customers/`, body, config)
      .then((res) => { console.log(res) }).catch((err) => { console.log(err) })
    console.log(body)

    window.location.reload(true)







  }

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
            <Form.Control required type="text" placeholder="Ad" name="name" />
            <Form.Control.Feedback>Tamamlandı!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Soyad:</Form.Label>
            <Form.Control required type="text" placeholder="Soyad" name="surname" />
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
                name="phone"
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
            <Form.Control type="email" placeholder="E-mail" name="email" required />
            <Form.Control.Feedback type="invalid">
              Lütfen e-mail adresinizi giriniz.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>TC Kimlik No:</Form.Label>
            <Form.Control type="text" placeholder="TC" name="tc_no" required />
            <Form.Control.Feedback type="invalid">
              Lütfen TC kimlik numaranızı giriniz.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Adres: </Form.Label>

            <Form.Control as="textarea" placeholder="Adres" name="address" />
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
