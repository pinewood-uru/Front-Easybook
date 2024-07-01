const obtenerUrl = (ruta) => `${Request.urlBase}/${ruta}`;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};


const token = sessionStorage.getItem("session");

if (token) {
  headers.Authorization = token;
}

const procesarRespuesta = (res) => {
  return res.json().then((data) => {
    if (data.error) {
      throw new Error(data?.error);
    }
    console.log('Respuesta: ', data)

    return data;
  });
};

const manejarErrores = (error = new Error("Error desconocido")) => {
  console.error("Ha ocurrido un error:", error.message);
  if (error.message === "Sesión no es valida") {
    sessionStorage.removeItem("session");
    sessionStorage.removeItem("user");
    document.location.replace("login.html");
  }
  throw error.message;
};



export class Request {
  static urlBase = "http://localhost:3000"

  // LOGIN
  static login(email, password) {
    const body = JSON.stringify({ email, password });

    return fetch(obtenerUrl("loginadmin"), {
      method: "POST",
      headers,
      body,
    })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  // LOGOUT

  static logout() {
    return fetch(obtenerUrl("logoutadmin"), { method: "POST", headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  // REGISTER

  static register(body) {
    return fetch(obtenerUrl("registrar"), { method: "POST", body, headers })
      .then(procesarRespuesta)
      .catch(manejarErrores);
  }

  // GET CLIENTS

  static getCliente(opciones = {}) {

    const queryParams = new URLSearchParams({});

    return fetch(obtenerUrl("clientes" + queryParams), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores)

  }

  static getClienteById(id) {
    return fetch(obtenerUrl(`cliente/${id}`), { headers })
      .then(procesarRespuesta)
      .catch(manejarErrores)
  }

// POST CLIENTE

static postCliente(body) {
  return fetch(obtenerUrl("nuevocliente"), { method: "POST", headers, body })
    .then(procesarRespuesta)
    .catch(manejarErrores);
}
// PUT CLIENTE

static modificarCliente(id, body) {
  return fetch(obtenerUrl(`modificarcliente/${id}`), { method: "PUT", headers, body })
  .then(procesarRespuesta)
  .catch(manejarErrores);
}

// DELETE CLIENTE

static deleteCliente(id) {
  return fetch(obtenerUrl(`cliente/${id}`), { method: "DELETE", headers })
}

}

