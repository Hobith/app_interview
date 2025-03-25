// Yup es una biblioteca de validación de esquemas para JavaScript, comúnmente utilizada con Formik en
//  formularios de React. Permite definir reglas de validación de manera fácil y declarativa.
import * as Yup from 'yup';

//  React-Bootstrap es una biblioteca que adapta Bootstrap para su uso en aplicaciones de React, 
// proporcionando componentes reutilizables en lugar de clases CSS tradicionales.
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export const validationSchema = Yup.object({
    nombre: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    apellidoPaterno: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    apellidoMaterno: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    email: Yup.string().email("El correo electrónico debe tener el formato: ejemplo@dominio.com."),
    fechaNac: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "El formato tiene que ser: AAAA-MM-DD"),
    calle: Yup.string().required("Información requerida"),
    numero: Yup.number().typeError("Solo puedes ingresar números").required("Información requerida"),
    colonia: Yup.string().required("Información requerida"),
    delegacion: Yup.string().required("Información requerida"),
    estado: Yup.string().matches(/^[A-Za-z ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    cp: Yup.string().matches(/^\d{5}$/, "Debe tener exactamente 5 dígitos").required("Información requerida"),
    imagen: Yup.string().required("La selfie es requerida"),
});


export const columns = [
    { name: "ID", selector: row => row.id, sortable: true },
    { name: "Nombre", selector: row => row.nombre, sortable: true },
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
      ignoreRowClick: true},
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

