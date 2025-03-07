import axios from "axios";

const API_URL = "https://api.devdicio.net:8444/v1/sec_dev_interview";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    /* "Host": "api.devdicio.net", */
    "xc-token": "J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP",
  },
});

/** LISTO
 * Obtiene datos desde la API.
 * @param {string} [endpoint=""] - Ruta del recurso (opcional).
 */
export const getData = async (endpoint,limit) => {
  try {
    const response = await apiClient.get(endpoint,{
      params: {
        limit: limit
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error al obtener datos de ${endpoint}:`, error);
    throw error;
  }
};

/** PENDIENTE
 * Envía datos a la API mediante una petición POST.
 * @param {string} [endpoint=""] - Ruta del recurso.
 * @param {Object} data - Datos a enviar.
 */
export const postData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error al enviar datos a ${endpoint}:`, error);
    throw error;
  }
};

/** PENDIENTE
 * Actualiza un recurso en la API mediante PUT.
 * @param {string} endpoint - Ruta del recurso.
 * @param {Object} data - Datos a actualizar.
 */
export const updateData = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar datos en ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Elimina un recurso de la API mediante DELETE.
 * @param {string} endpoint - Ruta del recurso.
 */
export const deleteData = async (endpoint) => {
  try {
    await apiClient.delete(endpoint);
  } catch (error) {
    console.error(`Error al eliminar datos en ${endpoint}:`, error);
    throw error;
  }
};
