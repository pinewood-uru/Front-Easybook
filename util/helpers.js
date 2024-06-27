import { RequestsAPI } from "../RequestsAPI.js";

export const obtenerValorInput = (idInput) =>
  document.getElementById(idInput).value;

export const imprimir = (elemento, contenido) => {
    document.querySelector(`#${elemento}`).innerHTML = contenido;
  };