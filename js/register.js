import { validarSesion, obtenerValorInput, imprimir } from "../util/helpers.js";
import { Request } from "../Request.js";

validarSesion();

document.querySelector("#btn-register").addEventListener("click", () => {

    const nombre = obtenerValorInput("form-register-nombre");
    const sucursal = obtenerValorInput("form-register-sucursal");
    const email = obtenerValorInput("form-register-email");
    const password = obtenerValorInput("form-register-password");

    if(!nombre || !sucursal || !email || !password) {
        imprimir("form-register-error", "Completar todos los campos");
        return;
    }

    const body = JSON.stringify({
        nombre,
        sucursal,
        email,
        password
    });

    Request.register(body)
    .then(()=> {
        document.location.replace("index.html");
    }).then(() => {
        alert("Se ha registrado con exito");
    })
    .catch((error) => {
        imprimir("form-register-error", error);
    });
});

