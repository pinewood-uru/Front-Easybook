const obtenerUrl = (ruta) => `${RequestsAPI.urlBaseBackend}/${ruta}`;

const procesarRespuesta = (res) => {
    return res.json().then((data) => {
      if (data.error) {
        throw new Error(data?.error);
      }
  
      return data;
    });
  };

  const manejarErrores = (error = new Error("Error desconocido")) => {
    console.error("Ha ocurrido un error:", error.message);
    throw error.message;
  };



export class Request {
    static url = "https://localhost:3000/";

    // GET CLIENTS

    static getCliente(idCliente) {
        return fetch(obtenerUrl(`clients/${idCliente}`), {headers})
        .then(procesarRespuesta)
        .catch(manejarErrores)

    }
}