const obtenerUrl = (ruta) => `${Request.urlBase}/${ruta}`;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};


const token = sessionStorage.getItem("session");

if (token) {
  headers.authorization = token;
}

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
  static urlBase = "https://https://localhost:3000/";

  // LOGIN
  static login(email, password) {
    const body = JSON.stringify({ email, password });

    return fetch(obtenerUrl("loginadm"), {
      method: "POST",
      headers,
      body,
    })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  // GET CLIENTS

  static getCliente(opciones = {}) {

    const queryParams = new URLSearchParams({});

    return fetch(obtenerUrl("clientes?" + queryParams), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores)

  }
} 