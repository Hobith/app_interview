import React,  { useState,useEffect} from 'react';
import { Modal, Button, Tooltip, OverlayTrigger,Container,Form} from 'react-bootstrap';
import { validationSchema} from '../utils/functions';
import CameraCapture from './CameraCapture';
import { useFormik } from "formik";
import { postData } from "../services/apiService";

function  UserForm () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      email: "",
      fechaNac: "",
      calle: "",
      numero: "",
      colonia: "",
      delegacion: "",
      estado: "",
      cp: "",
      imagen: ""
    },
    validationSchema: validationSchema, // Esquema de Yup importado de functions.
    onSubmit: async (values, { resetForm }) => {
      const datosLimpios ={
        nombre:values.nombre,
        apellidoPaterno: values.apellidoPaterno,
        apellidoMaterno: values.apellidoMaterno,
        email: values.email,
        fechaNac: values.fechaNac,
        datos: JSON.stringify({
          calle: values.calle,
          numero: values.numero,
          colonia: values.colonia,
          delegacion: values.delegacion,
          estado: values.estado,
          cp: values.cp,
          imagen: values.imagen,
        })
      }
      /* alert(JSON.stringify(datosLimpios, null, 2)); */
      try {
        await postData("/", datosLimpios); 
        alert("Se realizo el registro exitosamente");
        resetForm(); 

      } catch (error) {
        alert("Error al enviar los datos");
      }
    },
  });

    // Limpiar el formulario cuando el modal se cierra
    useEffect(() => {
      if (!show) {
        formik.resetForm(); // Resetea el formulario cuando se cierra el modal
      }
    }, [show]);

  return (
  <>
    <OverlayTrigger
        overlay={
            <Tooltip>Registro</Tooltip>
        }
    >
        <Button className='btn color-button' onClick={handleShow}>
            <i className='fa-solid fa-user-plus'></i> Registro
        </Button>
    </OverlayTrigger>
    <Modal 
      size="lg"
      show={show} 
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
    <Modal.Header closeButton>
      <Modal.Title>Registro de usuarios</Modal.Title>
    </Modal.Header>
    <Modal.Body className="grid-example">
    <Container>
      <Form  onSubmit={formik.handleSubmit} >
        <Form.Group className="mb-3">
          <Form.Label>* Nombre</Form.Label>
          <Form.Control
            id="nombre" 
            type="text" 
             {...formik.getFieldProps("nombre")} 
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <div className="text-danger">{formik.errors.nombre}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Apellido Paterno</Form.Label>
          <Form.Control 
            id="apellidoPaterno" 
            type="text" 
             {...formik.getFieldProps("apellidoPaterno")} 
          />
          {formik.touched.apellidoPaterno && formik.errors.apellidoPaterno && (
            <div className="text-danger">{formik.errors.apellidoPaterno}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Apellido Materno</Form.Label>
          <Form.Control 
            id="apellidoMaterno" 
            type="text" 
             {...formik.getFieldProps("apellidoMaterno")}  
          />
          {formik.touched.apellidoMaterno && formik.errors.apellidoMaterno && (
            <div className="text-danger">{formik.errors.apellidoMaterno}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control 
            id="email" 
             {...formik.getFieldProps("email")}  
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha de Cumpleaños</Form.Label>
          <Form.Control 
            id="fechaNac" 
            type="text" 
             {...formik.getFieldProps("fechaNac")}  
          />
          {formik.touched.fechaNac && formik.errors.fechaNac && (
            <div className="text-danger">{formik.errors.fechaNac}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Dirección del domicilio</Form.Label>
          <Form.Control 
            id="calle" 
            type="text" 
             {...formik.getFieldProps("calle")}  
          />
          {formik.touched.calle && formik.errors.calle && (
            <div className="text-danger">{formik.errors.calle}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Número</Form.Label>
          <Form.Control 
            id="numero" 
            type="text" 
            {...formik.getFieldProps("numero")}  
          />
          {formik.touched.numero && formik.errors.numero && (
            <div className="text-danger">{formik.errors.numero}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Colonia</Form.Label>
          <Form.Control 
            id="colonia" 
            type="text" 
            {...formik.getFieldProps("colonia")}  
          />
          {formik.touched.colonia && formik.errors.colonia && (
            <div className="text-danger">{formik.errors.colonia}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Ciudad</Form.Label>
          <Form.Control 
            id="delegacion" 
            type="text" 
            {...formik.getFieldProps("delegacion")}  
          />
          {formik.touched.delegacion && formik.errors.delegacion && (
            <div className="text-danger">{formik.errors.delegacion}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Estado</Form.Label>
          <Form.Control 
            id="estado" 
            type="text" 
            {...formik.getFieldProps("estado")} 
          />
          {formik.touched.estado && formik.errors.estado && (
            <div className="text-danger">{formik.errors.estado}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Código Postal</Form.Label>
          <Form.Control 
            id="cp" 
            type="text" 
            {...formik.getFieldProps("cp")} 
          />
          {formik.touched.cp && formik.errors.cp && (
            <div className="text-danger">{formik.errors.cp}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>* Selfie</Form.Label>
          <CameraCapture onCapture={(image) => formik.setFieldValue("imagen", image)} />
          {formik.touched.imagen && formik.errors.imagen && (
            <div className="text-danger">{formik.errors.imagen}</div>
          )}
        </Form.Group>
          <br />
          <Button variant="primary" className='color-button' type="submit">
            Guardar
          </Button>
    
      </Form>
      </Container>
    </Modal.Body>
{/*     <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer> */}
    </Modal>
  </>
  );
}

export default UserForm;