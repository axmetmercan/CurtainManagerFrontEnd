import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import alertify from "alertifyjs";
import AuthContext from "../../context/AuthContext";


const OneInputFieldComponent = (props) => {

  const { authTokens,user } = useContext(AuthContext)
  const [form, setForm] = useState(window.location.href.toString().split("/").slice(-2) ? window.location.href.toString().split("/").slice(-2) : null)


  const postForm = (e) => {

    if (form) {
      e.preventDefault();

      if (form[1] === 'dealers') {
        postDealerShip(e)
      } else if (form[1] === 'brands') {
        postBrand(e)
        // this if creates measurements to that customer
      } else if (form[0] === 'customers') {
        console.log(e.target.formvalue.value)
        postMeasurement(e)
      }

    }
  }

  const postMeasurement = async (e) => {
    let response = await fetch("http://127.0.0.1:8000/measurement/groups/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "customer": parseInt(form[1]),"name":e.target.formvalue.value,order_status:false}, ),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    console.log(data, response.status)

    if (response.status === 201) {
      window.location.reload(true)
      alertify.success("Başarılı şekilde giriş yapıldı.")

    }
  }


  const postBrand = async (e) => {

    let response = await fetch("http://127.0.0.1:8000/product/brands/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "title": e.target.formvalue.value }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    console.log(data, response.status)

    if (response.status === 201) {
      window.location.reload(true)
      alertify.success("Başarılı şekilde giriş yapıldı.")
    }


  }

  const postDealerShip = async (e) => {
    let a = JSON.stringify({ "dealer": parseInt(e.target.formvalue.value) })
    console.log(a)


    let response = await fetch("http://127.0.0.1:8000/company/manage/dealer/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "dealer": parseInt(e.target.formvalue.value) }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    console.log(data, response.status)

    if (response.status === 201) {
      window.location.reload(true)
      alertify.success("Başarılı şekilde giriş yapıldı.")
    }
  }



  return (
    <div className="border rounded-pill shadow m-5 px-4 d-flex justify-content-center">
      <Form onSubmit={postForm} className="d-flex flex-row align-items-center justify-content-center ">
        <FormGroup className=" d-flex justify-content-between align-items-center m-3">
          <div className="me-2">{props.title}</div>
          <Input
            placeholder={props.placeholder}
            id={props.id}
            type={props.type}
            className="me-2"
            name="formvalue"
          ></Input>
        </FormGroup>
        <Button>{props.button_title}</Button>
      </Form>
    </div>
  );
};

export default OneInputFieldComponent;
