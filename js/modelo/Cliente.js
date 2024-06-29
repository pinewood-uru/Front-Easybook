export default class Cliente{
    id;
    nombre;
    apellido;
    horario;
    personas;
    constructor(id=0, nombre= "", apellido= "", horario="", personas=""){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.horario = horario;
        this.personas = personas;
    }


mostrarclientes(){
    return `<tr class="item-lista">
    <th scope="row">${this.id}</th>
    <td>${this.nombre}</td>
    <td>${this.personas}</td>
    <td>${this.apellido}</td>
    <td>${this.personas}</td>
    <td>${this.horario}</td>
</tr>`;
}

// mostrarDetalle(){
//     return `<tr>
//     <th scope="row">${this.id}</th>
//     <td>${this.nombre}</td>
//     <td>${this.personas}</td>
//     <td>${this.apellido}</td>
//     <td>${this.personas}</td>
//     <td>${this.horario}</td>
// </tr>`;
}
// }
