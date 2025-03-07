# Aplicación de Registro y Visualización de Usuarios

## Descripción

Esta aplicación permite el registro y visualización de usuarios con fotografía. Consta de dos secciones principales:

1. Alta de usuario con foto: Un formulario de registro con validaciones
2. Visualización de datos: Una tabla con la información de los usuarios registrados.

## Funcionalidades
### 1. Alta de usuario
El formulario de registro debe contener los siguientes campos con sus respectivas validaciones:

Datos personales:
  - Nombre: Campo no vacío, solo letras.
  - Apellido paterno: Campo no vacío, solo letras.
  - Apellido materno: Campo no vacío, solo letras.
  - Correo electrónico: Formato válido de email.
  - Fecha de nacimiento: Formato AAAA-MM-DD.

Dirección:
  - Dirección: Campo no vacío, solo letras.
  - Número: Campo no vacío, solo números.
  - Colonia: Campo no vacío.
  - Ciudad: Campo no vacío.
  - Estado: Campo no vacío, solo letras.
  - Código postal: Campo no vacío, solo números.

Fotografía:
  - Captura de selfie: La aplicación debe proporcionar una guía para centrar el rostro.
  - Envío de imagen: La imagen debe enviarse en formato base64 y PNG.
  - Recorte de imagen: La imagen debe recortarse al centro con dimensiones 300x300 px (de forma manual o automática).

### 2. Visualización de datos
Se debe incluir una sección donde se pueda visualizar la información registrada de los usuarios:
  - Tabla con los datos personales y la fotografía del usuario.
  - Opción de búsqueda y filtrado por apellido paterno.

### 3. (Opcional) Edición de datos

Sección para modificar la información de usuarios previamente registrados.

## Tecnologías Utilizada
- Frontend: React.js, Bootstrap
- Backend: Node.js

## Instalación y Configuración
Ejecutar el proyecto: npm start


  
