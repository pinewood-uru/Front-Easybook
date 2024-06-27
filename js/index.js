import { imprimir } from "../util/helpers.js";
import { Cliente } from "./modelo/Cliente.js";
import { Request } from "./Request.js";

import{
    imprmir,
    obtenerValorInput
} from "./util/helpers.js";

const mostrarlistaClientes = (data) =>{
    imprmir("listado-error", "");
    const headerlista = ` <tr>
    <th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Personas</th>
    <th scope="col">Hora</th>
</tr>`;

    const listadoCliente = data.map((cliente)=>
        new Cliente(
            cliente.id,
            cliente.nombre,
            cliente.apellido,
            cliente.personas,
            cliente.horario
        ).mostrarclientes()
    ).join("");

    imprimir("listado", `<tableclass="container-fluid table table-bordered border-primary w-100 justify-content-start"><thead>${headerlista}${listadoCliente}</table>`);

    document.querySelectorAll(".item-lista").forEach((itemlistado)=>{
        itemlistado.addEventListener("click", ()=>{
            document.location.replace(`detalle-cliente.html?id=${itemlistado.id}`);
    });
    });

    
}

// ERROR
const mostrarError = (error) => {
        imprimir("lista-error", error);
      };

// LISTADO
Request.getCliente(0).then(mostrarlistaClientes).catch(mostrarError);