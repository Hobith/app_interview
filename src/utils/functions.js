import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from "formik";
import * as Yup from 'yup';

export function show_alert(mensaje, icono, foco){
    onfocus(foco);
    const MySwal = withReactContent (Swal);
    MySwal.fire({
        title:mensaje,
        icon:icono
    });
}

function onfocus(foco){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }        
}

export const validationSchema = Yup.object({
    name: Yup.string().matches(/^[A-Za-z ]+$/, "Solo letras").required("Requerido"),
    lastName: Yup.string().matches(/^[A-Za-z ]+$/, "Solo letras").required("Requerido"),
    maternalSurname: Yup.string().matches(/^[A-Za-z ]+$/, "Solo letras").required("Requerido"),
    mail: Yup.string().email("Formato inválido").required("Requerido"),
    birthdate: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "Formato AAAA-MM-DD").required("Requerido"),
    address: Yup.string().required("Requerido"),
    number: Yup.number().typeError("Solo números").required("Requerido"),
    colony: Yup.string().required("Requerido"),
    city: Yup.string().required("Requerido"),
    state: Yup.string().matches(/^[A-Za-z ]+$/, "Solo letras").required("Requerido"),
    postalCode: Yup.number().typeError("Solo números").required("Requerido"),
    photo: Yup.string().required("Foto requerida"),
});


 export const calculateAge = (birthdate) => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}; 
