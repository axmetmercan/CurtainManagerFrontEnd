import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AuthContext from '../../context/AuthContext';
import { config } from 'localforage';

const MevcutCalisanBilgileri = (props) => {

  const [created, setCreated] = useState()
  const [updated, setUpdated] = useState()
  const [isAdmin, setUser] = useState(false)

  const [last_login, setlastLogin] = useState()

  const { user, authTokens } = useContext(AuthContext)

  useEffect(() => {

    const dateHandler = (dateString) => {

      const date = new Date(dateString);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 since month index is zero-based
      const day = String(date.getDate()).padStart(2, "0");

      const simplifiedDate = `${year}-${month}-${day}`;
      
      return simplifiedDate

    }

    setCreated(dateHandler(props.currentUser.created_at))
    setUpdated(dateHandler(props.currentUser.updated_at))
    setlastLogin(dateHandler(props.currentUser.updated_at))


    if (props.currentUser.type === "admin") {
      setUser(true)
    }
  }, [created])


  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.type.value)
    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };

    const body = {
      
        "type": String(e.target.type.value),
        "name": String(e.target.name.value),
        "surname": String(e.target.surname.value),
        "phone_number": parseInt(e.target.phone.value),
        "email": String(e.target.email.value),
        "tc_number": parseInt(e.target.tc_no.value),
        "salary": parseInt(e.target.salary.value)
  


    }

    axios.put(`http://127.0.0.1:8000/employee/employee/${user.user_id}/`, body , config)
      .then((res) => { console.log("Kullanıcı Update Edildi") }).catch((err) => { console.log(err) })

  }


  const employeeTypesOption = props?.employeeTypes[0] && props?.employeeTypes?.map((item) => {
    return <option key={item.id} value={item.title} >{item.title}</option>
  })


  //  console.log(employeeTypesOption)

  return (
    <div>
      <div className="form-header">Mevcut Çalışan Bilgileri</div>
      <Form onSubmit={formSubmitHandler} className="mevcut-calisan-bilgileri-form p-4">
        <Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Ad:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              name="name"
              className="mb-3"
              defaultValue={props.currentUser.name}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Soyad:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              name="surname"
              className="mb-3"
              defaultValue={props.currentUser.surname}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formDropdown04">
            <Form.Label>Statü:</Form.Label>
            <Form.Select defaultValue={""} className="mb-3" disabled name="type">
              <option>{props.currentUser.type}</option>
              {employeeTypesOption}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Şirket Adı:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              name="company_name"
              className="mb-3"
              defaultValue={props.currentUser.company}
              disabled
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Telefon:</Form.Label>
            <Form.Control
              required
              type="text"
              name="phone"
              placeholder=""
              className="mb-3"
              defaultValue={props.currentUser.phone_number}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>TC Kimlik No:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              name="tc_no"
              className="mb-3"
              defaultValue={props.currentUser.tc_number}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="validationCustom04">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
              name="email"
              required
              className="mb-3"
              defaultValue={props.currentUser.email}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Maaş:</Form.Label>
            <Form.Control
              required
              disabled={isAdmin ? "disabled" : null}
              type="text"
              placeholder=""
              name="salary"
              className="mb-3"
              defaultValue={(props.currentUser.salary)}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Oluşturuldu:</Form.Label>item
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              
              disabled
              defaultValue={created}

            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Güncellendi:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              className="mb-3"
              disabled
              defaultValue={updated}
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
            disabled
            defaultValue={last_login}


          />
        </Form.Group>
        <Button type="submit">Güncelle</Button>
      </Form>
    </div>
  );
}

export default MevcutCalisanBilgileri
