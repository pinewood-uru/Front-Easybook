import Cliente from "../js/modelo/Cliente.js"
import { Request } from "../Request.js";
import { imprimir } from "../util/helpers.js";

const mostrarlistaClientes = (data) => {
    console.log('Clientes: ', data)
    imprimir("lista-error", "");
    const headerlista = `<tr>
    <th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Peronsas</th>
    <th scope="col">Horario</th>
    <th scope="col"> Eliminar</th>
    <th scope="col"> Modificar</th>
    </tr>`;

    const listadoCliente = data.map((cliente) =>
        new Cliente(
            cliente.id,
            cliente.nombre,
            cliente.apellido,
            cliente.horario,
            cliente.personas,
            cliente.mail,
            cliente.celular,
        ).mostrarclientes());
    
    imprimir("listado",`<table class="container-fluid table table-bordered border-primary w-100 justify-content-start"><thead>${headerlista}</thead><tbody>${listadoCliente}<tbody></table>`)

}

// ERROR
const mostrarError = (error) => {
    imprimir("lista-error", error);
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const id = event.target.getAttribute('data-id');
        Request.deleteCliente(id).then(() => {
            alert("Eliminado con exito");
            document.location.replace("Reservas.html");
            // mostrarlistaClientes()
        }).catch(mostrarError);
    }
});


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-modificar')) {
        const id = event.target.getAttribute('data-id');
        Request.modificarCliente(id).then(() => {
            
            document.location.replace("reservaCliente.html?id=" + id);
            // mostrarlistaClientes()
        }).catch(mostrarError);
    }});

// LISTADO
Request.getCliente().then(mostrarlistaClientes).catch(mostrarError);