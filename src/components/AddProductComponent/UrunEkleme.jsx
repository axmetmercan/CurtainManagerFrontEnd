import "./UrunEkleme.css";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UrunEkleme() {
  const [firstDropdown, setFirstDropdown] = useState("");
  const [secondDropdown, setSecondDropdown] = useState("");
  const [thirdDropdown, setThirdDropdown] = useState("");
  const [fourthDropdown, setFourthDropdown] = useState("");
  const [fifthDropdown, setFifthDropdown] = useState("");
  const [sixthDropdown, setSixthDropdown] = useState("");

  const handleFirstDropdownChange = (event) => {
    setFirstDropdown(event.target.value);
  };

  const handleSecondDropdownChange = (event) => {
    setSecondDropdown(event.target.value);
  };

  const handleThirdDropdownChange = (event) => {
    setThirdDropdown(event.target.value);
  };

  const handleFourthDropdownChange = (event) => {
    setFourthDropdown(event.target.value);
  };

  const handleFifthDropdownChange = (event) => {
    setFifthDropdown(event.target.value);
  };

  const handleSixthDropdownChange = (event) => {
    setSixthDropdown(event.target.value);
  };

  return (
    <div>

      <Form className="border rounded-3 shadow mx-5 mt-5 p-4">
      <div className="text-center m-4 display-6">Ürün Ekleme</div>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDropdown01">
            <Form.Label>Marka:</Form.Label>
            <Form.Select
              defaultValue={firstDropdown}
              onChange={handleFirstDropdownChange}
              required
            >
              <option>{firstDropdown}</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown02">
            <Form.Label>Üretici Şirket:</Form.Label>
            <Form.Select
              defaultValue={secondDropdown}
              onChange={handleSecondDropdownChange}
              disabled={!firstDropdown}
              required
            >
              <option>{secondDropdown}</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown03">
            <Form.Label>Kategori</Form.Label>
            <Form.Select
              defaultValue={thirdDropdown}
              disabled={!secondDropdown}
              onChange={handleThirdDropdownChange}
              required
            >
              <option>{thirdDropdown}</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDropdown04">
            <Form.Label>Kodu:</Form.Label>
            <Form.Select
              defaultValue={fourthDropdown}
              disabled={!thirdDropdown}
              onChange={handleFourthDropdownChange}
              required
            >
              <option>{fourthDropdown}</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown05">
            <Form.Label>Renk:</Form.Label>
            <Form.Select
              defaultValue={fifthDropdown}
              onChange={handleFifthDropdownChange}
              required
            >
              <option>{fifthDropdown}</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown06">
            <Form.Label>Varyant:</Form.Label>
            <Form.Select
              defaultValue={sixthDropdown}
              disabled={!fourthDropdown}
              onChange={handleSixthDropdownChange}
              required
            >
              <option>{sixthDropdown}</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridInput01">
            <Form.Label>Genişlik:</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput02">
            <Form.Label>Yükseklik:</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput03">
            <Form.Label>Toptan Fiyatı:</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput04">
            <Form.Label>Satış Fiyatı:</Form.Label>
            <Form.Control required />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridImg01">
            <Form.Label>Img1:</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridImg02">
            <Form.Label>Img2:</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridImg03">
            <Form.Label>Img3:</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Ürün Ekle
        </Button>
      </Form>
    </div>
  );
}

export default UrunEkleme;
