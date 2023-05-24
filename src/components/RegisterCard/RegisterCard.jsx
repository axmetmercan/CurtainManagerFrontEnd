import React from 'react'
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

const RegisterCard = () => {
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

                        <Form className='row'>

                            <FormGroup className='p-3 row  '>
                                <div className="col-md-6">

                                    <Label for='company_name'>Şirket İsmi</Label>
                                    <Input id='company_name'  placeholder='Curtain Textile'></Input>

                                    <Label for='tax_number'>Vergi Numarası</Label>
                                    <Input id='tax_number' placeholder='11111111111'></Input>

                                    <Label for='tax_office'>Vergi Dairesi</Label>
                                    <Input id='tax_office' placeholder='Istanbul Vergi Dairesi'></Input>


                                    <Label for='full_address'>Açık Adres </Label>
                                    <Input id='full_address' ></Input>



                                    <Label for='city'>Şehir</Label>
                                    <Input id='city'></Input>


                                    <Label for='county'>İlçe</Label>
                                    <Input id='county'></Input>
                                </div>


                                <div className="col-md-6">
                                    <Label for='responsible_people'>Yetkili İsmi</Label>
                                    <Input id='responsible_people' placeholder='Ahmet'></Input>

                                    <Label for='repsonsible_people_surname'>Yetkili Soyismi</Label>
                                    <Input id='repsonsible_people_surname' placeholder='Mercan'></Input>

                                    <Label for='phone_number'>Yetkili Telefon Numarıs</Label>
                                    <Input id='phone_number' placeholder='05555555555'></Input>

                                    <Label for='email'>Email</Label>
                                    <Input id='email' type='email' placeholder='curtainmanager@curtain.com'></Input>

                                    <Label for='tax_document'>Verghi Levhası</Label>
                                    <Input
                                        id="tax_document"
                                        name="file"
                                        type="file"
                                    ></Input>

                                    <Label for='register_type'>Kayıt Tipi</Label>
                                    <Input
                                        id="register_type"
                                        name="select"
                                        type="select"
                                    >   <option>
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
