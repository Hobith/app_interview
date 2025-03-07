import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Tooltip, OverlayTrigger} from 'react-bootstrap';
import UserForm from './UserForm';
import { getData } from "../services/apiService";
import CameraCapture from './CameraCapture';

const ShowUser = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    getData("/",100) // Llama a la URL base
      .then((response) => setUsers(response))
      .catch((error) => console.error("Error al obtener datos", error));
  }, []);

  return (
    <div className='App'>
        {/* Para la tabla */}
        <Container fluid>
            <h1>Registro de usuario</h1>
            <Row>
                <Col md={{ offset: 10}}>
                    {/* Para el modal */}
                    <UserForm />
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col xs={12} md={12} lg={12}>
                    <Table striped bordered responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Edad</th>
                                <th>Correo Electrónico</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Datos</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                                </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {users.map((user, id)=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellidoPaterno}</td>
                                    <td>{user.apellidoMaterno}</td>
                                    <td>{user.edad}</td>
                                    <td>{user.email}</td>
                                    <td>{user.fechaNac}</td>
                                    <td>
                                        Calle:{user.datos?.calle  || ""}<br/>
                                        Número:{user.datos?.numero || ""}<br/>
                                        Colonia:{user.datos?.colonia || ""}<br/>
                                        Delegación:{user.datos?.delegacion || ""}<br/>
                                        Estado:{user.datos?.estado || ""}<br/>
                                        CP:{user.datos?.cp || ""}
                                    </td>
                                    <td></td>
                                    <td>
                                        <OverlayTrigger
                                            overlay={
                                                <Tooltip>Editar</Tooltip>
                                            }
                                        >
                                            <button className='btn color-button'>
                                                <i className='fa-solid fa-edit'></i>
                                            </button>
                                        </OverlayTrigger>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ShowUser