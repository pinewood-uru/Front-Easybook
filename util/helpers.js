import { Request } from "../Request.js";

export const obtenerValorInput = (idInput) =>
  document.getElementById(idInput).value;

export const imprimir = (elemento, contenido) => {
    document.querySelector(`#${elemento}`).innerHTML = contenido;
  };


// VALIDAR SESSION 

export const validarSesion = () => {

  const restaurantelog = sessionStorage.getItem("session");

  // verificamos si estamos en la pagina de login o register
  const estaEnLogin = document.location.pathname.includes("login.html");
  const estaEnRegister = document.location.pathname.includes("nuevoadm.html");
  const estaEnPaginaPublica = estaEnLogin || estaEnRegister;

  // si el usuario esta logueado y esta en una pagina publica, lo redirigimos al index
  if (restaurantelog) {
    if (estaEnPaginaPublica) {
      document.location.replace("index.html");
    }
  } else {
    // si no estas logueado,y esta en una pagina restringida, redirigimos al login
    if (!estaEnPaginaPublica) {
      document.location.replace("login.html");
    }
  }
};

// function para agregar evento click al boton de cerrar sesion
export const eventoClickCerrarSesion = () => {
  document.querySelector("#boton-logout").addEventListener("click", () => {
    sessionStorage.removeItem("session");
    Request.logout().then(() => {
      document.location.replace("login.html");
    });
  });
};