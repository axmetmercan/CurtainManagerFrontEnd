import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label, FormText, Button } from 'reactstrap'
import "./MeasurementCard.css"
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import alertify from 'alertifyjs';
import axios from 'axios'
import { BounceLoader } from 'react-spinners'



//Fiyatlandırma fonksiyonları yazılacak!!!!!



const MeasurementCard = () => {

    const [curtainType, setCurtainType] = useState([]);
    const [width, setWidth] = useState([]);
    const [height, setHeight] = useState([]);
    const [pile, setPile] = useState(["Pilesiz", "Seyrek Pile", "Orta Pile", "Sık Pile", "Mekanik Perde", "Plisel"]);
    const [products, setProducts] = useState([]);
    const [variants, setVariants] = useState([])
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState("")
    const [img, setImg] = useState([])




    const [firstDropdown, setFirstDropdown] = useState("");
    const [secondDropdown, setSecondDropdown] = useState("");
    const [thirdDropdown, setThirdDropdown] = useState("");

    const { authTokens } = useContext(AuthContext)

    useEffect(() => {
        setWidthList(60, 600);
        setHeightList(50, 320);
        // setProductsList();
        setRommsList();
        setCurtainModelTypes();

        setTimeout(()=>{
            setLoading(false)
        },300)

        // 
    }, [])


    const handleFirstDropdownChange = async (event) => {
        await setFirstDropdown(event.target.value);
        await setProductsList();
    };

    const handleSecondDropdownChange = async (event) => {
        await setSecondDropdown(event.target.value);
        await setProductVariantList(event.target.value);
    };

    const handleThirdDropdownChange = (event) => {
        setThirdDropdown(event.target.value);
    };






    const setProductsList = async () => {

        console.log(secondDropdown)
        let response = await fetch(`http://127.0.0.1:8000/product/products/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setProducts(data.results)

        } else if (response.statusText === 'Unauthorized') {

            console.log("Ürünler Getirilemedi response 200 dönmedi")
        }

    }

    const setProductVariantList = async (code) => {
        let response = await fetch(`http://127.0.0.1:8000/product/products?code=${code}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            console.log(data.results)
            setVariants(data.results)

        } else if (response.statusText === 'Unauthorized') {

            console.log("Ürünler Getirilemedi response 200 dönmedi")
        }


    }
    const setRommsList = async () => {
        let response = await fetch(`http://127.0.0.1:8000/measurement/rooms/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setRooms(data.results)

        } else if (response.statusText === 'Unauthorized') {

            console.log("Ürünler Getirilemedi response 200 dönmedi")
        }


    }
    const setWidthList = (begin, end) => {
        let i = begin;
        let measurements = []
        for (i; i <= end; i++) {
            measurements.push(i);
        }
        setWidth([...width, ...measurements]);

    }

    const setHeightList = (begin, end) => {
        let i = begin;
        let measurements = []
        for (i; i <= end; i++) {
            measurements.push(i);
        }
        setHeight([...height, ...measurements]);

    }





    const setCurtainModelTypes = async () => {
        let response = await fetch(`http://127.0.0.1:8000/measurement/models/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setCurtainType(data.results)

        } else if (response.statusText === 'Unauthorized') {

            console.log("Ürünler Getirilemedi response 200 dönmedi")
        }

    }


    const formSubmitHandler = async (e) => {
        e.preventDefault();
        let param = window.location.href;
        param = parseInt(param.split("/").pop())

        const room_name = e.target.room_type.value
        const curtain_type = e.target.curtain_type.value
        const product = e.target.product_variant.value
        const width = e.target.width.value
        const height = e.target.height.value
        const measurement_group_id = param
        const unit_price = e.target.unit_price.value
        let pile = e.target.pile.value
        console.log(room_name, curtain_type, product, width, height, param, unit_price)
        const a = (pile) => {
            if (pile === "Seyrek Pile") {
                return 2
            } else if (pile === "Orta Pile") {
                return 2.5
            } else if (pile === "Sık Pile") {
                return 3
            }
            else if (pile === "Pilesiz") {
                return 1
            } else {
                return 1
            }
        }



        const config = {
            headers: { Authorization: `Bearer ${String(authTokens.access)}` }
        };
        const formData = new FormData();
        formData.append("room_pic", file, "pencere.png");
        formData.append('title', 'Pencere Resmi');
        formData.append("product_id", product)
        formData.append("room_id", room_name)
        formData.append("measurement_group_id", measurement_group_id)
        formData.append("unit_price", unit_price)
        formData.append("measurement_note", "")
        formData.append("width", width)
        formData.append("height", height)
        formData.append("type", a(pile))
        await uploadImgHandler(formData, config)

        window.location.reload(true);


    }

    const uploadMeasurement = async (body, config) => {
        console.log("axios çağrıldı")
        await axios.post("http://127.0.0.1:8000/measurement/measurements/", body, config)
            .then((res) => { console.log(res) }).catch((err) => { console.log(err) })

    }


    const uploadImgHandler = async (formData, config) => {


        axios.post('http://127.0.0.1:8000/measurement/measurements/', formData, config)
            .then((res) => { setImg(res.data) }).catch((err) => { console.log("error") })

    }




    return (
        <div className="d-flex justify-content-center align-items-center">
            {loading ?

                <BounceLoader color="#3ab1d2" />

                :

                <Card className='shadow measurement-card '>
                    {/* <CardHeader></CardHeader> */}
                    <CardBody className='row align-items-center justify-content-center' >

                        <Form onSubmit={formSubmitHandler} className='d-flex flex-row justify-content-center align-items-center p-3 flex-wrap' >
                            <FormGroup>
                                <Label for="window-pic">
                                    Pencere Fotoğrafı
                                </Label>
                                <Input onChange={(e) => {
                                    setFile(e.target.files[0])
                                    console.log(file)
                                }}
                                    id="window-pic"
                                    name="window-pic"
                                    type="file"
                                />
                                {/* <FormText>
                                Perde uygulanacak olan pencere içni fotoğraf yükleme alanı
                            </FormText> */}
                            </FormGroup>

                            <FormGroup className=''>
                                <Label>
                                    Oda İsmi
                                </Label>
                                <Input
                                    id='room_type'
                                    name='room_type'
                                    type='select'
                                >
                                    <option value="" >...</option>

                                    {
                                        rooms.map((item) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>

                            <FormGroup className=''>
                                <Label>
                                    Uygulanacak Perde Modeli
                                </Label>
                                <Input
                                    id='curtain-type'
                                    name='curtain_type'
                                    type={'select'}
                                    defaultValue={firstDropdown}
                                    onChange={handleFirstDropdownChange}
                                    required
                                >
                                    <option value="" >...</option>

                                    {
                                        curtainType.map((item) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>
                            <div className="d-flex flex-row justify-content-between ">
                                <FormGroup>
                                    <Label>En</Label>
                                    <Input
                                        id='width'
                                        name='width'
                                        type='select'>

                                        {
                                            width.map((width, index) => (
                                                <option key={index} value={width}>{width}</option>
                                            ))
                                        }
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Boy</Label>

                                    <Input
                                        id='height'
                                        name='height'
                                        type='select'
                                    >

                                        {
                                            height.map((height, index) => (
                                                <option key={index} value={height}>{height}</option>
                                            ))
                                        }


                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Pile/Tip</Label>

                                    <Input
                                        id='tip'
                                        name='pile'
                                        type='select'
                                    >

                                        {
                                            pile.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }


                                    </Input>
                                </FormGroup>





                            </div>

                            <FormGroup>
                                <Label>Ürün Kodu</Label>
                                <Input type='select'
                                    defaultValue={secondDropdown}
                                    onChange={handleSecondDropdownChange}
                                    disabled={!firstDropdown}
                                    name="product"
                                    required
                                >
                                    <option value="" >...</option>
                                    {products.map((item) => (
                                        <option key={item.id} value={item.code}>{item.code}</option>
                                    ))}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Ürün Varyantı</Label>
                                <Input type='select'
                                    // defaultValue={secondDropdown}
                                    // onChange={handleSecondDropdownChange}
                                    name='product_variant'
                                    disabled={!secondDropdown}
                                    required
                                >

                                    <option value="" >...</option>
                                    {variants.map((item) => (
                                        <option key={item.id} value={item.id}>{item.variant}</option>
                                    ))}
                                </Input>
                            </FormGroup>


                            <FormGroup>
                                <Label hidden>Ürün Fiyatı</Label>
                                <Input type='select'

                                    name="unit_price"
                                    required
                                    hidden
                                >
                                    {variants.map((item) => (
                                        <option key={item.id} value={item.s_price}>{item.s_price}</option>
                                    ))}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Ölçü Notu</Label>
                                <Input
                                    id="note"
                                    name="note"
                                    placeholder="ölçü notunuz"
                                    type="textarea"
                                />
                            </FormGroup>

                            <Button type="submit"> Ölçü Ekle </Button>

                        </Form>

                        <p className='p-2 border rounded-3 bg-info shadow h4 measurement-price'>Fiyat: <span className='fw-bold'>99₺</span></p>


                    </CardBody>
                    <CardFooter className='footer d-flex flex-row justify-content-center '>

                        {/* <div className="btn btn-success rounded-0   " onClick={() => {
                        alertify.success('Ölçü Eklendi  ' + alertify.get('notifier', 'position'));
                    }}>Ölçüyü Ekle</div> */}

                    </CardFooter>

                </Card>
            }

        </div>
    )
}

export default MeasurementCard
