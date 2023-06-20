import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const SirketBilgileri = (props) => {

  const { user, authTokens } = useContext(AuthContext);


  const formSubmitHandler = (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };

    const body = {

      "phone_number": parseInt(e.target.phone.value),
      "email": String(e.target.email.value),

    }


    axios.patch(`http://127.0.0.1:8000/company/details/${props.company[0]?.id}/`, body, config)
      .then((res) => { console.log("Kullanıcı Şirket Update Edildi") }).catch((err) => { console.log(err) })

  }


  return (
    <div>
      <div className="form-header">Şirket Bilgileri</div>
      <Form onSubmit={formSubmitHandler} className="sirket-bilgileri-form p-4">
        <Form.Group as={Col} controlId="validationCustom01">
        <p className="fs-5 fw-bolder">Şirket ID: #{props.company[0]?.id}</p>

          <Form.Label>Şirket Adı:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            disabled
            name="name"
            className="mb-3"
            defaultValue={props.company[0]?.name}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Şirket Sahibi İsim:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            disabled
            name="company_owner"
            className="mb-3"
            defaultValue={props.company[0]?.owner_name}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Şirket Sahibi Soyisim:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            disabled
            name="company_owner_surname"
            className="mb-3"
            defaultValue={props.company[0]?.owner_surname}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>TC Kimlik No:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            className="mb-3"
            name="company_tc_no"
            disabled
            defaultValue={props.company[0]?.tax_no}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Telefon:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            name="phone"
            className="mb-3"
            defaultValue={props.company[0]?.phone_number}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            required
            name="email"
            className="mb-3"
            defaultValue={props.company[0]?.email}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Tax No:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            name="tax_no"
            disabled
            className="mb-3"
            defaultValue={props.company[0]?.tax_no}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Tax Municipilaty:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            disabled
            className="mb-3"
            name="tax_municipilaty"
            defaultValue={props.company[0]?.tax_municipilaty}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom06">
          <Form.Label>Adres: </Form.Label>

          <Form.Control
            as="textarea"
            placeholder="Adres"
            name="address"
            disabled
            className="mb-3"
            defaultValue={props.company[0]?.address}
          />
        </Form.Group>
        <a className="fs-4 fw-medium" target="_blank" href={props.company[0]?.tax_document_pic?.pic_url}>
          Vergi Levhasını Göster
        </a>
        <br></br>
        <br></br>
        {
          props.currentUser.type === "admin" ? <Button type="submit">Güncelle</Button>
            : null
        }
      </Form>
    </div>
  );
};

export default SirketBilgileri;
