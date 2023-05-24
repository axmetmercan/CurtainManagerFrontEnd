import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const OneInputFieldComponent = (props) => {
  return (
    <div className="border rounded-pill shadow m-5">
      <Form className="d-flex flex-row align-items-center justify-content-center ">
        <FormGroup className=" d-flex justify-content-between align-items-center m-3">
          <div className="me-2">{props.title}</div>
          <Input
            placeholder={props.placeholder}
            id={props.id}
            type={props.type}
            className="me-2"
          ></Input>
        </FormGroup>
        <Button>{props.button_title}</Button>
      </Form>
    </div>
  );
};

export default OneInputFieldComponent;
