import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label, FormText } from 'reactstrap'
import "./MeasurementCard.css"
import { useState, useEffect } from 'react'
import alertify from 'alertifyjs';


//Fiyatlandırma fonksiyonları yazılacak!!!!!



const MeasurementCard = () => {

    const [curtainType, setCurtainType] = useState(["Tül Perde", "Stor Perde", "Zebra Perde"]);
    const [width, setWidth] = useState([]);
    const [height, setHeight] = useState([]);
    const [products, setProducts] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setWidthList(60, 600);
        setHeightList(30, 320);
        setProductsList();
        setRommsList();
    }, [])

    const setProductsList = () => {
        // Api reuqest and create product object and push it to the list
        const product = [{
            id: "2",
            brand: "asd",
            price: 123,
            variant: "asdasddsa",
        }, {
            id: "3",
            brand: "asdasdasd",
            price: 123,
            variant: "vcbfggdsfg",
        }]
        setProducts([...products, ...product])
    }

    const setRommsList = () => {
        const roomList = ["Oturma Odası", "Salon Odası", "Çocuk Odası", "Yemek Odası", "Çalışma Odası", "Yatak Odası", "Giyinme Odası"];
        setRooms([...rooms, ...roomList])
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


    const CurtainTypes = [...curtainType,];



    const AddCurtainTypes = () => {
        setCurtainType([...curtainType, ...CurtainTypes]);
        console.log(curtainType)
    }






    return (
        <div>
            <Card className='shadow measurement-card '>
                {/* <CardHeader></CardHeader> */}
                <CardBody className='row align-items-center justify-content-center' >

                    <Form className='d-flex flex-row justify-content-center align-items-center p-3 flex-wrap' >
                        <FormGroup>
                            <Label for="window-pic">
                                Pencere Fotoğrafı
                            </Label>
                            <Input
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
                                Odas İsmi
                            </Label>
                            <Input
                                id='room-type'
                                name='room-type'
                                type='select'
                            >
                                {
                                    rooms.map((name, index) => (
                                        <option key={index}>{name}</option>
                                    ))
                                }

                            </Input>
                        </FormGroup>

                        <FormGroup className=''>
                            <Label>
                                Perde Tipi
                            </Label>
                            <Input
                                id='curtain-type'
                                name='curtain-type'
                                type='select'
                            >
                                {
                                    curtainType.map((type, index) => (
                                        <option key={index}>{type}</option>
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
                                            <option key={index}>{width}</option>
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
                                            <option key={index}>{height}</option>
                                        ))
                                    }


                                </Input>
                            </FormGroup>





                        </div>

                        <FormGroup>
                            <Label>Ürün Kodu</Label>
                            <Input type='select'>


                                {products.map((prod) => (
                                    <option key={prod.id}>{prod.variant}</option>
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



                    </Form>

                    <p className='p-2 border rounded-3 bg-info shadow h4 measurement-price'>Fiyat: <span className='fw-bold'>99₺</span></p>


                </CardBody>
                <CardFooter className='footer d-flex flex-row justify-content-center '>

                    <div className="btn btn-success rounded-0   " onClick={() => {
                        alertify.success('Ölçü Eklendi  ' + alertify.get('notifier', 'position'));
                    }}>Ölçüyü Ekle</div>

                </CardFooter>

            </Card>
        </div>
    )
}

export default MeasurementCard
