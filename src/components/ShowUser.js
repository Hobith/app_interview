import React,  { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import UserForm from './UserForm';
import { getData } from "../services/apiService";
import { columns} from '../utils/functions';

const ShowUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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