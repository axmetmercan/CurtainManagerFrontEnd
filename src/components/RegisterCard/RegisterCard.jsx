import React, { useState, useContext } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Label,
    Input,
    Button,

} from "reactstrap"
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { Route, Routes, useNavigate } from "react-router-dom";
import alertify from 'alertifyjs';


const RegisterCard = () => {

    const [file, setFile] = useState(null);
    const [uploadedImgId, setUploadedImgId] = useState(null);

    const { authTokens } = useContext(AuthContext);




    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("FormSubmit Edildi")


        await uploadImgHandler(e);

        console.log(uploadedImgId)


    }

    const uploadFactoryHandler = async (imgId, config, e) => {

        const name = e.target.company_name.value;
        const tax_no = e.target.tax_number.value;
        const address = e.target.address.value;
        const tax_office = e.target.tax_office.value;

        const owner_name = e.target.owner_name.value;
        const owner_surname = e.target.owner_surname.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;

        const body = {

            "name": String(name),
            "owner_name": String(owner_name),
            "owner_surname": String(owner_surname),
            "tc_no": parseInt(122342345),

            "phone_number": parseInt(phone),
            "email": String(email),
            "tax_no": parseInt(tax_no),
            "tax_municipilaty": String(tax_office),
            "address": String(address),
            "tax_document_pic": parseInt(imgId)

        }


        await axios.post("http://127.0.0.1:8000/company/create/", body, config)
           
        await alertify.success("Kaydınız Oluşturuldu")
        // window.location.reload()



    }




    const uploadImgHandler = (e) => {
        const config = {
            headers: { Authorization: `Bearer ${String(authTokens.access)}` }
        };

        const formData = new FormData();

        formData.append("title", "Şirket Resmi")
        formData.append("pic_url", file)

        axios.post('http://127.0.0.1:8000/picture/img/', formData, config)
            .then((res) => {
                setUploadedImgId(res.data.id)
                uploadFactoryHandler(res.data.id, config, e)

            })
            .catch((err) => { console.log(err) })



    }




    return (
        <div>
            <div className='container container-fluid pt-5 pb-5'>
                <Card color="info" className='shadow rounded-4'>
                    <CardHeader>
                        <CardTitle>
                            <div className="text-dark h3 text-center p-3">Firma Kayıt Formu</div>
                        </CardTitle>
                    </CardHeader>
                    <CardBody className='p-3 d-flex flex-row justify-content-center align-items-center'>

                        <Form onSubmit={formSubmitHandler} className='row'>

                            <FormGroup className='p-3 row  '>
                                <div className="col-md-6">

                                    <Label for='company_name'>Şirket İsmi</Label>
                                    <Input id='company_name' name="company_name" placeholder='Curtain Textile'></Input>

                                    <Label for='tax_number'>Vergi Numarası</Label>
                                    <Input id='tax_number' name='tax_number' placeholder='11111111111'></Input>

                                    <Label for='tax_office'>Vergi Dairesi</Label>
                                    <Input id='tax_office' name="tax_office" placeholder='Istanbul Vergi Dairesi'></Input>


                                    <Label for='full_address'>Açık Adres </Label>
                                    <Input id='full_address' name='address' ></Input>

                                    {/* 

                                    <Label for='city'>Şehir</Label>
                                    <Input id='city'></Input>


                                    <Label for='county'>İlçe</Label>
                                    <Input id='county'></Input> */}
                                </div>


                                <div className="col-md-6">
                                    <Label for='responsible_people'>Yetkili İsmi</Label>
                                    <Input id='responsible_people' name='owner_name' placeholder='Ahmet'></Input>

                                    <Label for='repsonsible_people_surname'>Yetkili Soyismi</Label>
                                    <Input id='repsonsible_people_surname' name='owner_surname' placeholder='Mercan'></Input>

                                    <Label for='phone_number'>Yetkili Telefon Numarıs</Label>
                                    <Input id='phone_number' name='phone' placeholder='05555555555'></Input>

                                    <Label for='email'>Email</Label>
                                    <Input id='email' type='email' name='email' placeholder='curtainmanager@curtain.com'></Input>

                                    <Label for='tax_document'>Verghi Levhası</Label>
                                    <Input
                                        id="tax_document"
                                        name="file"
                                        type="file"

                                        onChange={(e) => {
                                            setFile(e.target.files[0])
                                            console.log(file)
                                        }}
                                    ></Input>

                                    <Label for='register_type'>Kayıt Tipi</Label>
                                    <Input
                                        id="register_type"
                                        name="select"
                                        type="select"
                                        disabled
                                        defaultValue="Şirket"
                                    >
                                        <option>Şirket</option>
                                        <option>
                                            Yetkili Üretici
                                        </option>
                                        <option>
                                            Perakende Satıcı
                                        </option></Input>
                                </div>

                            </FormGroup>
                            <div className="row justify-content-center">
                                <Button className='bg-success' style={{ width: "fit-content" }} >
                                    Ön Kayıt Başvurusu Yap
                                </Button>
                            </div>

                        </Form>


                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export default RegisterCard
