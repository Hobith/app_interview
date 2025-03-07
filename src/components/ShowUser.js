import React,  { useState, useEffect } from 'react';
import { Container, Row, Col, Tooltip, OverlayTrigger,Spinner } from 'react-bootstrap';
import UserForm from './UserForm';
import { getData } from "../services/apiService";
import DataTable from 'react-data-table-component';

const ShowUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { name: "ID", selector: row => row.id, sortable: true },
        { name: "Nombre", selector: row => row.name, sortable: true },
        { name: "Apellido Paterno", selector: row => row.apellidoPaterno, sortable: true },
        { name: "Apellido Materno", selector: row => row.apellidoMaterno, sortable: true },
        { name: "Edad", selector: row => row.edad, sortable: true },
        { name: "Correo Electrónico", selector: row => row.email, sortable: true },
        { name: "Fecha de Nacimiento", selector: row => row.fechaNac, sortable: true },
        { name: "Calle ", selector: row => row.datos?.calle || "", sortable: true },
        { name: "Número ", selector: row => row.datos?.numero || "", sortable: true },
        { name: "Colonia ", selector: row => row.datos?.colonia || "", sortable: true },
        { name: "Delegación ", selector: row => row.datos?.delegacion || "", sortable: true },
        { name: "CP ", selector: row => row.datos?.estado || "", sortable: true },
        { name: "Selfie ",       cell: row => (
            row.datos?.imagen || "" ? (
              <img
                src={row.datos?.imagen}
                alt="Foto"
                width="100"
                height="100"
              />
            ) : (
              "Sin imagen"
            )
          ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,},
        { name: "Acciones ", cell: row => (
            <OverlayTrigger
                overlay={
                    <Tooltip>Editar</Tooltip>
                }
            >
                <button className='btn color-button'>
                    <i className='fa-solid fa-edit'></i>
                </button>
            </OverlayTrigger>
        ) }
      ];

  useEffect(() => {
    const fetchData = async () => {
        try {
          // Llamamos a la función asíncrona y esperamos los datos
          const response = await getData("/", 100,10); // Llamada a la API con parámetros
          
          setUsers(response); // Si la solicitud es exitosa, guardamos los usuarios
        } catch (error) {
          console.error("Error al obtener datos"); // Mostramos el error en la consola
        }
        finally {
            setLoading(false); // Ocultamos el spinner al terminar
          }
      };
  
      fetchData(); // Llamamos a la función asíncrona dentro del useEffect
  }, []);

  return (
    <div className='App'>
        <Container fluid>
        <h1>Registro de usuario</h1>
            <Row>
                <Col md={{ offset: 10}}>
                    {/* Para el modal */}
                    <UserForm />
                </Col>
            </Row>
        
        {loading ? (
            <div className="text-center">
            <Spinner animation="border" />
            </div>
        ) : (
            <DataTable
            columns={columns}
            data={users}
            pagination
            highlightOnHover
            striped
            responsive
            />
        )}
        </Container>
    </div>
  )
}

export default ShowUser