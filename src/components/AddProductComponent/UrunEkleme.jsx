import "./UrunEkleme.css";
import React from "react";
import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function UrunEkleme() {
  const [firstDropdown, setFirstDropdown] = useState("");
  const [thirdDropdown, setThirdDropdown] = useState("");
  const [fifthDropdown, setFifthDropdown] = useState("");
  const [loading, isLoading] = useState(true)
  const [colors, setColors] = useState({})
  const [categories, setCategories] = useState({})
  const [brands, setBrands] = useState({})
  const [producer, setProducer] = useState("")
  const [file, setFile] = useState();



  const { user, authTokens } = useContext(AuthContext);

  useEffect(() => {
    isLoading(true)

    getColors();
    getCategories();
    getMyBrands();
    console.log("useEffect works")

    isLoading(false)
  }, [])

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


  // 
  const getMyBrands = async (e) => {
    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };

    const brands = await axios.get("http://127.0.0.1:8000/product/mybrands/", config)
    console.log(brands.data)
    setProducer(brands.data.results[0].owner)


    setBrands(brands.data)




  }
  const getCategories = async (e) => {
    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };

    const categories = await axios.get("http://127.0.0.1:8000/product/categories/", config)
    console.log(categories.data.results)
    setCategories(categories.data)

  }
  const getColors = async (e) => {
    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }

    };

    const colors = await axios.get("http://127.0.0.1:8000/product/colors/", config)
    setColors(colors.data)

  }



  const imgUploadHandler = async (e) => {
    const config = {
      headers: { Authorization: `Bearer ${String(authTokens.access)}` }
    };

    const formData = new FormData();

    formData.append("title", "ürün resmi")
    formData.append("pic_url", file)

    axios.post('http://127.0.0.1:8000/picture/img/', formData, config)
      .then((res) => {
        // setUploadedImgId(res.data.id)
        postProduct(res.data.id, config, e)

      })
      .catch((err) => { console.log(err) })


  }

  const postProduct = async (imgId, config, e) => {


    const body = {

      "brand":e.target.brand.value,
      "code":e.target.code.value,
      "variant":e.target.variant.value,
      "weight":parseInt(e.target.weight.value),
      "height":parseInt(e.target.height.value),
      "w_price":parseFloat(e.target.w_price.value),
      "s_price":parseFloat(e.target.s_price.value),
      "color":String(e.target.color.value),
      "category":String(e.target.category.value),
      "img1":parseInt(imgId)

    }

    console.log(body.category)

    const postProd = await axios.post("http://127.0.0.1:8000/product/products/", body, config)

    window.location.reload()
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    imgUploadHandler(e)
    console.log("form submit edildi")


  }


  const colorOption = colors.results?.map((item) => {
    return <option key={item.id} value={item.color}>{item.color}</option>
  })

  const categoriesOption = categories.results?.map((item) => {

    return <option key={item.id} value={item.name} >{item.name}</option>
  })

  const brandsOption = brands.results?.map((item) => {
    return <option key={item.id} value={item.title}>{item.title}</option>
  })
  return (
    <div>

      <Form onSubmit={formSubmitHandler} className="border rounded-3 shadow mx-5 mt-5 p-4">
        <div className="text-center m-4 display-6">Ürün Ekleme</div>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDropdown01">
            <Form.Label>Marka:</Form.Label>
            <Form.Select
              name="brand"
              defaultValue={firstDropdown}
              onChange={handleFirstDropdownChange}
              required
            >
              {brandsOption}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown02">
            <Form.Label>Üretici Şirket:</Form.Label>
            <Form.Control
              name="producer"
              onChange={handleSecondDropdownChange}
              defaultValue={producer}
              disabled
              required
            >

            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown03">
            <Form.Label>Kategori</Form.Label>
            <Form.Select
              name="category"
              // defaultValue={thirdDropdown}
              disabled={!firstDropdown}
              onChange={handleThirdDropdownChange}
              required
            >
              {categoriesOption}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formDropdown04">
            <Form.Label>Kodu:</Form.Label>
            <Form.Control
              name="code"
              // defaultValue={fourthDropdown}
              // disabled={!thirdDropdown}
              // onChange={handleFourthDropdownChange}
              required
            >

            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown05">
            <Form.Label>Renk:</Form.Label>
            <Form.Select
              name="color"
              defaultValue={fifthDropdown}
              disabled={!thirdDropdown}
              onChange={handleFifthDropdownChange}
              required
            >
              {colorOption}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDropdown06">
            <Form.Label>Varyant:</Form.Label>
            <Form.Control
              name="variant"
              // defaultValue={sixthDropdown}
              // disabled={!fourthDropdown}
              // onChange={handleSixthDropdownChange}
              required
            >

            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridInput01">
            <Form.Label>Gramaj:</Form.Label>
            <Form.Control required name="weight" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput02">
            <Form.Label>Yükseklik:</Form.Label>
            <Form.Control required name="height" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput03">
            <Form.Label>Toptan Fiyatı:</Form.Label>
            <Form.Control required name="w_price" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInput04">
            <Form.Label>Satış Fiyatı:</Form.Label>
            <Form.Control required name="s_price" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridImg01">
            <Form.Label>Resim:</Form.Label>
            <Form.Control type="file" name="file" onChange={(e) => {
              setFile(e.target.files[0])
              console.log(file)
            }} />
          </Form.Group>

          {/* <Form.Group as={Col} className="mb-3" controlId="formGridImg02">
            <Form.Label>Img2:</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridImg03">
            <Form.Label>Img3:</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group> */}
        </Row>
        <Button variant="primary" type="submit">
          Ürün Ekle
        </Button>
      </Form>
    </div>
  );
}

export default UrunEkleme;
