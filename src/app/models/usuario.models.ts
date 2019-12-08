// Utilizaremos un archivo de typescript para controlar las propiedades y posibles metodos que puede tener este usuario
// La idea principal es para que ayude a escribir sin cometer errores
// Y que ayude en toda parte donde necesite un usuario

export class UsuarioModel {
    email: string;
    password: string;
    nombre: string;
}

// si necesitara mas campos en mi formulario deberian agregarse en este modelo