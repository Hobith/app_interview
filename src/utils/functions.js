import * as Yup from 'yup';

export const validationSchema = Yup.object({
    nombre: Yup.string().matches(/^[A-Za-z ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    apellidoPaterno: Yup.string().matches(/^[A-Za-z ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    apellidoMaterno: Yup.string().matches(/^[A-Za-z ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    email: Yup.string().email("El correo electrónico debe tener el formato: ejemplo@dominio.com."),
    fechaNac: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "El formato tiene que ser: AAAA-MM-DD"),
    calle: Yup.string().required("Información requerida"),
    numero: Yup.number().typeError("Solo puedes ingresar números").required("Información requerida"),
    colonia: Yup.string().required("Información requerida"),
    delegacion: Yup.string().required("Información requerida"),
    estado: Yup.string().matches(/^[A-Za-z ]+$/, "Solo debes de ingresar letras").required("Información requerida"),
    cp: Yup.number().typeError("Solo números").required("Información requerida"),
    imagen: Yup.string().required("La selfie es requerida"),
});


