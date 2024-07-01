export default class Cliente{
    id;
    nombre;
    apellido;
    mail;
    celular;
    horario;
    personas;
    constructor(id=0, nombre= "", apellido= "", horario="", personas="", mail="", celular=""){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;       
        this.horario = horario;
        this.personas = personas; 
        this.mail = mail;
        this.celular = celular;
    }


mostrarclientes(){
    return `<tr class="item-lista">
    <th scope="row">${this.id}</th>
    <td>${this.nombre}</td>
    <td>${this.apellido}</td>
    <td>${this.personas}</td>
    <td>${this.horario}</td>
    <td><button class="btn btn-danger btn-eliminar" data-id="${this.id}">Eliminar</button></td>
    <td><button class="btn btn-primary btn-modificar" data-id="${this.id}"> Modificar</button></td>
</tr>`;
}
}

