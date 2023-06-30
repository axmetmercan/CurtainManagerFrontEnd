import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AuthContext from '../../context/AuthContext';
import alertify from 'alertifyjs';

const YeniKullanıcı = (props) => {

    const [isHidden, setHidden] = useState(true)
    const { user, authTokens } = useContext(AuthContext)
    const [types, setTypes] = useState({})

    useEffect(() => {


        getUserTypes();
        typesMap

    }, [isHidden])

    console.log(types)

    const getUserTypes = async () => {

        const url = "http://127.0.0.1:8000/employee/types"
        const config = {
            headers: { Authorization: `Bearer ${String(authTokens.access)}` }
        };
        const res = await axios.get(url, config)
        setTypes(res.data)
        console.log(res.data)

    }

    


    // const postNewUser = (e) => {
    //    const data = {
    //         "type": e.target.type.value,
    //         "company": e.target.company_name.value,
    //         "name": e.target.name.value,
    //         "surname": e.target.surname.value,
    //         "phone_number": parseInt(e.target.phone.value),
    //         "email": e.target.email.value,
    //         "tc_number": parseInt(e.target.tc_no.value),
    //         "salary": parseInt(e.target.salary.value)

    //     }

    // }


    const formSubmitHandler = async (e) => {
        
        e.preventDefault();
        const data = {
            "type": e.target.type.value,
            "company": e.target.company_name.value,
            "name": e.target.name.value,
            "surname": e.target.surname.value,
            "phone_number": parseInt(e.target.phone.value),
            "email": e.target.email.value,
            "tc_number": parseInt(e.target.tc_no.value),
            "salary": parseInt(e.target.salary.value)

        }
        const url ="http://127.0.0.1:8000/employee/employee/"
        const config = {
            headers: { Authorization: `Bearer ${String(authTokens.access)}` }
        };

        const res = await axios.post(url,data,config)

        console.log(res.data)
        alertify.success("Kayıt Başarılı")
    }


    const typesMap = types.results?.map((item) => {
        return <option key={item.id}>{item.title}</option>
    })

    return (
        <div className='mb-5'>
            <p className="btn btn-success m-5 d-flex text-center justify-content-center" onClick={() => {
                setHidden(!isHidden)
                // console.log(isHidden1)
            }}>

                Yeni Kullanıcı Ekle Göster/Gizle
            </p>

            <div hidden={isHidden} >

                <div className="form-header" >Yeni Çalışan Bilgileri</div>
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
                            //   defaultValue={props.currentUser.name}
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
                            //   defaultValue={props.currentUser.surname}
                            />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formDropdown04">
                            <Form.Label>Statü:</Form.Label>
                            <Form.Select defaultValue={""} className="mb-3" name="type">
                                {/* <option>{props.currentUser.type}</option> */}
                                {/* {employeeTypesOption} */}
                                {typesMap}
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
                            //   defaultValue={props.currentUser.phone_number}
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
                            //   defaultValue={props.currentUser.tc_number}
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
                            //   defaultValue={props.currentUser.email}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Maaş:</Form.Label>
                            <Form.Control
                                required
                                //   disabled={isAdmin ? "disabled" : null}
                                type="text"
                                placeholder=""
                                name="salary"
                                className="mb-3"
                            //   defaultValue={(props.currentUser.salary)}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Şifre:</Form.Label>
                            <Form.Control
                                required
                                //   disabled={isAdmin ? "disabled" : null}
                                placeholder="*****"
                                name="password"
                                type="password"
                                className="mb-3"
                            //   defaultValue={(props.currentUser.salary)}
                            />
                        </Form.Group>
                    </Row>

                    <Button type="submit">Kaydet</Button>
                </Form>
            </div>

        </div>
    )
}

export default YeniKullanıcı
